<template>
    <div class="row form">
        <h2 class="page-title">Register a new account</h2>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="first_name" type="text" class="validate" v-model="form.name">
                    <label for="first_name">Name</label>
                    <span class="error" v-if="errors.name">{{ errors.name[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">email</i>
                    <input id="email" type="email" class="validate" v-model="form.email">
                    <label for="email">Email</label>
                    <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">security</i>
                    <input id="password" type="password" class="validate" v-model="form.password">
                    <label for="password">Password</label>
                    <span class="error" v-if="errors.password">{{ errors.password[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">repeat</i>
                    <input id="password_confirmation" type="password" class="validate"
                           v-model="form.password_confirmation">
                    <label for="password_confirmation">Confirm password</label>
                    <span class="error" v-if="errors.password_confirmation">{{ errors.password_confirmation[0] }}</span>
                </div>
            </div>
            <div class="row btns">
                <button @click.prevent="saveForm" class="btn waves-effect waves-light" type="submit" name="action">Register
                    <i class="material-icons right">send</i>
                </button>
                <router-link to="/" class="btn waves-effect waves-light" type="submit" name="action">Back to home page
                    <i class="material-icons right">backspace</i>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "Register",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
        }
    },
    computed: {
        ...mapState(['errors']),
    },
    methods: {
        saveForm() {
            this.$store.dispatch('registerUser', this.form);
            this.$router.push({name: "Dashboard"});
        },
    },
}
</script>

<style scoped lang="scss">

.btns {
    display: flex;
    flex-flow: row nowrap;

    @media screen and (max-width: 512px) {
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        margin-top: -25px;
    }
}

.btn {
    margin-top: 10px;
    border-radius: 15px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 20px rgba(0, 0, 0, .8);
    margin-right: 20px;

    @media screen and (max-width: 512px) {
        font-size: 12px;
        margin-top: 20px;
        height: 40px;
        margin-right: 0;
    }
}

.error {
    display: flex;
    color: red;
}
</style>
