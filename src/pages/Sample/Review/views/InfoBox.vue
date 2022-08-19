<template>
    <v-sheet height="100%" width="100%" max-width="300px">
        <perfect-scrollbar>
            <v-sheet v-if="item" class="pa-4">
                <v-sheet class="my-4 mt-0">
                    <p class="mb-1 text-subtitle-2">Tiêu đề:</p>
                    <p class="mb-0 text-body-1">{{ item.title }}</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Phân loại:</p>
                    <p class="mb-0">
                        <v-chip v-if="item.category === 'GROUP-INTRO'" small color="blue-grey lighten-5"> Thông Tin TĐ </v-chip>
                        <v-chip v-else small color="blue-grey lighten-5"> Thông Tin Khác </v-chip>
                    </p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Trạng thái:</p>
                    <p class="mb-0">
                        <v-chip v-if="item.status === 'PUBLISHED'" small color="blue-grey lighten-5"> Hiển thị </v-chip>
                        <v-chip v-else small color="blue-grey lighten-5"> Tạm ẩn </v-chip>
                    </p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">URL Slug:</p>
                    <p class="mb-0 text-body-1">{{ item.urlSlug }}</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Title:</p>
                    <p class="mb-0 text-body-1">{{ item.metaTitle }}</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Keywords:</p>
                    <p class="mb-0 text-body-1">{{ item.metaKeyword }}</p>
                </v-sheet>
                <v-sheet class="my-4">
                    <p class="mb-1 text-subtitle-2">Meta Description:</p>
                    <p class="mb-0 text-body-1">
                        {{ item.metaDescription }}
                    </p>
                </v-sheet>
                <v-divider></v-divider>
                <v-sheet class="my-2 text-center">
                    <v-btn elevation="0" small class="mr-2" min-width="70" color="indigo" dark @click="onCLickHidePost">
                        <v-icon small class="mr-1">mdi-eye-off-outline</v-icon>
                        <span>Ẩn</span>
                    </v-btn>
                    <v-btn elevation="0" small class="mr-2" min-width="70" color="deep-purple" dark @click="onClickEditPost">
                        <v-icon small class="mr-1">mdi-pencil-outline</v-icon>
                        <span>Sửa</span>
                    </v-btn>
                    <v-btn elevation="0" small min-width="70" color="red" dark @click="onCLickRemovePost">
                        <v-icon small class="mr-1">mdi-trash-can-outline</v-icon>
                        <span>Xóa</span>
                    </v-btn>
                </v-sheet>
            </v-sheet>
        </perfect-scrollbar>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'InfoBox',
        computed: {
            ...mapGetters('SampleReview', ['id', 'item']),
        },
        methods: {
            ...mapActions('SampleReview', ['changeViewMode', 'showConfirmDialog']),
            onClickEditPost() {
                this.$router.push({ path: `/sample-function-1/${this.id}/edit` })
            },
            onCLickHidePost() {
                this.showConfirmDialog('HIDE')
            },
            onCLickRemovePost() {
                this.showConfirmDialog('REMOVE')
            },
        },
    }
</script>

<style scoped></style>
