<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <template v-if="status === 'READY'">
            <loading-animation />
        </template>
        <template v-else-if="status === 'ERROR'">
            <error-message-box :error="error" />
        </template>
        <template v-else-if="status === 'WORKING'">
            <form-layout></form-layout>
            <confirm-dialog></confirm-dialog>
            <error-dialog></error-dialog>
        </template>
    </v-sheet>
</template>

<script>
    import FormLayout from '@/pages/Sample/Form/views/FormLayout'
    import { mapActions, mapGetters } from 'vuex'
    import ConfirmDialog from '@/pages/Sample/Form/views/ConfirmDialog'
    import ErrorDialog from '@/pages/Sample/Form/views/ErrorDialog'

    export default {
        name: 'SampleForm',
        components: { ErrorDialog, ConfirmDialog, FormLayout },
        data: () => ({}),
        computed: {
            ...mapGetters('SampleForm', ['status', 'error']),
        },
        methods: {
            ...mapActions('AppState', ['collapseSidebar', 'expandSidebar', 'permanentSidebar', 'impermanentSidebar']),
            ...mapActions('SampleForm', ['initialize', 'showErrorMsg', 'destroy']),
            onClickReload() {
                this.reloadData()
            },
        },
        mounted() {
            this.collapseSidebar()
            this.impermanentSidebar()
            this.initialize(this.$route.params.id)
        },
        beforeDestroy() {
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
