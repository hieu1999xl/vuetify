<template>
    <v-sheet height="100%" width="100%" max-width="56px">
        <v-sheet class="py-1">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="changeViewMode('DESKTOP')">
                        <v-icon size="24" :color="viewMode === 'DESKTOP' ? 'primary' : 'default'">mdi-monitor</v-icon>
                    </v-btn>
                </template>
                <span>Chế độ xem máy tính</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="changeViewMode('TABLET')">
                        <v-icon size="24" :color="viewMode === 'TABLET' ? 'primary' : 'default'">mdi-tablet</v-icon>
                    </v-btn>
                </template>
                <span>Chế độ xem tablet</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="changeViewMode('MOBILE')">
                        <v-icon size="24" :color="viewMode === 'MOBILE' ? 'primary' : 'default'">mdi-cellphone</v-icon>
                    </v-btn>
                </template>
                <span>Chế độ xem điện thoại</span>
            </v-tooltip>
        </v-sheet>
        <v-divider></v-divider>
        <v-sheet class="py-1">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="onCLickHidePost">
                        <v-icon size="24">mdi-eye-off-outline</v-icon>
                    </v-btn>
                </template>
                <span>Ẩn bài viết</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="onClickEditPost">
                        <v-icon size="24">mdi-pencil-outline</v-icon>
                    </v-btn>
                </template>
                <span>Sửa bài viết</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="onCLickRemovePost">
                        <v-icon size="24">mdi-trash-can-outline</v-icon>
                    </v-btn>
                </template>
                <span>Xóa bài viết</span>
            </v-tooltip>
        </v-sheet>
        <v-divider></v-divider>
        <v-sheet class="py-1">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" :loading="isLoading" @click="reloadData">
                        <v-icon size="24">mdi-refresh</v-icon>
                    </v-btn>
                </template>
                <span>Làm mới</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="onClickClose">
                        <v-icon size="24">mdi-close</v-icon>
                    </v-btn>
                </template>
                <span>Đóng lại</span>
            </v-tooltip>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Toolbar',
        computed: {
            ...mapGetters('SampleReview', ['viewMode', 'isLoading']),
        },
        methods: {
            ...mapActions('SampleReview', ['changeViewMode', 'showConfirmDialog', 'reloadData']),
            onClickClose() {
                this.$router.push({ path: '/sample-function-1' })
            },
            onClickEditPost() {
                this.$router.push({ path: `/sample-function-1/${this.id}/edit` })
            },
            onCLickHidePost() {
                this.showConfirmDialog('HIDE')
            },
            onCLickRemovePost() {
                this.showConfirmDialog('REMOVE')
            },
        },
    }
</script>

<style scoped></style>
