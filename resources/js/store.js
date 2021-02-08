import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from './router';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recipes: [],
        recipe: {},
        recipeNotFound: false,
        errors: [],
        user: {},
    },
    mutations: {
        getUser(state, user) {
            state.user = user;
        },
        getRecipes(state, recipes) {
            state.recipes = recipes;
        },
        getRecipeById(state, recipe) {
            state.recipe = recipe;
        },
        updateErrors(state, errors) {
            state.errors = errors;
        },
    },
    actions: {
        registerUser: ({commit}, form) => {
            axios.post('/api/register', form).catch(e => {
                commit('updateErrors', e.response.data.errors);
            });
        },
        logoutUser: () => {
            axios.post('/api/logout');
        },
        getUser: async ({commit}) => {
            const user = await axios.get('/api/user').then(response => response.data);
            commit('getUser', user);
        },
        getRecipes: async ({commit}) => {
            const recipes = await axios.get('/api/recipes').then(response => response.data);
            commit('getRecipes', recipes);
        },
        getRecipeById: async ({commit}, id) => {
            const recipe = await axios.get(`/api/recipes/${id}`).then(response => response.data).catch(() => {
                this.recipeNotFound = true;
            });
            commit('getRecipeById', recipe);
        },
        deleteRecipe: async ({commit}, id) => {
            return await axios.delete(`/api/recipes/${id}`);
        },
        createRecipe: async ({commit}, form) => {
            axios.post('/api/recipes', form, {
                headers: {
                    "Content-type": "application/json",
                },
            }).then(response => {
                if (response.data.status) {
                    router.push({name: "List"});
                } else {
                    commit('updateErrors', response.data.errors);
                }
            });
        },
        editRecipe: async ({commit}, {form, id}) => {
            axios.put(`/api/recipes/${id}`, form, {
                headers: {
                    "Content-type": "application/json",
                },
            }).then(response => {
                if (response.data.status) {
                    router.push({name: "List"});
                } else {
                    commit('updateErrors', response.data.errors);
                }
            });
        },
    },
});

export default store;
