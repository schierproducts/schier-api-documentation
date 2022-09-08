<template>
    <button @click="logout()" type="button" class="action-button">Log Out</button>
</template>

<script>
import auth from "../auth";

export default {
    name: "LogoutButton",
    props : ['client'],
    methods : {
        async logout () {
            await auth.logout(this.client);
        }
    }
}
</script>

<style scoped>

</style>