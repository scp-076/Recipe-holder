<template>
    <div class="row form page-animation">
        <h2 class="page-title">Store new recipe</h2>
        <form class="col s12">
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">title</i>
                    <input id="title" type="text" class="validate" v-model="form.title">
                    <label for="title">Title</label>
                    <span class="error" v-if="errors.title">{{ errors.title[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">format_list_numbered</i>
                    <textarea id="ingredients" class="materialize-textarea" v-model="form.ingredients"></textarea>
                    <span>List all ingredients in format: 'Ingredient - Amount' separated by comma</span>
                    <label for="ingredients">Ingredients</label>
                    <span class="error" v-if="errors.ingredients">{{ errors.ingredients[0] }}</span>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">format_align_left</i>
                    <textarea id="body" class="materialize-textarea" v-model="form.body"></textarea>
                    <label for="body">Recipe</label>
                    <span class="error" v-if="errors.body">{{ errors.body[0] }}</span>
                </div>
            </div>
            <div class="btns row submit">
                <button @click.prevent="saveForm" class="btn waves-effect waves-light" type="submit" name="action">
                    Store your recipe
                    <i class="material-icons right">save</i>
                </button>
                <router-link to="/" class="btn waves-effect waves-light" type="submit" name="action">
                    Back to home page
                    <i class="material-icons right">send</i>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "CreateRecipe",
    data() {
        return {
            form: {
                title: "",
                ingredients: "",
                body: "",
            },
        }
    },
    computed: {
        ...mapState(['errors']),
    },
    methods: {
        saveForm() {
            this.$store.dispatch('createRecipe', this.form);
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
        margin-top: -20px;
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

    @media screen and (max-width: 512px) {
        font-size: 12px;
        margin-top: 20px;
        margin-right: 0;
    }
}

.error {
    display: flex;
    color: red;
}

</style>
