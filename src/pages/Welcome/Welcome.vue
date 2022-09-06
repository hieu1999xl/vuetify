<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <perfect-scrollbar>
            <v-container style="max-width: 1161px">
                <v-row>
                    <v-col md="4" class="pa-2 pt-4 pl-0">
                        <v-sheet color="white" class="text-center pa-8">
                            <p class="fz-20 font-weight-bold mb-2">Xin chào <span class="main-color">Lan Anh,</span></p>
                            <p class="ma-0 fz-14">Chào mừng bạn đến với</p>
                            <p class="ma-0 fz-14">hệ thống quản trị CVG Building! </p>
                            <p class="ma-0 fz-14">Vui lòng chọn tính năng bạn muốn quản trị.</p>
                            <v-sheet color="transparent" class="d-flex justify-center pt-4">
                                <v-img src="@/assets/welcome/welcome.png" alt="CVG Building Management System" class="" width="100%" max-width="147" contain />
                            </v-sheet>
                        </v-sheet>
                    </v-col>
                    <v-col md="8" class="pa-4 pl-2 pr-0">
                        <v-sheet color="transparent">
                            <v-card class="pa-4 card-notification">
                                <v-list three-line class="pa-0">
                                    <template v-for="(item, index) in items">
                                        <v-subheader class="fz-16 mb-4 pa-0 font-weight-bold subheader-notification" v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                                        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                                        <v-list-item class="pa-0 list-notification pb-2 mt-2" v-else :key="item.title">
                                            <v-list-item-avatar height="36" width="36" min-width="36" class="align-self-center ma-0 mr-2">
                                                <v-img :src="item.avatar"></v-img>
                                            </v-list-item-avatar>

                                            <v-list-item-content class="align-self-center pa-0">
                                                <v-sheet class="d-flex mb-0">
                                                    <v-list-item-title class="fz-14 title-notification" v-html="item.title"></v-list-item-title>
                                                    <v-list-item-subtitle class="text-right fz-12"> 30p trước</v-list-item-subtitle>
                                                </v-sheet>
                                                <v-list-item-subtitle class="fz-12 subtitle-notification" v-html="item.subtitle"></v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </template>
                                </v-list>
                                <v-sheet color="transparent" class="d-flex align-center justify-end">
                                    <v-btn elevation="0" small left dark color="orange darken-2" min-width="100" @click="onClickAddPost">
                                        <span>Tải thêm</span>
                                    </v-btn>
                                </v-sheet>
                            </v-card>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4" class="pl-0 pr-2">
                        <v-sheet color="red"> <p>aaaaaaaaaa</p> </v-sheet>
                    </v-col>
                    <v-col md="4" class="pl-2 pr-2">
                        <v-sheet color="red"> <p>aaaaaaaaaa</p> </v-sheet>
                    </v-col>
                    <v-col md="4" class="pl-2 pr-0">
                        <v-sheet color="red"> <p>aaaaaaaaaa</p> </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </perfect-scrollbar>
    </v-sheet>
</template>

<script>
    export default {
        data: () => ({
            items: [
                { header: 'Thông báo' },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'Admin’s Full Name have done something for Someone.',
                    subtitle: `Hôm nay 18:35`,
                },
                { divider: true, inset: false },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'CVG Building have been update to the next version (v 1.5.1)',
                    subtitle: `Hôm nay 18:05`,
                },
                { divider: true, inset: false },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Admin’s Full Name have done something with Someone’s something.',
                    subtitle: 'Hôm nay 15:35',
                },
                { divider: true, inset: false },
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Admin’s Full Name have done something with Someone’s something.',
                    subtitle: 'Hôm nay 15:35',
                },
            ],
        }),
    }
</script>

<style scoped>
    .list-notification {
        min-height: unset !important;
    }
    .title-notification {
        line-height: 21px;
        overflow: unset;
    }
    .subtitle-notification {
        line-height: 18px;
    }
    .card-notification {
        box-shadow: none !important;
        border-radius: unset;
    }
    .subheader-notification {
        height: 28px;
    }
</style>
