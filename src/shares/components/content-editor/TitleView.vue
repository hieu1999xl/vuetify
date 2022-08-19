<template>
    <v-sheet>
        <p class="text-h5">
            {{ value }}
        </p>
    </v-sheet>
</template>

<script>
    export default {
        name: 'TitleView',
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
