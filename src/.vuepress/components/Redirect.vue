<template>

</template>

<script>
import AuthConfig from "../auth";

export default {
    name: "Redirect",
    props: {
        to: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            auth0client : null,
            user : null
        }
    },
    async beforeMount() {
        const { frontmatter } = this.$page;
        const { auth } = frontmatter;

        if (auth !== undefined && auth === true) {
            this.auth0client = await AuthConfig.createClient();
            this.user = await this.auth0client.getUser();
        }
    },
    async mounted() {
        const { frontmatter } = this.$page;
        const { auth } = frontmatter;

        if (auth !== undefined && auth === true) {
            this.auth0client = await AuthConfig.createClient();
            this.user = await this.auth0client.getUser();
        }
        if (!this.user) {
            await AuthConfig.loginWithPopup(this.auth0client);
        }
        console.log(this.user);
    }
}
</script>

<style scoped>

</style>