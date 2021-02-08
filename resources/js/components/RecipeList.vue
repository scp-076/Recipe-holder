<template>
    <div class="container page-animation">
        <h2 class="page-title">Recipe list</h2>
        <VueCustomScrollBar class="scroll-area" :settings="scrollSettings">
            <div class="recipes" v-if="recipes.length">
                <RecipeBlock v-for="recipe of recipes"
                             :title="recipe.title"
                             :ingredients="recipe.ingredients"
                             :body="recipe.body"
                             :created_at="recipe.created_at"
                             :recipe_id="recipe.id"
                             :key="recipe.id"
                />
            </div>
            <h2 v-else>No recipes stored yet</h2>
        </VueCustomScrollBar>
        <div class="row submit">
            <router-link to="/" exact class="btn waves-effect waves-light" type="submit" name="action">Back
                <i class="material-icons right">backspace</i>
            </router-link>
        </div>
    </div>
</template>

<script>
import RecipeBlock from "./RecipeBlock";
import {mapState} from 'vuex';
import VueCustomScrollBar from 'vue-custom-scrollbar';
import 'vue-custom-scrollbar/dist/vueScrollbar.css';

export default {
    name: "RecipeList",
    components: {
        RecipeBlock,
        VueCustomScrollBar,
    },
    data: () => ({
        scrollSettings: {
            suppressScrollY: false,
            suppressScrollX: true,
            wheelPropagation: false
        },
    }),
    computed: {
        ...mapState(['recipes']),
    },
    mounted() {
        this.$store.dispatch('getRecipes');
    },
    methods: {},
}
</script>

<style scoped lang="scss">
.scroll-area {
    max-height: 850px;

    @media screen and (max-width: 1000px) {
        max-height: 490px;
    }
}

.page-title {

    @media screen and (max-width: 600px) {
        justify-content: flex-start;
        font-size: 30px;
    }
}

.recipes {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
}

.btn {
    border-radius: 20px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 20px rgba(0, 0, 0, .8);
    margin-top: 20px;
}

</style>
