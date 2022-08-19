<template>
    <v-sheet class="py-2">
        <v-text-field label="Nhập tiêu đề" :value="value"></v-text-field>
    </v-sheet>
</template>

<script>
    export default {
        name: 'TitleInput',
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
