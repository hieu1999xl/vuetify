<template>
    <v-sheet color="transparent" height="100%" width="100%" min-height="100vh" min-width="300" class="d-flex flex-column justify-content-between align-center min-vh-100 min-width">
        <v-sheet color="transparent" class="text-center mt-16" height="100%" width="100%" max-width="calc(616px + 32px)">
            <v-sheet color="transparent" class="text-center">
                <v-img src="@/assets/logo.svg" alt="CVG Building Management System" class="img_login ma-auto mb-9" width="100%" max-width="212" contain />
            </v-sheet>
            <v-sheet flat tile color="transparent pl-4 pr-6">
                <p class="font-weight-bold text-h5 mb-8">Đăng nhập</p>
                <form>
                    <p class="text-left mb-1 caption">Số điện thoại</p>
                    <v-text-field type="text" v-model="data.phone" outlined :name="Math.random()" :rules="rules.phone" autocomplete="username" single-line label="Nhập số điện thoại" required />
                    <p class="text-left mb-1 caption">Mật khẩu</p>
                    <v-text-field
                        type="password"
                        v-model="data.password"
                        outlined
                        :name="Math.random()"
                        :rules="rules.password"
                        autocomplete="new-password"
                        single-line
                        label="Nhập mật khẩu"
                        required
                    />
                    <v-sheet color="transparent" class="d-flex justify-space-between align-center">
                        <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Lưu thông tin đăng nhập" required color="primary"></v-checkbox>
                        <a color="info">Quên mật khẩu?</a>
                    </v-sheet>
                    <v-btn class="mr-4" height="38" color="primary" width="100%" @click="submit"> submit </v-btn>
                </form>
            </v-sheet>
        </v-sheet>

        <v-container fluid class="pa-0">
            <v-sheet class="d-flex justify-center align-center" height="100%" min-height="80">
                <v-sheet max-width="1156" width="100%" class="d-flex justify-space-between">
                    <p>© 2022. Công Ty Cổ Phần Tập Đoàn CVG Building.</p>
                    <v-sheet>
                        <ul class="d-flex align-center">
                            <li>
                                <a class="pl-2" href="">Điều khoản sử dụng</a>
                            </li>
                            <li>
                                <a href="">Trợ giúp</a>
                            </li>
                        </ul>
                    </v-sheet>
                </v-sheet>
            </v-sheet>
        </v-container>
    </v-sheet>
</template>

<script>
    export default {
        name: 'LoginForm',
        data() {
            return {
                data: {
                    phone: '',
                    password: '',
                },
                rules: {
                    phone: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
                    password: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
                },
            }
        },
    }
</script>

<style scoped lang="scss">
    .v-text-field--outlined::v-deep {
        &:not(.error--text) {
            .v-text-field__details {
                min-height: 0;
                height: 0;
            }
        }
        .v-input__control {
            .v-input__slot {
                margin-bottom: 0;
                min-height: 38px;
                .v-text-field__slot {
                    .v-label {
                        position: unset !important;
                        font-size: 14px;
                        overflow: visible;
                    }
                }
            }
            .v-text-field__details {
                margin-top: 4px;
                padding-left: 0;
            }
        }
    }
    .v-input--checkbox::v-deep {
        .v-input__control {
            .v-input__slot {
                .v-label {
                    font-size: 14px;
                    color: #333333;
                }
            }
        }
    }
    // :not(.error--text)::v-deep {
    //     .v-text-field__details {
    //         background: red;
    //     }
    // }
</style>
