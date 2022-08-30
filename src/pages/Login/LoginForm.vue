<template>
    <v-sheet color="transparent" height="100%" width="100%" min-height="100vh" class="d-flex flex-column justify-content-between align-center min-vh-100 min-width">
        <v-sheet color="transparent" class="text-center d-flex flex-column box-login" height="100%" width="100%" max-width="calc(616px + 32px)">
            <v-sheet color="transparent" class="text-center">
                <v-img src="@/assets/logo.svg" alt="CVG Building Management System" class="img_login ma-auto mb-8" width="100%" max-width="212" contain />
            </v-sheet>
            <v-sheet flat tile color="transparent pl-4 pr-4">
                <p class="font-weight-bold text-h5 mb-8 text-uppercase">Đăng nhập</p>
                <v-alert text prominent type="error" :icon="false" class="text-left"> Số điện thoại hoặc mật khẩu không chính xác. </v-alert>
                <form @submit.prevent="submit">
                    <p class="text-left mb-1 caption">Số điện thoại</p>
                    <v-text-field type="text" v-model="itemForm.phone" outlined :name="Math.random()" :rules="rules.phone" autocomplete="username" single-line label="Nhập số điện thoại" required />
                    <p class="text-left mb-1 caption">Mật khẩu</p>
                    <v-text-field
                        v-model="itemForm.password"
                        outlined
                        :name="Math.random()"
                        :rules="rules.password"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        @click:append="show = !show"
                        autocomplete="new-password"
                        single-line
                        label="Nhập mật khẩu"
                        required
                    />
                    <v-sheet color="transparent" class="d-flex justify-space-between align-center mb-8 color-term">
                        <v-checkbox class="ma-0" v-model="checkbox" dense hide-details label="Lưu thông tin đăng nhập" color="primary" />
                        <a href="">Quên mật khẩu?</a>
                    </v-sheet>
                    <v-btn class="mr-4 white--text" height="38" color="yellow" width="100%" :disabled="invalid" type="submit">Đăng Nhập</v-btn>
                    <p class="mt-4"
                        >Bạn chưa có tài khoản <span class="color-term"><a>Đăng ký</a></span>
                    </p>
                </form>
            </v-sheet>
        </v-sheet>

        <v-container fluid class="pa-0">
            <v-sheet class="d-flex justify-center align-center" height="100%" min-height="80">
                <v-sheet max-width="1156" width="100%" class="d-flex justify-space-between display-mb">
                    <p class="mb-0 text-center">© 2022. Công Ty Cổ Phần Tập Đoàn CVG Building.</p>
                    <v-sheet>
                        <ul class="d-flex align-center textmb-center">
                            <li class="mr-6 color-term">
                                <a href="">Điều khoản sử dụng</a>
                            </li>
                            <li class="color-term">
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
    import { mapActions } from 'vuex'
    export default {
        name: 'LoginForm',
        data() {
            return {
                show: false,
                rules: {
                    phone: [v => !!v || 'Vui lòng nhập số điện thoại', v => (v && v.length <= 10) || 'Số điện thoại không đúng định dạng'],
                    password: [v => !!v || 'Vui lòng nhập mật khẩu', v => (v && v.length <= 6) || 'Mật khẩu không đúng định dạng'],
                },
                itemForm: {
                    password: '',
                    phone: '',
                },
            }
        },
        methods: {
            ...mapActions('Login', ['login']),
            submit() {
                this.login(this.itemForm)
            },
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
                .v-input__append-inner {
                    margin-top: 8px;
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
    li:nth-child(1) {
        list-style: none;
    }
    .color-term {
        a {
            color: var(--color-info);
        }
    }

    .box-login {
        padding-top: 180px;
    }

    @media (max-width: 1440px) {
        .box-login {
            padding-top: 0;
            justify-content: center;
        }
    }

    @media (max-width: 1024px) {
        .display-mb {
            display: block !important;
        }
        .textmb-center {
            justify-content: center;
        }
    }
</style>
