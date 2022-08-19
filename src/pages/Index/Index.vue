<template>
    <v-container>
        <v-row dense class="my-2">
            <template v-for="(item, idx) in items">
                <v-col :key="idx" cols="12" sm="6" md="3">
                    <v-card elevation="1" hover class="pa-4" min-height="120" :to="item.path">
                        <v-sheet class="my-4 text-center">
                            <v-icon x-large>{{ item.icon }}</v-icon>
                        </v-sheet>
                        <v-sheet class="text-center">
                            <span class="font-weight-medium text-body-2">{{ item.title }}</span>
                        </v-sheet>
                    </v-card>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Index',
        data: () => ({
            items: [
                { title: 'Sample Function 1', icon: 'mdi-account-multiple-outline', path: '/sample-function-1' },
                { title: 'Sample Function 2', icon: 'mdi-file-tree-outline', path: '/sample-function-2' },
                { title: 'Sample Function 3', icon: 'mdi-account-cog-outline', path: '/sample-function-3' },
                { title: 'Sample Function 4', icon: 'mdi-cog-transfer-outline', path: '/sample-function-4' },
            ],
        }),
        computed: {
            ...mapGetters('AppState', ['config', 'auth', 'sidebar', 'user']),
            avatar() {
                if (this.user && this.user.fullName) {
                    return this.user.fullName.substr(0, 1).toUpperCase()
                } else {
                    return ''
                }
            },
        },
    }
</script>

<style scoped></style>
