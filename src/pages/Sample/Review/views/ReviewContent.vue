<template>
    <v-card flat tile color="white" width="100%" :max-width="maxWidth" class="pa-4">
        <template v-if="item">
            <template v-for="(section, idx) in item.sections">
                <template v-if="section.type === 'TITLE'">
                    <title-view :key="idx" :value="section.title"></title-view>
                </template>
                <template v-else-if="section.type === 'SUBTITLE'">
                    <sub-title-view :key="idx" :value="section.subtitle"></sub-title-view>
                </template>
                <template v-else-if="section.type === 'TEXT'">
                    <text-view :key="idx" :value="section.text"></text-view>
                </template>
                <template v-else-if="section.type === 'IMAGE'">
                    <image-view :key="idx" :value="section.image"></image-view>
                </template>
                <template v-else>
                    <component :key="idx" :is="components[section.type]" :value="section.value"></component>
                </template>
            </template>
        </template>
    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ReviewContent',
        data: () => ({
            components: {
                TITLE: 'TitleView',
                SUBTITLE: 'SubTitleView',
                TEXT: 'TextView',
                IMAGE: 'ImageView',
            },
        }),
        computed: {
            ...mapGetters('SampleReview', ['item', 'viewMode']),
            maxWidth() {
                if (this.$vuetify.breakpoint.lgAndUp) {
                    if (this.viewMode === 'DESKTOP') {
                        return '860px'
                    } else if (this.viewMode === 'TABLET') {
                        return '560px'
                    } else {
                        return '360px'
                    }
                } else {
                    return '100%'
                }
            },
        },
    }
</script>

<style scoped></style>
