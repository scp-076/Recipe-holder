<template>
    <router-link :to="linkToDetail" class="recipe page-animation">
        <h3 class="recipe__title">{{ title }}</h3>
        <span class="recipe__date">{{ formattedDate }}</span>
        <p class="recipe__ingredients">{{ ingredients }}</p>
        <p class="recipe__body">{{ body }}</p>
    </router-link>

</template>

<script>
export default {
    name: "RecipeBlock",
    props: {
        title: {
            type: String,
            default: "NULL",
        },
        ingredients: {
            type: String,
            default: "NULL",
        },
        body: {
            type: String,
            default: "NULL",
        },
        created_at: {
            type: String,
            default: "NULL",
        },
        recipe_id: {
            type: Number,
            default: null,
        },
    },
    computed: {
        linkToDetail() {
            return `/recipe/${this.recipe_id}`
        },
        formattedDate() {
          return new Date(this.created_at).toLocaleDateString();
        },
    }
}
</script>

<style scoped lang="scss">

.recipe {
    color: rgba(0, 0, 0, .87);
    padding: 15px;
    width: 100%;
    background: rgba(255, 255, 255, .2);
    border: 5px solid transparent;
    border-radius: 20px;
    cursor: pointer;
    transition: all .3s linear;
    font-size: 18px;
    margin-top: 20px;
    position: relative;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, .3);

    &:hover {
        border: 5px solid rgba(255, 255, 255, .7);

    }

    &__title {
        position: relative;
        padding-left: 60px;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50px;
            height: 50px;
            background: url("../../../public/images/food.svg") left no-repeat;
            background-size: cover;

            @media screen and (max-width: 600px) {
                width: 30px;
                height: 30px;
            }
        }

        @media screen and (max-width: 1000px) {
            font-size: 30px;
        }

        @media screen and (max-width: 512px) {
            font-size: 20px;
        }
    }

    &__ingredients {
        margin: 10px 0;
        text-decoration: underline;
        font-size: 16px;

        @media screen and (max-width: 1000px) {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    &__body {
        margin-top: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media screen and (max-width: 615px){
            font-size: 14px;
        }

    }

    &__date {
        position: absolute;
        right: 0;
        top: 0;
        padding: 10px;
    }
}

</style>
