import config from "./auth_config";

export default {

    async createClient() {
        return await createAuth0Client({
            domain: config.domain,
            client_id: config.clientId
        });
    },

    async loginWithPopup(client, options) {
        try {
            await client.loginWithPopup(options);
        } catch (e) {
            // eslint-disable-next-line
            console.error(e);
            alert(e);
        }
    },

    logout(client) {
        return client.logout();
    }
}