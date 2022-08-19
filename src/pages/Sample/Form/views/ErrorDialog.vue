<template>
    <v-dialog v-model="dialog" persistent max-width="420">
        <v-card>
            <v-card-title class="text-h5">
                <template v-if="errorType === 'UPLOAD_IMAGE'">Tải ảnh lên không thành công!</template>
            </v-card-title>
            <v-card-text class="text-body-1 black--text pb-0">
                <p>
                    <template v-if="errorType === 'UPLOAD_IMAGE'">Đã có lỗi xảy ra trong quá trình tải ảnh lên. Vui lòng thử lại sau.</template>
                    <template v-else-if="errorType === 'DELETE_SECTION'">Đã có lỗi xảy ra.</template>
                </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn elevation="0" color="primary" small dark @click="onClickConfirm"> Xác Nhận </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'ErrorDialog',
        data: () => ({
            dialog: false,
        }),
        computed: {
            ...mapGetters('SampleForm', ['errorDialog', 'errorType']),
        },
        methods: {
            ...mapActions('SampleForm', ['hideErrorDialog']),
            onClickConfirm() {
                this.dialog = false
                this.hideErrorDialog()
            },
        },
        watch: {
            errorDialog() {
                this.dialog = this.errorDialog
                console.log('is error ?', this.dialog)
            },
        },
        mounted() {
            this.dialog = this.errorDialog
        },
    }
</script>

<style scoped></style>
