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
            <v-sheet class="py-1">
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-format-title</v-icon>
                        </v-btn>
                    </template>
                    <span>Thêm tiêu đề</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-text</v-icon>
                        </v-btn>
                    </template>
                    <span>Thêm đoạn văn</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-image-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>Thêm hình ảnh</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" :disabled="true">
                            <v-icon size="24">mdi-trash-can-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>Xóa section</span>
                </v-tooltip>
            </v-sheet>
        </v-sheet>
        <v-divider></v-divider>
        <v-sheet class="py-1">
            <v-sheet class="py-1">
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-format-bold</v-icon>
                        </v-btn>
                    </template>
                    <span>Đậm</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-format-italic</v-icon>
                        </v-btn>
                    </template>
                    <span>In nghiêng</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-format-underline</v-icon>
                        </v-btn>
                    </template>
                    <span>Gạch chân</span>
                </v-tooltip>
                <v-tooltip left>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                            <v-icon size="24">mdi-link-plus</v-icon>
                        </v-btn>
                    </template>
                    <span>Chèn/Sửa liên kết</span>
                </v-tooltip>
            </v-sheet>
        </v-sheet>
        <v-divider></v-divider>
        <v-sheet class="py-1">
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on">
                        <v-icon size="24">mdi-content-save-outline</v-icon>
                    </v-btn>
                </template>
                <span>Lưu lại</span>
            </v-tooltip>
            <v-tooltip left>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn elevation="0" tile plain text block class="my-1" v-bind="attrs" v-on="on" @click="onClickCancel">
                        <v-icon size="24">mdi-close</v-icon>
                    </v-btn>
                </template>
                <span>Hủy bỏ</span>
            </v-tooltip>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'Toolbar',
        computed: {
            ...mapGetters('SampleForm', ['viewMode']),
        },
        methods: {
            ...mapActions('SampleForm', ['changeViewMode', 'showConfirmDialog']),
            onClickCancel() {
                this.showConfirmDialog('CANCEL')
            },
            onClickSave() {
                console.log('click save')
            },
        },
    }
</script>

<style scoped></style>
