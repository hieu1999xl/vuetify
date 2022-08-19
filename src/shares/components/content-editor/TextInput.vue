<template>
    <v-sheet class="py-2">
        <v-textarea label="Nhập nội dung" :value="value"></v-textarea>
    </v-sheet>
</template>

<script>
    export default {
        name: 'TextInput',
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
