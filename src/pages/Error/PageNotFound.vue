<template>
    <v-sheet color="transparent" height="100%" width="100%" min-height="300" min-width="300" class="pa-4 d-flex align-center justify-center">
        <v-sheet color="transparent" class="ma-auto text-center" width="100%" max-width="420">
            <v-sheet color="transparent" class="text-center">
                <!--                <v-icon size="80" color="red" class="mx-auto">mdi-calendar-remove-outline</v-icon>-->
                <v-icon size="80" color="red" class="mx-auto">mdi-skull-crossbones</v-icon>

                <p class="mt-3 mb-0 text-h5 red--text">Trang Không Tồn Tại!</p>
                <p class="mt-1 mb-0 red--text">Không tìm thấy trang theo yêu cầu.</p>

                <p class="mt-4 mb-0 red--text">Vui lòng kiểm tra lại đường dẫn trang.</p>
                <p class="mb-0 red--text">Hoặc liên hệ ban công nghệ để được hỗ trợ.</p>
            </v-sheet>
            <v-sheet flat tile color="transparent" class="my-5">
                <v-btn elevation="0" dark color="primary" @click="onClickLogout">Quay Về Trang Chủ</v-btn>
            </v-sheet>
        </v-sheet>
    </v-sheet>
</template>

<script>
    export default {
        name: 'PageNotFound',
        methods: {
            onClickLogout() {
                window.location.href = ''
            },
        },
    }
</script>

<style scoped></style>
