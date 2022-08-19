<template>
    <v-sheet class="my-2">
        <v-img :src="value"></v-img>
    </v-sheet>
</template>

<script>
    export default {
        name: 'ImageView',
        props: {
            value: {
                type: String,
                required: true,
            },
        },
        model: {
            prop: 'value',
            event: 'change',
        },
    }
</script>

<style scoped></style>
