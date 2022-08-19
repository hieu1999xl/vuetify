<template>
    <v-navigation-drawer app clipped hide-overlay :mini-variant="miniVariant" v-model="drawer" :permanent="permanent" color="white" class="text-body-1">
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="text-h6"> System Permissions </v-list-item-title>
                <v-list-item-subtitle> Global System</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item-group v-model="active" color="primary">
                <v-list-item v-for="item in items" :key="item.title" :to="item.path">
                    <v-list-item-icon class="mr-2">
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

        <template v-if="!miniVariant" v-slot:append>
            <v-divider></v-divider>
            <v-sheet class="pa-2">
                <v-sheet>
                    <span class="font-weight-bold">CVG Building Group</span>
                </v-sheet>
                <v-sheet>
                    <span class="text-subtitle-2">© 2020-2022 - Phiên bản 1.1.1</span>
                </v-sheet>
            </v-sheet>
        </template>
    </v-navigation-drawer>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'BaseNavigator',
        data: () => ({
            active: 0,
            items: [
                { title: 'Main Menu', icon: 'mdi-dots-grid', path: '/' },
                { title: 'Sample Function 1', icon: 'mdi-account-multiple-outline', path: '/sample-function-1' },
                { title: 'Sample Function 2', icon: 'mdi-file-tree-outline', path: '/clone' },
                { title: 'Sample Function 3', icon: 'mdi-account-cog-outline', path: '/sample-function-3' },
                { title: 'Sample Function 4', icon: 'mdi-cog-transfer-outline', path: '/sample-function-4' },
            ],
        }),
        computed: {
            ...mapGetters('AppState', ['sidebar']),
            permanent() {
                return this.$vuetify.breakpoint.lgAndUp && this.sidebar.permanent
            },
            miniVariant() {
                return this.$vuetify.breakpoint.lgAndUp && this.sidebar.miniVariant
            },
            drawer: {
                get() {
                    return !!this.sidebar.show
                },
                set(value) {
                    if (value) {
                        this.showSidebar()
                    } else {
                        this.hideSidebar()
                    }
                },
            },
        },
        methods: {
            ...mapActions('AppState', ['showSidebar', 'hideSidebar']),
        },
        watch: {
            $route(to) {
                const path = to.path
                if (path.startsWith('/sample-function-1')) {
                    this.active = 1
                } else if (path.startsWith('/sample-function-2')) {
                    this.active = 2
                } else if (path.startsWith('/sample-function-3')) {
                    this.active = 3
                } else if (path.startsWith('/sample-function-4')) {
                    this.active = 4
                } else {
                    this.active = 0
                }
            },
        },
    }
</script>

<style lang="scss"></style>
