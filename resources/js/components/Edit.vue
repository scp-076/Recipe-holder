<template>
    <div class="row form page-animation">
        <h2>Edit recipe</h2>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">title</i>
                    <input id="title" type="text" class="validate" v-model="form.title">
                    <label class="active" for="title">Title</label>
                    <span class="error" v-if="errors.title">{{ errors.title[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">format_list_numbered</i>
                    <textarea id="ingredients" class="materialize-textarea" v-model="form.ingredients"></textarea>
                    <span>List all ingredients in format: 'Ingredient - Amount' separated by comma</span>
                    <label class="active" for="ingredients">Ingredients</label>
                    <span class="error" v-if="errors.ingredients">{{ errors.ingredients[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">format_align_left</i>
                    <textarea id="body" class="materialize-textarea" v-model="form.body"></textarea>
                    <label class="active" for="body">Recipe</label>
                    <span class="error" v-if="errors.body">{{ errors.body[0] }}</span>
                </div>
            </div>
            <div class="row submit">
                <button @click.prevent="saveForm" class="btn btn-large waves-effect waves-light" type="submit" name="action">
                    Update recipe
                    <i class="material-icons right">send</i>
                </button>
                <router-link :to="linkToDetail" @click.prevent="saveForm" class="btn btn-large waves-effect waves-light" type="submit" name="action">
                    Back to recipe
                    <i class="material-icons right">backspace</i>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: "Edit",
    data() {
        return {
            form: {
                title: '',
                ingredients: '',
                body: '',
            },
        }
    },
    computed: {
        ...mapState(['recipe', 'errors']),
        linkToDetail() {
            return `/recipe/${this.$route.params.id}`;
        }
    },
    mounted() {
        if (this.recipe) {
            setTimeout(() => {
                this.form.title = this.recipe.title;
                this.form.ingredients = this.recipe.ingredients;
                this.form.body = this.recipe.body;
            }, 100);
        }
        this.$store.dispatch('getRecipeById', this.$route.params.id);
        const textareas = document.querySelectorAll('textarea');
        setTimeout(() => {
            textareas.forEach(el => M.textareaAutoResize(el));
        }, 100);
    },
    methods: {
        saveForm() {
            this.$store.dispatch('editRecipe', {form: this.form, id: this.$route.params.id});
        },
    },
}
</script>

<style scoped lang="scss">
.btn {
    border-radius: 20px;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 20px rgba(0, 0, 0, .8);
    margin-right: 20px;
}

.error {
    display: flex;
    color: red;
}


</style>
