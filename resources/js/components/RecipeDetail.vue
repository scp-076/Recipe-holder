<template>
    <div class="recipe-detail page-animation">
        <div class="recipe" v-if="!recipeNotFound">
            <h2 class="recipe__title">{{ recipe.title }}</h2>
            <div class="recipe__content">
                <div class="recipe__ingredients">
                    <ul>
                        <li v-for="ingredient of recipeIngredients">{{ ingredient }}</li>
                    </ul>
                </div>
                <div class="recipe__body">
                    <p>{{ recipe.body }}</p>
                    <div class="recipe__btns">
                        <div class="recipe__btn">
                            <button class="btn-floating btn-large waves-effect waves-light teal" @click="editRecipe"><i
                                class="material-icons">edit</i>
                            </button>
                            <span>Edit</span>
                        </div>
                        <div class="recipe__btn">
                            <button class="btn-floating btn-large waves-effect waves-light red" @click="triggerModal"><i
                                class="material-icons">delete</i>
                            </button>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2 v-else>Recipe not found</h2>
        <div class="btns row submit">
            <router-link to="/list" exact class="btn waves-effect waves-light" type="submit" name="action">Back to list
                <i class="material-icons right">backspace</i>
            </router-link>
            <router-link to="/" exact class="btn waves-effect waves-light" type="submit" name="action">Back to home
                page
                <i class="material-icons right">backspace</i>
            </router-link>
        </div>
        <transition name="modal">
            <div class="delete-modal-wrapper" v-if="modalIsActive">
                <div class="delete-modal" :class="{modalIsActive: modalIsActive}">
                    <h3>Are you sure you want to delete this recipe? <br/> This action is cannot be undone</h3>
                    <div class="delete-modal__btns">
                        <div class="modal-btn">
                            <button class="btn btn-floating btn-large waves-effect waves-light teal"><i
                                class="material-icons" @click="triggerModal">cancel</i>
                            </button>
                            <span class="btn-text">Cancel</span>
                        </div>
                        <div class="modal-btn">
                            <button class="btn btn-floating btn-large waves-effect waves-light red"><i
                                class="material-icons" @click="deleteRecipe">delete</i>
                            </button>
                            <span class="btn-text">Delete</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    name: "RecipeDetail",
    data: () => ({
        modalIsActive: false,
    }),
    computed: {
        ...mapState(['recipe', 'recipeNotFound']),
        recipeIngredients() {
            const recipe = this.recipe;
            return recipe.ingredients && recipe.ingredients.split(',');
        },
    },
    mounted() {
        this.$store.dispatch('getRecipeById', this.$route.params.id);
    },
    methods: {
        triggerModal() {
            window.scrollTo(0,0);
            return this.modalIsActive = !this.modalIsActive;
        },
        deleteRecipe() {
            this.$store.dispatch('deleteRecipe', this.$route.params.id);
            this.$router.push({name: "List"});
        },
        editRecipe() {
            this.$router.push(`/edit/${this.$route.params.id}`);
        }
    },

}
</script>

<style scoped lang="scss">
.recipe-detail {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
}

.recipe {
    padding: 50px;

    @media screen and (max-width: 615px){
        padding: 10px;
    }

    &__title {
        display: flex;
        justify-content: center;
        margin-top: 0;
        position: relative;
        padding-left: 60px;

        &::before {
            content: "";
            position: absolute;
            top: 10px;
            left: 0;
            width: 50px;
            height: 50px;
            background: url("../../../public/images/food.svg") left no-repeat;
            background-size: cover;

            @media screen and (max-width: 615px) {
                display: none;
            }
        }

        @media screen and (max-width: 615px) {
            font-size: 30px;
            justify-content: flex-start;
            margin-bottom: 0;
            padding-left: 0;
            margin-top: 100px;
        }
    }

    &__content {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;

        @media screen and (max-width: 1000px) {
            flex-flow: column nowrap;
        }
    }

    &__ingredients {
        background: #E1EDDA;
        min-width: 400px;
        min-height: 500px;
        border-radius: 50px;
        padding: 50px;

        @media screen and (max-width: 1300px) {
            min-width: 250px;
            min-height: auto;
            padding: 20px;
            margin-top: 50px;
        }

        @media screen and (max-width: 615px) {
            min-width: auto;
        }
    }

    &__body {
        padding: 0 50px;
        font-size: 18px;
        margin-top: 50px;
        line-height: 190%;

        @media screen and (max-width: 1000px){
            padding: 0;
        }

        @media screen and (max-width: 615px){
            font-size: 14px;
        }

        & p {
            text-align: center;
        }
    }

    &__btns {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin-top: 30px;
    }

    &__btn {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;

        & span {
            margin-top: 10px;
            font-size: 18px;
        }
    }
}

li {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;

    @media screen and (max-width: 615px){
        font-size: 14px;
    }
}

.delete-modal-wrapper {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .5);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(50px);
    border-radius: 50px;
    z-index: 5;

    @media screen and (max-width: 870px) {
        justify-content: flex-start;
    }

    .delete-modal {
        width: 60%;
        height: 40%;
        min-height: 430px;
        background: linear-gradient(to right bottom, rgba(255, 255, 255, .8), rgba(255, 255, 255, .3));
        border-radius: 50px;
        padding: 20px;

        @media screen and (max-width: 1200px) {
            width: 80%;
            height: 60%;
        }

        @media screen and (max-width: 870px) {
            position: fixed;
            top: 0;
            left: 15px;
            width: 90%;
            height: 32%;
            margin-top: 150px;
        }

        &__btns {
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-around;
            margin-top: 150px;

            @media screen and (max-width: 870px) {
                flex-flow: column nowrap;
            }

            @media screen and (max-width: 615px) {
                margin-top: 20px;
            }
        }

        h3 {
            text-align: center;

            @media screen and (max-width: 1200px){
                font-size: 30px;
            }
        }
    }
}

.modal-btn {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.btn-text {
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
    padding-right: 15px;

    @media screen and (max-width: 870px) {
        margin-top: 20px;
        padding-right: 0;
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

    @media screen and (max-width: 615px){
        margin-right: 0;
        margin-top: 20px;
    }
}

.btns {
    display: flex;
    flex-flow: row nowrap;

    @media screen and (max-width: 615px) {
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
}

.modal-enter-active {
    animation: mounting .2s;
    animation-delay: .2s;
    opacity: 0;
    background: transparent;
}

.modal-leave-active {
    animation: unmounting .5s;
}

@keyframes mounting {
    from {
        opacity: 0;
        background: transparent;
    }
    to {
        opacity: 1;
        background: rgba(0, 0, 0, .5);
    }
}

@keyframes unmounting {
    from {
        opacity: 1;
        background: rgba(0, 0, 0, .5);
    }
    to {
        opacity: 0;
        background: transparent;
    }
}

</style>
