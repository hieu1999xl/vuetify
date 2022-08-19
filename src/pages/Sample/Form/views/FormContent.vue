<template>
    <v-card flat tile color="white" width="100%" :max-width="maxWidth" class="pa-4">
        <template v-if="data">
            <template v-for="(section, idx) in data.sections">
                <template v-if="section.type === 'TITLE'">
                    <title-input :key="idx" :index="idx" :value="section.title" />
                </template>
                <template v-else-if="section.type === 'SUBTITLE'">
                    <sub-title-input :key="idx" :index="idx" :value="section.subtitle" />
                </template>
                <template v-else-if="section.type === 'TEXT'">
                    <text-input :key="idx" :index="idx" :value="section.text" />
                </template>
                <template v-else-if="section.type === 'IMAGE'">
                    <image-input :key="idx" :index="idx" :value="section.image" :uploading="isUploading" @change="onChangeImage" />
                </template>
                <template v-else>
                    <component :key="idx" :index="idx" :is="components[section.type]" :value="section.value" />
                </template>
            </template>
        </template>
    </v-card>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'FormContent',
        data: () => ({
            components: {
                TITLE: 'TitleInput',
                SUBTITLE: 'SubTitleInput',
                TEXT: 'TextInput',
                IMAGE: 'ImageInput',
            },
        }),
        computed: {
            ...mapGetters('SampleForm', ['data', 'viewMode', 'isUploading']),
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
        methods: {
            ...mapActions('SampleForm', ['uploadImage']),
            onChangeImage(image) {
                this.uploadImage(image)
            },
        },
    }
</script>

<style scoped></style>
