<template>
    <v-card flat tile color="transparent" height="100%" width="100%" min-height="150" min-width="150" class="d-flex align-center justify-center">
        <v-progress-circular indeterminate color="orange" size="120">
            <span class="text-body-1 font-weight-bold orange--text">Loading...</span>
        </v-progress-circular>
    </v-card>
</template>

<script>
    export default {
        name: 'LoadingAnimation',
    }
</script>

<style lang="scss"></style>
