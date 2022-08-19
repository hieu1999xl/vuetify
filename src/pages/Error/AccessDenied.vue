<template>
    <v-sheet color="transparent" height="100%" width="100%" min-height="300" min-width="300" class="pa-4 d-flex align-center justify-center">
        <v-sheet color="transparent" class="ma-auto text-center" width="100%" max-width="420">
            <v-sheet color="transparent" class="text-center">
                <v-icon size="80" color="red" class="mx-auto">mdi-block-helper</v-icon>
                <p class="mt-3 mb-0 text-h5 red--text">Truy Cập Bị Từ Chối!</p>
                <p class="mt-1 mb-0 red--text">Tài khoản không có quyền truy cập.</p>

                <p class="mt-4 mb-0 red--text">Vui lòng liên hệ quản lý để được cấp quyền.</p>
                <p class="mb-0 red--text">Hoặc đăng nhập với tài khoản khác.</p>
            </v-sheet>
            <v-sheet flat tile color="transparent" class="my-5">
                <v-btn elevation="0" dark color="primary" @click="onClickLogout">Đăng Nhập Tài Khoản Khác</v-btn>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
    export default {
        name: 'AccessDenied',
        methods: {
            onClickLogout() {
                window.location.href = '/logout'
            },
        },
    }
</script>

<style scoped></style>
