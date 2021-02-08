import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home";
import CreateRecipe from "./components/CreateRecipe";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import NotFound from "./components/NotFound";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import User from "./components/auth/User";
import Edit from "./components/Edit";

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        component: NotFound,
    },
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
    {
        path: '/create',
        component: CreateRecipe,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated').then(() => {
                next();
            }).catch(() => {
                return next({name: "Login"});
            });
        },
    },
    {
        path: '/edit/:id',
        component: Edit,
        name: "Edit",
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated').then(() => {
                next();
            }).catch(() => {
                return next({name: "Login"});
            });
        },
    },
    {
        path: '/list',
        component: RecipeList,
        name: 'List',
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated').then(() => {
                next();
            }).catch(() => {
                return next({name: "Login"});
            });
        },
    },
    {
        path: '/recipe/:id',
        component: RecipeDetail,
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated').then(() => {
                next();
            }).catch(() => {
                return next({name: "Login"});
            });
        },
    },
    {
        path: '/register',
        component: Register,
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
    },
    {
        path: '/user',
        component: User,
        name: "Dashboard",
        beforeEnter: (to, from, next) => {
            axios.get('/api/authenticated').then(() => {
                next();
            }).catch(() => {
                return next({name: "Login"});
            });
        },
    },
];

export default new VueRouter({
    mode: 'history',
    routes,
});
