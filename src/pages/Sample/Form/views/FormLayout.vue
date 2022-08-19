<template>
    <v-sheet color="transparent" height="100%" width="100%" :class="mainClass">
        <template v-if="isLargeScreen">
            <v-sheet color="transparent" :height="mainHeight" :width="mainWidth">
                <perfect-scrollbar>
                    <v-sheet color="transparent" width="100%" class="d-flex align-content-start justify-center py-2">
                        <form-content />
                    </v-sheet>
                </perfect-scrollbar>
            </v-sheet>
            <v-sheet v-if="isLargeScreen" color="transparent" height="100%" width="356px" class="d-flex align-content-start justify-start">
                <v-card flat tile outlined height="100%" width="56px">
                    <toolbar />
                </v-card>
                <v-card flat tile outlined height="100%" width="calc(100% - 56px)" style="margin-left: -1px">
                    <form-info-box></form-info-box>
                </v-card>
            </v-sheet>
            <v-sheet v-if="!isLargeScreen" color="transparent" height="44px" width="100%">
                <v-card height="44px" width="100%" class="d-flex align-content-start justify-center py-2">
                    <v-btn elevation="0" small class="mr-2" min-width="70" color="primary" dark @click="onClickSave">
                        <v-icon small class="mr-1">mdi-content-save-outline</v-icon>
                        <span>Lưu</span>
                    </v-btn>
                    <v-btn elevation="0" small min-width="70" color="grey darken-1" dark @click="onClickCancel">
                        <v-icon small class="mr-1">mdi-close</v-icon>
                        <span>Hủy</span>
                    </v-btn>
                </v-card>
            </v-sheet>
        </template>
        <template v-else>
            <v-sheet color="transparent" height="100%" width="100%" class="d-flex align-center justify-center">
                <v-sheet color="transparent" class="text-center">
                    <v-icon size="80" color="red" class="mx-auto">mdi-cellphone-off</v-icon>
                    <p class="mt-3 mb-0 text-h5 red--text">Không Hỗ Trợ!</p>
                    <p class="mt-1 mb-0 red--text">Chức năng không hỗ trợ khổ màn hình này.</p>
                    <p class="mt-1 mb-0 red--text">Vui lòng sử dụng trên khổ màn hình mày tính.</p>
                    <v-sheet color="transparent" class="my-5">
                        <v-btn elevation="0" dark color="primary" @click="onClickBackToList">Quay lại màn hình danh sách</v-btn>
                    </v-sheet>
                </v-sheet>
            </v-sheet>
        </template>
    </v-sheet>
</template>

<script>
    import FormContent from '@/pages/Sample/Form/views/FormContent'
    import FormInfoBox from '@/pages/Sample/Form/views/FormInfoBox'
    import Toolbar from '@/pages/Sample/Form/views/ToolbarBox'
    import { mapActions } from 'vuex'

    export default {
        name: 'FormLayout',
        components: { FormContent, FormInfoBox, Toolbar },
        computed: {
            isLargeScreen() {
                return this.$vuetify.breakpoint.lgAndUp
            },
            mainClass() {
                if (this.isLargeScreen) {
                    return 'd-flex align-content-start justify-space-between'
                } else {
                    return ''
                }
            },
            mainHeight() {
                if (this.isLargeScreen) {
                    return '100%'
                } else {
                    return 'calc(100% - 44px)'
                }
            },
            mainWidth() {
                if (this.isLargeScreen) {
                    return 'calc(100% - 300px)'
                } else {
                    return '100%'
                }
            },
        },
        methods: {
            ...mapActions('SampleForm', ['showConfirmDialog']),
            onClickCancel() {
                this.showConfirmDialog('CANCEL')
            },
            onClickSave() {
                console.log('click save')
            },
            onClickBackToList() {
                this.$router.push({ name: 'SampleIndex' })
            },
        },
    }
</script>

<style scoped></style>
