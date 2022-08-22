import auth from "../auth";

export default {
    data() {
        return {
            auth0client : null,
            user : null
        }
    },
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
        }
    }
}