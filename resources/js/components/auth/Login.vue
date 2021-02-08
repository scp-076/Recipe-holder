<template>
    <div class="row form">
        <h2 class="page-title">Login into your account</h2>
        <form class="col s12">
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
            <div class="row btns">
                <button @click.prevent="loginUser" class="btn waves-effect waves-light" type="submit" name="action">
                    Login
                    <i class="material-icons right">send</i>
                </button>
                <router-link to="/" class="btn waves-effect waves-light"
                             name="action">Back to home page
                    <i class="material-icons right">backspace</i>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            form: {
                email: '',
                password: '',
            },
            errors: [],
        }
    }, methods: {
        loginUser() {
            axios.post('/api/login', this.form).then(() => {
                this.$router.push({name: "Dashboard"});
            }).catch(e => {
                this.errors = e.response.data.errors;
            });
        },
    }
}
</script>

<style scoped lang="scss">

.btns {
    display: flex;
    flex-flow: row nowrap;

    @media screen and (max-width: 1000px) {
        flex-flow: column nowrap;
        align-items: center;
    }
}

.btn {
    border-radius: 20px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 20px rgba(0, 0, 0, .8);
    margin-right: 20px;

    @media screen and (max-width: 1000px) {
        margin-top: 20px;
        font-size: 12px;
    }
}

.error {
    display: flex;
    color: red;
}

</style>
