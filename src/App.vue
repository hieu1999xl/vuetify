<template>
    <base-layout>
        <router-view></router-view>
    </base-layout>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'App',
        computed: {
            ...mapGetters('AppState', ['status', 'error']),
        },
        data() {
            return {
                aa: this.$route.name,
            }
        },
        methods: {
            ...mapActions('AppState', ['initialize', 'showErrorMsg']),
        },
        mounted() {
            this.initialize()
        },
        errorCaptured(error) {
            console.error(error)
            this.showErrorMsg(error)
            return false
        },
    }
</script>
