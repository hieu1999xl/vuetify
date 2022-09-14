<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <perfect-scrollbar>
            <v-container style="max-width: 1177px">
                <v-row>
                    <v-col md="4" class="pa-2 pt-4">
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
                    <v-col md="8" class="pa-2 pt-4">
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
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="4" class="pa-2">
                        <v-sheet min-height="434" height="auto">
                            <v-list dense nav class="pa-4">
                                <p class="fz-16 mb-6 pa-0 font-weight-bold">Quản Trị Tập Đoàn</p>
                                <v-list-item class="pa-0 list-notification" v-for="item in items_coporation" :key="item.title">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="text-body-2"> {{ item.title }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-btn elevation="0" small left dark color="administration" max-width="78" height="28" :to="item.path" outlined>
                                        <span>Quản Trị</span>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>
                    <v-col md="4" class="pa-2">
                        <v-sheet min-height="434" height="auto">
                            <v-list dense nav class="pa-4">
                                <p class="fz-16 mb-6 pa-0 font-weight-bold">Quản Trị Công Ty Địa Phương</p>
                                <v-autocomplete dense label="Tỉnh/ Thành phố"></v-autocomplete>
                                <v-alert color="yellowAlert" class="pa-2">
                                    <v-list-item class="pa-0" v-for="item in alert_company" :key="item.name">
                                        <v-sheet class="d-flex align-center" color="transparent">
                                            <v-sheet color="transparent" class="mr-4">
                                                <v-img src="@/assets/welcome/cvg_hn.png" width="90px"></v-img>
                                            </v-sheet>
                                            <v-sheet color="transparent">
                                                <p class="fz-14 font-weight-bold mb-1">{{ item.name }}</p>
                                                <v-sheet color="transparent" class="d-flex align-start">
                                                    <v-img src="@/assets/welcome/Location.svg" width="100%" max-width="18px"></v-img>
                                                    <p class="fz-14 ma-0 ml-1">{{ item.address }}</p>
                                                </v-sheet>
                                                <v-sheet color="transparent" class="d-flex align-start">
                                                    <v-img src="@/assets/welcome/Phone.svg" width="100%" max-width="18px"></v-img>
                                                    <p class="fz-14 ma-0 ml-1">{{ item.phone }}</p>
                                                </v-sheet>
                                            </v-sheet>
                                        </v-sheet>
                                    </v-list-item>
                                </v-alert>
                                <v-list-item class="pa-0 list-notification" v-for="item in items_coporation" :key="item.title">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-btn elevation="0" small left dark color="administration" max-width="78" height="28" :to="item.path" outlined>
                                        <span>Quản Trị</span>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
                    </v-col>
                    <v-col md="4" class="pa-2">
                        <v-sheet min-height="434" height="auto">
                            <v-list dense nav class="pa-4">
                                <p class="fz-16 mb-6 pa-0 font-weight-bold">Quản Trị Điểm bán</p>
                                <v-autocomplete dense label="Tỉnh/ Thành phố"></v-autocomplete>
                                <v-autocomplete dense label="Điểm bán"></v-autocomplete>
                                <v-alert color="greenAlert" class="pa-2">
                                    <v-list-item class="pa-0" v-for="item in sale_location" :key="item.name">
                                        <v-sheet class="d-flex align-center" color="transparent">
                                            <v-sheet color="transparent" class="mr-4">
                                                <v-img src="@/assets/welcome/location_sale.png" width="46px"></v-img>
                                            </v-sheet>
                                            <v-sheet color="transparent">
                                                <p class="fz-14 font-weight-bold mb-1">{{ item.name }}</p>
                                                <v-sheet color="transparent" class="d-flex align-start">
                                                    <v-img src="@/assets/welcome/Location.svg" width="100%" max-width="18px"></v-img>
                                                    <p class="fz-14 ma-0 ml-1">{{ item.address }}</p>
                                                </v-sheet>
                                                <v-sheet color="transparent" class="d-flex align-start">
                                                    <v-img src="@/assets/welcome/Phone.svg" width="100%" max-width="18px"></v-img>
                                                    <p class="fz-14 ma-0 ml-1">{{ item.phone }}</p>
                                                </v-sheet>
                                            </v-sheet>
                                        </v-sheet>
                                    </v-list-item>
                                </v-alert>
                                <v-list-item class="pa-0 list-notification" v-for="item in items_coporation" :key="item.title">
                                    <v-list-item-icon class="mr-2">
                                        <v-icon>{{ item.icon }}</v-icon>
                                    </v-list-item-icon>

                                    <v-list-item-content>
                                        <v-list-item-title class="text-body-2">{{ item.title }}</v-list-item-title>
                                    </v-list-item-content>
                                    <v-btn elevation="0" small left dark color="administration" max-width="78" height="28" :to="item.path" outlined>
                                        <span>Quản Trị</span>
                                    </v-btn>
                                </v-list-item>
                            </v-list>
                        </v-sheet>
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
            items_coporation: [
                { title: 'Quản Trị Website Thông Tin Tập Đoàn', icon: 'mdi-account-multiple-outline', path: '/sample-function-1' },
                { title: 'Quản Trị Siêu Thị Vật Liệu Xây Dựng', icon: 'mdi-file-tree-outline', path: '/clone' },
            ],
            alert_company: [{ name: 'Công ty CVG Building', address: '120 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm, Hà Nội', phone: '0866 880 006' }],
            sale_location: [{ address: '62 Khúc Thừa Dụ, Cầu Giấy, Hà Nội', phone: '0866 880 006' }],
        }),
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
