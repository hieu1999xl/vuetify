<template>
    <v-dialog v-model="dialog" persistent max-width="420">
        <v-card>
            <v-card-title class="text-h5">
                <template v-if="confirmAction === 'CANCEL'">Xác nhận hủy bỏ!</template>
                <template v-else-if="confirmAction === 'DELETE_SECTION'">Xác nhận xóa section!</template>
            </v-card-title>
            <v-card-text class="text-body-1 black--text pb-0">
                <p>
                    <template v-if="confirmAction === 'CANCEL'">Nếu hủy bỏ, những nội dung sửa đổi/thêm mới sẽ bị mất.</template>
                    <template v-else-if="confirmAction === 'DELETE_SECTION'">Section sẽ được xóa khỏi nội dung bài viết.</template>
                </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="grey darken-1" small dark @click="onClickCancel"> Hủy Bỏ </v-btn>
                <v-btn elevation="0" color="primary" small dark @click="onClickConfirm"> Xác Nhận </v-btn>
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
            ...mapGetters('SampleForm', ['confirmDialog', 'confirmAction']),
        },
        methods: {
            ...mapActions('SampleForm', ['hideConfirmDialog']),
            onClickCancel() {
                this.dialog = false
                this.hideConfirmDialog()
            },
            onClickConfirm() {
                if (this.confirmAction === 'CANCEL') {
                    this.hideConfirmDialog()
                    this.$router.push({ name: 'SampleIndex' })
                }
            },
        },
        watch: {
            // confirmDialog(newvaleu) {
            //     this.dialog = this.confirmDialog
            // },
        },
        mounted() {
            this.dialog = this.confirmDialog
        },
    }
</script>

<style scoped></style>
