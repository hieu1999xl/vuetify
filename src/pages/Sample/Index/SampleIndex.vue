<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <perfect-scrollbar>
            <v-container style="max-width: 1185px">
                <v-sheet color="transparent" class="py-2 d-flex align-center justify-start">
                    <v-sheet color="transparent">
                        <span class="text-h6">Sample Function 01</span>
                    </v-sheet>
                    <v-sheet color="transparent" class="ml-2">
                        <v-btn elevation="0" icon text plain color="grey darken-1" :loading="isLoading" @click="onClickReload">
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                    </v-sheet>
                </v-sheet>
                <template v-if="status === 'READY'">
                    <loading-animation />
                </template>
                <template v-else-if="status === 'ERROR'">
                    <error-message-box />
                </template>
                <template v-else-if="status === 'WORKING'">
                    <search-form></search-form>
                    <list-view></list-view>
                    <pagination></pagination>
                    <confirm-dialog></confirm-dialog>
                </template>
            </v-container>
        </perfect-scrollbar>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import SearchForm from './views/SearchForm'
    import ListView from './views/ListView'
    import Pagination from './views/Pagination'
    import ConfirmDialog from './views/ConfirmDialog'

    export default {
        name: 'SampleIndex',
        components: { ConfirmDialog, Pagination, ListView, SearchForm },
        data: () => ({
            reloadInterval: undefined,
        }),
        computed: {
            ...mapGetters('SampleIndex', ['status', 'error', 'list', 'isLoading']),
        },
        methods: {
            ...mapActions('SampleIndex', ['initialize', 'showErrorMsg', 'destroy', 'reloadData']),
            onClickReload() {
                this.reloadData()
            },
        },
        mounted() {
            this.initialize()
            this.reloadInterval = setInterval(() => {
                this.reloadData()
            }, 30000)
        },
        beforeDestroy() {
            clearInterval(this.reloadInterval)
            this.destroy()
        },
        errorCaptured(error) {
            console.error(error)
            this.showErrorMsg(error)
            return false
        },
    }
</script>

<style scoped></style>
