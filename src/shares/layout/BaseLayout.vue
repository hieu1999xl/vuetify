<template>
    <v-app clipped-left class="text-body-1">
        <template v-if="status === 'READY'">
            <loading-animation />
        </template>
        <template v-else-if="status === 'ERROR'">
            <error-message-box :error="error" />
        </template>
        <template v-else-if="status === 'WORKING'">
            <base-header v-if="!isSystemError && $route.name !== 'LoginForm'" />
            <v-main color="transparent" class="overflow-hidden text-body-1">
                <v-sheet color="transparent" class="overflow-hidden text-body-1" :style="{ height: height }">
                    <slot></slot>
                </v-sheet>
            </v-main>
            <base-navigator v-if="sidebar.enabled && $route.name !== 'LoginForm'" />
            <v-snackbar v-model="showSnackbar" color="green darken-1">
                {{ snackbar.text }}
                <template v-slot:action="{ attrs }">
                    <v-btn color="white" text v-bind="attrs" @click="hideSnackbar()"> Close</v-btn>
                </template>
            </v-snackbar>
        </template>
    </v-app>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import BaseHeader from './BaseHeader'
    import BaseNavigator from './BaseNavigator'

    export default {
        name: 'BaseLayout',
        components: {
            BaseHeader,
            BaseNavigator,
        },
        data: () => ({}),
        computed: {
            ...mapGetters('AppState', ['status', 'error', 'sidebar', 'snackbar']),

            height() {
                return `calc(100vh - ${this.$vuetify.application.top}px)`
            },
            showSnackbar: {
                get: function () {
                    return this.snackbar.show
                },
                set: function (value) {
                    if (!value) {
                        this.hideSnackbar()
                    }
                },
            },
            isSystemError() {
                return this.$route.name === 'SystemError'
            },
        },
        methods: {
            ...mapActions('AppState', ['hideSnackbar']),
        },
        watch: {
            snackbar: {
                handler() {
                    this.showSnackbar = this.snackbar.show
                },
                deep: true,
            },
        },
    }
</script>

<style scoped lang="scss">
    .v-application {
        font-family: $body-font-family !important;
        background-color: var(--v-background-base) !important;
    }
</style>
