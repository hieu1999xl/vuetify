<template>
    <v-sheet color="transparent" height="100%" width="100%" min-height="300" min-width="300" class="pa-4 d-flex align-center justify-center">
        <v-sheet color="transparent" class="ma-auto text-center" width="100%" max-width="420">
            <v-sheet color="transparent" class="text-center">
                <v-icon size="80" color="red" class="mx-auto">mdi-heart-broken</v-icon>

                <p class="mt-3 mb-0 text-h5 red--text">Đã Có Lỗi Xảy Ra!</p>
                <p class="mt-1 mb-0 red--text">Hệ thống gặp trục trặc khi xử lý yêu cầu.</p>

                <p class="mt-4 mb-0 red--text">Vui lòng tải lại trang để thử lại.</p>
                <p class="mb-0 red--text">Hoặc liên hệ ban công nghệ để được hỗ trợ.</p>
            </v-sheet>
            <v-sheet flat tile color="transparent" class="my-5">
                <v-btn elevation="0" dark color="primary" @click="reload">Tải lại trang</v-btn>
            </v-sheet>
            <v-sheet v-if="error && error.message" color="red" class="text-left" outlined rounded width="100%">
                <v-card flat rounded color="red lighten-5" class="pa-2">
                    <p class="mb-0 text-body-1">
                        {{ error.message }}
                    </p>
                </v-card>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
    export default {
        name: 'ErrorMessageBox',
        props: {
            error: {
                type: [Error, String, Number],
                default: undefined,
            },
        },
        methods: {
            reload() {
                location.reload()
            },
        },
    }
</script>

<style scoped></style>
