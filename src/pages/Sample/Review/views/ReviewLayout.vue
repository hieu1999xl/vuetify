<template>
    <v-sheet color="transparent" height="100%" width="100%" :class="mainClass">
        <v-sheet color="transparent" :height="mainHeight" :width="mainWidth">
            <perfect-scrollbar>
                <v-sheet color="transparent" width="100%" class="d-flex align-content-start justify-center py-2">
                    <review-content />
                </v-sheet>
            </perfect-scrollbar>
        </v-sheet>
        <v-sheet v-if="isLargeScreen" color="transparent" height="100%" width="356px" class="d-flex align-content-start justify-start">
            <v-card flat tile outlined height="100%" width="56px">
                <toolbar-box />
            </v-card>
            <v-card flat tile outlined height="100%" width="calc(100% - 56px)" style="margin-left: -1px">
                <info-box></info-box>
            </v-card>
        </v-sheet>
        <v-sheet v-if="!isLargeScreen" color="transparent" height="44px" width="100%">
            <v-card elevation="2" rounded="0" height="44px" width="100%" class="d-flex align-content-start justify-center py-2">
                <v-btn elevation="0" small class="mr-2" min-width="70" color="blue-grey darken-1" dark @click="onClickClose">
                    <v-icon small class="mr-1">mdi-close</v-icon>
                    <span>Đóng</span>
                </v-btn>
                <v-btn elevation="0" small class="mr-2" min-width="70" color="indigo" dark @click="onCLickHidePost">
                    <v-icon small class="mr-1">mdi-eye-off-outline</v-icon>
                    <span>Ẩn</span>
                </v-btn>
                <v-btn elevation="0" small min-width="70" color="red" dark @click="onCLickRemovePost">
                    <v-icon small class="mr-1">mdi-trash-can-outline</v-icon>
                    <span>Xóa</span>
                </v-btn>
            </v-card>
        </v-sheet>
    </v-sheet>
</template>

<script>
    import ToolbarBox from './ToolbarBox'
    import ReviewContent from './ReviewContent'
    import InfoBox from './InfoBox'
    import { mapActions } from 'vuex'
    export default {
        name: 'ReviewLayout',
        components: { InfoBox, ReviewContent, ToolbarBox },
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
            ...mapActions('SampleReview', ['changeViewMode', 'showConfirmDialog']),
            onClickClose() {
                this.$router.push({ path: '/sample-function-1' })
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
