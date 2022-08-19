<template>
    <v-card flat tile color="transparent" height="100%" width="100%" min-height="150" min-width="150" class="d-flex align-center justify-center">
        <v-progress-circular color="primary" size="180" :width="15" :rotate="180" :value="value">
            <v-card flat tile color="transparent" class="text-center">
                <p class="mb-0 text-body-1 font-weight-bold orange--text">Chức Năng</p>
                <p class="mb-0 text-body-1 font-weight-bold orange--text">Đang Phát Triển</p>
                <p class="mb-0 text-body-1 font-weight-bold orange--text">...</p>
            </v-card>
        </v-progress-circular>
    </v-card>
</template>

<script>
    export default {
        name: 'ImplementingBox',
        data() {
            return {
                interval: 0,
                value: 0,
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        mounted() {
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0)
                }
                this.value += 10
            }, 1000)
        },
    }
</script>

<style scoped></style>
