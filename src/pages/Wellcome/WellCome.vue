<template>
    <v-sheet color="transparent" class="overflow-hidden text-body-1" height="100%" width="100%">
        <perfect-scrollbar>
            <v-container style="max-width: 1177px">
                <v-row class="ma-0">
                    <v-col md="4" class="ma-2 pt-4">
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
                    <v-col md="8" class="ma-2 pa-0 pt-4"><NotifyIndex /> </v-col>
                </v-row>
                <v-row class="ma-0">
                    <v-col md="4" class="ma-2 pa-0">
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
                    <v-col md="4" class="ma-2 pa-0">
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
                    <v-col md="4" class="ma-2 pa-0">
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
    import NotifyIndex from './Notify/view/NotifyIndex'

    export default {
        name: 'WellCome',
        components: { NotifyIndex },
        data: () => ({
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
