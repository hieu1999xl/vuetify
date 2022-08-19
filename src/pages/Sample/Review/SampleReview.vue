<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <template v-if="status === 'READY'">
            <loading-animation />
        </template>
        <template v-else-if="status === 'ERROR'">
            <error-message-box />
        </template>
        <template v-else-if="status === 'WORKING'">
            <review-layout></review-layout>
            <confirm-dialog></confirm-dialog>
        </template>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import ReviewLayout from './views/ReviewLayout'
    import ConfirmDialog from './views/ConfirmDialog'

    export default {
        name: 'SampleReview',
        components: { ConfirmDialog, ReviewLayout },
        data: () => ({
            reloadInterval: undefined,
        }),
        computed: {
            ...mapGetters('SampleReview', ['status', 'error', 'list', 'isLoading']),
        },
        methods: {
            ...mapActions('AppState', ['collapseSidebar', 'expandSidebar', 'permanentSidebar', 'impermanentSidebar']),
            ...mapActions('SampleReview', ['initialize', 'showErrorMsg', 'destroy', 'reloadData']),
            onClickReload() {
                this.reloadData()
            },
        },
        mounted() {
            this.collapseSidebar()
            this.impermanentSidebar()
            this.initialize(this.$route.params.id)
            this.reloadInterval = setInterval(() => {
                this.reloadData()
            }, 30000)
        },
        beforeDestroy() {
            clearInterval(this.reloadInterval)
            this.destroy()
            // this.expandSidebar()
            this.permanentSidebar()
        },
        errorCaptured(error) {
            console.error(error)
            this.showErrorMsg(error)
            return false
        },
    }
</script>

<style scoped></style>
