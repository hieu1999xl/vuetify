<template>
    <v-sheet color="transparent">
        <v-card class="pa-4 card-notification">
            <v-list three-line class="pa-0">
                <template v-for="item in items">
                    <v-subheader class="fz-16 mb-4 pa-0 notify-header" v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>
                    <v-list-item class="list-notification list-border pl-0 pr-0 mb-2" v-else :key="item.title">
                        <v-list-item-avatar height="36" width="36" min-width="36" class="align-self-center ma-0 mr-2">
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content class="align-self-center pa-0">
                            <v-sheet class="d-flex mb-0">
                                <v-list-item-title class="fz-14 title-notification">
                                    <span class="font-weight-bold">{{ item.name }}</span> {{ item.title }}</v-list-item-title
                                >
                                <v-list-item-subtitle class="text-right fz-12"> 30p trước</v-list-item-subtitle>
                            </v-sheet>
                            <v-list-item-subtitle class="fz-12 line-height" v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <v-sheet color="transparent" class="d-flex align-center justify-end pt-2">
                <v-btn elevation="0" small left dark color="orange darken-2" min-width="100" @click="onClickAddPost">
                    <span>Tải thêm</span>
                </v-btn>
            </v-sheet>
        </v-card>
    </v-sheet>
</template>

<script>
    export default {
        name: 'NotifyIndex',
        data() {
            return {
                items: [
                    { header: 'Thông báo' },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                        name: 'Admin',
                        title: '’s Full Name have done something for Someone.',
                        subtitle: `Hôm nay 18:35`,
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        name: 'CVG Building',
                        title: 'have been update to the next version (v 1.5.1)',
                        subtitle: `Hôm nay 18:05`,
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                        name: 'Admin',
                        title: 's Full Name have done something with Someone’s something.',
                        subtitle: 'Hôm nay 15:35',
                    },
                    {
                        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                        name: 'You',
                        title: 'have 5 more jobs that have to do before this weekend.',
                        subtitle: 'Hôm nay 15:35',
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .list-notification {
        min-height: unset !important;
    }
    .title-notification {
        line-height: 21px !important;
        overflow: unset;
    }
    .card-notification {
        box-shadow: none !important;
        border-radius: unset;
    }
    .notify-header {
        height: 32px;
        color: var(--color-noti);
    }
    .fz-12.line-height {
        line-height: 18px;
    }
    .list-border {
        border-bottom: 1px solid #90a4ae;
        padding-bottom: 7px;
    }
    .list-border:last-child {
        border: none;
        padding-bottom: 0;
    }
</style>
