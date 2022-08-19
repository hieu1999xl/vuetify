<template>
    <v-sheet>
        <p class="text-body-1">
            {{ value }}
        </p>
    </v-sheet>
</template>

<script>
    export default {
        name: 'TextView',
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
