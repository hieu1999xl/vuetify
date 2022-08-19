<template>
    <v-sheet color="transparent" class="my-4">
        <v-sheet color="transparent" class="py-2">
            <v-row dense align="center">
                <v-col cols="6" md="6">
                    <v-sheet color="transparent" class="d-flex align-center justify-start">
                        <v-btn elevation="0" small color="teal darken-1" dark>
                            <v-icon small class="mr-1">mdi-order-numeric-ascending</v-icon>
                            <span>Sắp xếp</span>
                        </v-btn>
                    </v-sheet>
                </v-col>
                <v-col cols="6" md="6">
                    <v-sheet color="transparent" class="d-flex align-center justify-end">
                        <v-btn elevation="0" small left dark color="orange darken-2" class="mr-1" min-width="100" @click="onClickAddPost">
                            <v-icon small>mdi-plus-circle-outline</v-icon>
                            <span>Thêm Mới</span>
                        </v-btn>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-sheet>

        <template v-if="pagination.totalItems > 0">
            <template v-for="(item, idx) in list">
                <v-card :key="idx" outlined class="my-2 pa-2">
                    <v-row dense align="center">
                        <v-col cols="12" md="4">
                            <v-sheet color="transparent" class="d-flex align-center justify-start">
                                <v-sheet color="transparent" width="32" height="32" class="d-flex align-center justify-start">
                                    <v-btn icon small :to="`/sample-function-1/${item.id}`" target="_blank">
                                        <v-icon small>mdi-open-in-new</v-icon>
                                    </v-btn>
                                </v-sheet>
                                <v-sheet color="transparent" width="calc(100% - 32px)" height="32" class="d-flex align-center justify-start">
                                    <p class="mb-0 text-truncate font-weight-medium">
                                        <router-link :to="{ path: `/sample-function-1/${item.id}` }" class="list-item-link">
                                            {{ item.title }}
                                        </router-link>
                                    </p>
                                </v-sheet>
                            </v-sheet>
                            <v-divider class="mt-1 d-block d-md-none"></v-divider>
                        </v-col>
                        <v-col cols="12" md="5">
                            <v-row dense align="center">
                                <v-col>
                                    <v-sheet color="transparent" width="calc(100%)" height="32" class="d-flex align-center justify-start">
                                        <span class="font-weight-medium mr-2">Phân loại:</span>
                                        <v-chip v-if="item.category === 'GROUP-INTRO'" small color="blue-grey lighten-5"> Thông Tin TĐ </v-chip>
                                        <v-chip v-else small color="blue-grey lighten-5"> Thông Tin Khác </v-chip>
                                    </v-sheet>
                                </v-col>
                                <v-col>
                                    <v-sheet color="transparent" width="calc(100%)" height="32" class="d-flex align-center justify-start">
                                        <span class="font-weight-medium mr-2">Trạng Thái:</span>
                                        <v-chip v-if="item.status === 'PUBLISHED'" small color="blue-grey lighten-5"> Hiển thị </v-chip>
                                        <v-chip v-else small color="blue-grey lighten-5"> Tạm ẩn </v-chip>
                                    </v-sheet>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" md="3" class="text-center text-md-right text-lg-right">
                            <v-divider class="mb-2 d-block d-md-none"></v-divider>
                            <v-sheet color="transparent" class="text-center text-md-right text-lg-right">
                                <v-btn elevation="0" small text class="mr-1" min-width="50" color="indigo" @click="onClickHidePost(item.id)">
                                    <v-icon small class="mr-1">mdi-eye-off-outline</v-icon>
                                    <span>Ẩn</span>
                                </v-btn>
                                <v-btn elevation="0" small text class="d-none d-lg-inline-block mr-1" min-width="50" color="deep-purple" @click="onClickEditPost(item.id)">
                                    <v-icon small class="mr-1">mdi-pencil-outline</v-icon>
                                    <span>Sửa</span>
                                </v-btn>
                                <v-btn elevation="0" small text min-width="50" color="red" @click="onClickRemovePost(item.id)">
                                    <v-icon small class="mr-1">mdi-trash-can-outline</v-icon>
                                    <span>Xóa</span>
                                </v-btn>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-card>
            </template>
        </template>
        <template v-else>
            <empty-data-box />
        </template>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'ListView',
        data: () => ({}),
        computed: {
            ...mapGetters('SampleIndex', ['status', 'list', 'isLoading', 'pagination']),
        },
        methods: {
            ...mapActions('SampleIndex', ['showConfirmDialog']),
            onClickAddPost() {
                this.$router.push({ path: `/sample-function-1/add` })
            },
            onClickEditPost(id) {
                this.$router.push({ path: `/sample-function-1/${id}/edit` })
            },
            onClickHidePost(id) {
                this.showConfirmDialog({ action: 'HIDE', targetId: id })
            },
            onClickShowPost(id) {
                this.showConfirmDialog({ action: 'SHOW', targetId: id })
            },
            onClickRemovePost(id) {
                this.showConfirmDialog({ action: 'REMOVE', targetId: id })
            },
        },
    }
</script>

<style scoped></style>
