<template>
    <v-sheet height="100%" width="100%" max-width="300px">
        <perfect-scrollbar>
            <v-sheet class="pa-4">
                <v-sheet class="my-4 mt-0">
                    <p class="mb-1 text-subtitle-2">Tiêu đề:</p>
                    <p class="mb-0 text-body-1">Tiêu đề ví dụ của entity sample 01</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">URL Slug:</p>
                    <p class="mb-0 text-body-1">tieu-de-vi-du-cua-entity-sample-01</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Title:</p>
                    <p class="mb-0 text-body-1">Tiêu đề ví dụ của entity sample 01</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Keywords:</p>
                    <p class="mb-0 text-body-1">Keyword, Keyword, Keyword, Keyword, Keyword, Keyword, Keyword, Keyword</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Description:</p>
                    <p class="mb-0 text-body-1">
                        This is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                </v-sheet>
                <v-divider></v-divider>
                <v-sheet class="my-2 text-center">
                    <v-btn elevation="0" small class="mr-2" min-width="70" color="primary" dark @click="onClickSave">
                        <v-icon small class="mr-1">mdi-content-save-outline </v-icon>
                        <span>Lưu</span>
                    </v-btn>
                    <v-btn elevation="0" small min-width="70" color="grey darken-1" dark @click="onClickCancel">
                        <v-icon small class="mr-1">mdi-close</v-icon>
                        <span>Hủy</span>
                    </v-btn>
                </v-sheet>
            </v-sheet>
        </perfect-scrollbar>
    </v-sheet>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'FormInfoBox',
        methods: {
            ...mapActions('SampleForm', ['showConfirmDialog']),
            onClickCancel() {
                this.showConfirmDialog('CANCEL')
            },
            onClickSave() {
                console.log('click save')
            },
        },
    }
</script>

<style scoped></style>
