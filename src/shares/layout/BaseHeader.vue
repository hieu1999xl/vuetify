<template>
    <v-app-bar app clipped-left height="50" color="white border-bottom" elevation="2">
        <v-sheet height="40" width="148" class="d-none d-md-block mr-3" style="cursor: pointer" @click="onClickLogo">
            <v-img src="@/assets/logo.png" alt="CVG Building Management System" height="40" width="148" max-width="148" contain />
        </v-sheet>
        <v-btn icon :disabled="!sidebar.enabled" :color="active ? 'primary' : 'grey darken-2'" @click="onClickMenuButton">
            <v-icon :color="active ? 'primary' : 'grey darken-2'" size="40">mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-sheet height="40" width="40" class="d-block d-md-none" style="cursor: pointer" @click="onClickLogo">
            <v-img src="@/assets/icon.png" alt="CVG Building Administrator" height="40" max-width="40" contain></v-img>
        </v-sheet>
        <v-spacer></v-spacer>
        <v-sheet>
            <v-menu v-if="user" rounded="0" :open-on-hover="$vuetify.breakpoint.mdAndUp" offset-y transition="slide-x-transition" bottom right>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn :text="$vuetify.breakpoint.mdAndUp" :icon="!$vuetify.breakpoint.mdAndUp" v-bind="attrs" v-on="on">
                        <span class="d-none d-md-block mr-2 font-weight-medium">{{ user.fullName }}</span>
                        <v-avatar color="orange lighten-1" size="32">
                            <span class="white--text">{{ avatar }}</span>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-sheet class="pa-2">
                    <v-list dense>
                        <v-list-item dense link :href="config.sso + '/user/profile'" class="px-2">
                            <v-list-item-icon class="mr-2">
                                <v-icon>mdi-shield-account</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-2">Thông tin tài khoản</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item dense link :href="config.sso + '/user/pass'" class="px-2">
                            <v-list-item-icon class="mr-2">
                                <v-icon>mdi-shield-key</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="text-body-2">Thay đổi mật khẩu</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-divider></v-divider>
                    <v-btn text block depressed elevation="0" color="red" class="mt-2" @click="onClickLogout">
                        <span>Đăng xuất</span>
                        <v-icon right> mdi-logout </v-icon>
                    </v-btn>
                </v-sheet>
            </v-menu>
        </v-sheet>
    </v-app-bar>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'BaseHeader',
        computed: {
            ...mapGetters('AppState', ['config', 'auth', 'sidebar', 'user']),
            avatar() {
                if (this.user && this.user.fullName) {
                    return this.user.fullName.substr(0, 1).toUpperCase()
                } else {
                    return ''
                }
            },
            permanent() {
                return this.$vuetify.breakpoint.lgAndUp && this.sidebar.permanent
            },
            active() {
                return this.sidebar.show && this.permanent && !this.sidebar.miniVariant
            },
        },
        methods: {
            ...mapActions('AppState', ['collapseSidebar', 'expandSidebar', 'showSidebar', 'hideSidebar']),
            onClickMenuButton() {
                if (this.permanent) {
                    if (this.sidebar.miniVariant) {
                        this.expandSidebar()
                    } else {
                        this.collapseSidebar()
                    }
                } else {
                    if (!this.sidebar.show) {
                        this.showSidebar()
                    } else {
                        this.hideSidebar()
                    }
                }
            },
            onClickLogout() {
                window.location.href = '/logout'
            },
            onClickLogo() {
                window.location.href = this.config.admin
            },
        },
    }
</script>

<style scoped></style>
