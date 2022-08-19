<template>
    <v-sheet>
        <p class="my-4 text-h6">
            {{ value }}
        </p>
    </v-sheet>
</template>

<script>
    export default {
        name: 'SubTitleView',
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
