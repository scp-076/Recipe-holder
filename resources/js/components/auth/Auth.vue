<template>
    <div class="fixed-action-btn">
        <router-link to="/user" exact class="btn-floating btn-large link">
            <i class="material-icons">account_circle</i>
        </router-link>
        <ul>
            <li><router-link to="/register" class="btn-floating link">Register</router-link></li>
            <li><router-link to="/login" class="btn-floating darken-1 link">Login</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Auth",
    mounted() {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: window.innerWidth > 999 ? 'bottom' : 'left',
        });
    },
}
</script>

<style scoped lang="scss">
.fixed-action-btn {
    position: absolute;
    top: 30px;
    width: 100px;
    height: 100px;

    .link {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }

    ul {
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;

        @media screen and (max-width: 1000px) {
            width: 210px;
        }
    }

    li {
        width: 70px;
        height: 70px;
        margin-top: 30px !important;

        @media screen and (max-width: 1000px) {
            margin-top: -40px !important;
        }
    }
}

</style>
