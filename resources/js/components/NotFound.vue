<template>
    <div class="page-animation">
        <h1>Page not found</h1>
        <div class="row">
            <router-link to="/" class="btn waves-effect waves-light">Back to home page <i class="material-icons right">backspace</i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound"
}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
}

h1 {
    margin-top: 150px;
    font-size: 150px;
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
    margin-bottom: 150px;
}

</style>
