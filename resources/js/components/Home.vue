<template>
        <div class="homeContainer">
            <video-background
                src="./images/food_video.mp4"
                poster="../../../public/images/food_video_preview.png"
                overlay="linear-gradient(to right bottom, rgba(255, 255, 255, .7), rgba(255, 255, 255, .5))"
                style="width: 100%; height: 100%; border-radius: 40px;"
                class="video"
            >
                <h1 class="title">Your personal storage for favorite recipes made with ease</h1>
            </video-background>
            <div class="btns">
                <router-link class="btn btn-large waves-effect waves-light" to="/create">Create new recipe <i
                    class="material-icons right">create</i></router-link>
                <router-link class="btn btn-large waves-effect waves-light" to="/list">Recipes list <i
                    class="material-icons right">list</i></router-link>
            </div>
        </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
    transition-property: scale;
    transition-duration: 2s;
}

.fade-enter, .fade-leave-to {
    transform: scale(0);
}

.homeContainer {
    width: 100%;
    min-height: 85vh;

    @media screen and (max-width: 512px) {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
    }
}

.title {
    max-width: 80%;
    text-align: center;
    font-size: 140px;
    letter-spacing: 8px;
    font-family: "Knewave", sans-serif;
    color: #ffcdb2;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, .5);

    @media screen and (max-width: 1800px) {
        font-size: 100px;
    }

    @media screen and (max-width: 1190px) {
        font-size: 50px;
    }

    @media screen and (max-width: 512px) {
        display: none;
    }
}

.btns {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    margin-top: -300px;

    @media screen and (max-width: 1800px) {
        margin-top: -100px;
    }

    @media screen and (max-width: 1190px) {
        flex-flow: column nowrap;
        align-items: center;
        margin-top: -250px;
    }

    @media screen and (max-width: 512px) {
        margin-top: 0;
        //justify-content: center;
    }
}

.btn {
    border-radius: 15px;
    width: 300px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: -1px 1px 20px rgba(0, 0, 0, .8);

    @media screen and (max-width: 1190px) {
        margin: 10px 0;
    }

    @media screen and (max-width: 512px) {
        margin: 20px 0;
        width: 250px;
        height: 40px;
        font-size: 12px;
    }
}

.video {
    @media screen and (max-width: 512px) {
        display: none;
    }
}

</style>
