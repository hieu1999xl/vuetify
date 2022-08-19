<template>
    <v-sheet>
        <v-card flat tile color="grey lighten-4" class="align-self-center px-4">
            <v-file-input ref="imageInput" accept=".jpg,.png" label="File input" class="d-none" @change="onFileChange"></v-file-input>

            <v-sheet v-if="!url" color="transparent" height="300">
                <template v-if="uploading">
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                </template>

                <template v-else>
                    <v-row align="center" class="fill-height">
                        <v-col align-self="center" class="text-center">
                            <v-btn icon @click="pickImage">
                                <v-icon>mdi-image</v-icon>
                            </v-btn>

                            <p class="blue-grey--text text-subtitle-2 mb-0">Thêm ảnh</p>
                            <p class="blue-grey--text text-caption mb-0">Vui lòng tải ảnh định dạng png hoặc jpg, và dung lượng không quá 1MB.</p>
                        </v-col>
                    </v-row>
                </template>
            </v-sheet>
            <v-sheet v-if="url" color="transparent">
                <v-img :src="url" @click="pickImage" contain></v-img>
            </v-sheet>
        </v-card>
    </v-sheet>
</template>

<script>
    export default {
        name: 'ImageInput',
        model: {
            prop: 'value',
            event: 'change',
        },
        props: {
            value: {
                type: String,
                required: true,
            },
            uploading: {
                type: Boolean,
            },
            index: {
                type: Number,
            },
        },
        data: () => ({
            url: null,
            isLoading: false,
        }),
        methods: {
            pickImage() {
                this.$refs.imageInput.$refs.input.click()
            },
            onFileChange(file) {
                this.file = file
                this.$emit('change', { index: this.index, file })
            },
        },
        watch: {
            value: {
                immediate: true,
                handler(newVal) {
                    this.url = newVal
                },
            },
            uploading() {
                this.isLoading = this.uploading
                if (this.uploading) {
                    this.url = ''
                }
            },
        },
    }
</script>

<style scoped></style>
