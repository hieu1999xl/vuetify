<template>
    <v-sheet color="transparent" class="my-4">
        <v-card flat outlined class="pa-4">
            <v-row dense>
                <v-col cols="12" md="5">
                    <v-text-field v-model="keyword" dense hide-details placeholder="Tìm kiếm" prepend-inner-icon="mdi-magnify" />
                </v-col>
                <v-col cols="12" md="4">
                    <v-combobox v-model="category" :items="categoryOptions" dense prefix="Phân loại:" />
                </v-col>
                <v-col cols="12" md="3" class="text-center">
                    <v-btn elevation="0" small left dark color="indigo darken-1" class="mr-1" min-width="100" :loading="isLoading" @click="onClickSearch">
                        <v-icon small>mdi-magnify</v-icon>
                        <span>Tìm Kiếm</span>
                    </v-btn>
                    <v-btn elevation="0" small left dark color="grey darken-1" class="ml-1" min-width="100" :loading="isLoading" @click="onClickReset">
                        <v-icon small>mdi-cached</v-icon>
                        <span>Tải Lại</span>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'SearchForm',
        data: () => ({
            keyword: '',
            category: {
                value: '',
                text: 'Tất cả',
            },
            categoryOptions: [
                {
                    value: '',
                    text: 'Tất cả',
                },
                {
                    value: 'GROUP_INTRO',
                    text: 'Thông Tin Tập Đoàn',
                },
                {
                    value: 'GROUP_POLICY',
                    text: 'Chính Sách Sử Dụng',
                },
            ],
        }),
        computed: {
            ...mapGetters('SampleIndex', ['isLoading', 'search']),
            length() {
                return this.pagination.totalPages
            },
        },
        methods: {
            ...mapActions('SampleIndex', ['changeSearch']),
            onClickSearch() {
                const data = {
                    keyword: '',
                    category: '',
                }
                data.keyword = this.keyword.trim() ? this.keyword.trim() : ''
                data.category = this.category && this.category.value ? this.category.value : ''
                this.changeSearch(data)
                console.log('data', data)
            },
            onClickReset() {
                this.keyword = ''
                this.category = {
                    value: '',
                    text: 'Tất cả',
                }
                const data = {
                    keyword: '',
                    category: '',
                }
                this.changeSearch(data)
            },
        },
        mounted() {
            this.keyword = this.search.keyword
            this.category = this.categoryOptions.find(x => x.value === this.search.category)
        },
    }
</script>

<style scoped></style>
