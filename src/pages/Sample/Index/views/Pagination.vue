<template>
    <v-sheet v-if="pagination.totalPages > 0" color="transparent" class="my-4">
        <p class="mb-2 text-center">
            <span>
                Tổng <span class="font-weight-medium">{{ pagination.totalItems }}</span>
            </span>
            <span> | </span>
            <span>
                Trang <span class="font-weight-medium">{{ pagination.pageNo }} </span>
            </span>
            <span> (</span>
            <span>{{ (pagination.pageNo - 1) * pagination.pageSize }}</span>
            <span> ~ </span>
            <span v-if="pagination.pageNo * pagination.pageSize < pagination.totalItems">{{ pagination.pageNo * pagination.pageSize }}</span>
            <span v-else>{{ pagination.totalItems }}</span>
            <span> )</span>
        </p>
        <v-pagination elevation="0" class="elevation-0" color="primary" v-model="page" :length="length" :total-visible="5" :disabled="isLoading"></v-pagination>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Pagination',
        data: () => ({
            page: 1,
        }),
        computed: {
            ...mapGetters('SampleIndex', ['isLoading', 'pagination']),
            length() {
                return this.pagination.totalPages
            },
        },
        methods: {
            ...mapActions('SampleIndex', ['changePageNo']),
        },
        watch: {
            page() {
                this.changePageNo(this.page)
            },
            'pagination.pageNo'() {
                if (this.pagination.pageNo != this.page) {
                    this.page = this.pagination.pageNo
                }
            },
        },
        mounted() {
            this.page = this.pagination.pageNo
        },
    }
</script>

<style scoped></style>
