<template>
    <button @click="login()" type="button" class="action-button">Login</button>
</template>

<script>
import auth from "../auth";

export default {
    name: "LoginButton",
    props : ['client'],
    methods : {
        async login () {
            await auth.loginWithPopup(this.client);

            this.$emit('login-complete');
        }
    }
}
</script>

<style scoped>

</style>