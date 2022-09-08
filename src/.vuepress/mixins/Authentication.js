import auth from "../auth";
import AuthConfig from "../auth";

export default {
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
    // async mounted() {
    //     const { frontmatter } = this.$page;
    //     const { auth } = frontmatter;
    //
    //     if (auth !== undefined && auth === true) {
    //         this.auth0client = await AuthConfig.createClient();
    //         this.user = await this.auth0client.getUser();
    //     }
    //     if (!this.user) {
    //         await AuthConfig.loginWithPopup(this.auth0client);
    //     }
    //     console.log(this.user);
    // }

    async mounted(){
        this.auth0client = await auth.createClient();

        this.user = await this.auth0client.getUser();
    },
    methods : {
        async login () {
            await auth.loginWithPopup(this.auth0client);
        },
        async getUser(){
            this.user = await this.auth0client.getUser();
        },
    }
}