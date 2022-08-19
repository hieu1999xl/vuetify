<template>
    <v-dialog v-model="dialog" persistent max-width="420">
        <v-card>
            <v-card-title class="text-h5">
                <template v-if="confirmAction === 'HIDE'">Xác nhận ẩn bài viết!</template>
                <template v-else-if="confirmAction === 'SHOW'">Xác nhận hiện bài viết!</template>
                <template v-else-if="confirmAction === 'REMOVE'">Xác nhận xóa bài viết!</template>
            </v-card-title>
            <v-card-text class="text-body-1 black--text pb-0">
                <p>
                    <template v-if="confirmAction === 'HIDE'">Ẩn bài viết: {{ title }}</template>
                    <template v-else-if="confirmAction === 'SHOW'">Hiện bài viết: {{ title }}</template>
                    <template v-else-if="confirmAction === 'REMOVE'">Xóa bài viết: {{ title }}</template>
                </p>
                <p v-if="hasErrorCode">
                    <v-alert dense outlined type="error"><strong>Có lỗi xảy ra!</strong> Vui lòng thử lại!</v-alert>
                </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="grey darken-1" small dark :loading="isActing" @click="onClickCancel"> Hủy Bỏ </v-btn>
                <v-btn elevation="0" color="primary" small dark :loading="isActing" @click="onClickConfirm"> Xác Nhận </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'ConfirmDialog',
        data: () => ({
            dialog: false,
        }),
        computed: {
            ...mapGetters('SampleIndex', ['list', 'confirmDialog', 'confirmAction', 'targetId', 'isActing', 'hasErrorCode']),
            title() {
                if (this.targetId) {
                    const item = this.list.find(x => x.id === this.targetId)
                    if (item) {
                        return item.title
                    }
                }

                return ''
            },
        },
        methods: {
            ...mapActions('SampleIndex', ['hideConfirmDialog', 'hidePost', 'showPost', 'removePost']),
            onClickCancel() {
                this.dialog = false
                this.hideConfirmDialog()
            },
            onClickConfirm() {
                if (this.confirmAction === 'HIDE') {
                    this.hidePost(this.targetId)
                } else if (this.confirmAction === 'SHOW') {
                    this.showPost(this.targetId)
                } else if (this.confirmAction === 'REMOVE') {
                    this.removePost(this.targetId)
                }
            },
        },
        watch: {
            confirmDialog() {
                this.dialog = this.confirmDialog
            },
        },
        mounted() {
            this.dialog = this.confirmDialog
        },
    }
</script>

<style scoped></style>
