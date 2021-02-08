<template>
    <div class="row form" v-if="user">
        <h2 class="page-title">Dashboard</h2>
        <div class="row"><span>Name: {{ user.name }}</span></div>
        <div class="row"><span>Email: {{ user.email }}</span></div>
        <div class="row btns">
            <button @click.prevent="logoutUser" class="btn waves-effect waves-light" type="submit" name="action">Logout
                <i class="material-icons right">send</i>
            </button>
            <router-link to="/" class="btn waves-effect waves-light" type="submit"
                         name="action">Back to home page
                <i class="material-icons right">backspace</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "Dashboard",
    computed: {
        ...mapState(['user']),
    },
    methods: {
        logoutUser() {
            this.$store.dispatch('logoutUser');
            this.$router.push({name: "Home"});
        },
    },
    mounted() {
        this.$store.dispatch('getUser');
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
        justify-content: center;
    }
}

.btn {
    margin-top: 10px;
    border-radius: 20px;
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
        margin-right: 0;
    }
}

span {
    font-weight: bold;
}
</style>
