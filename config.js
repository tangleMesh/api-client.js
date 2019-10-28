export default class Configuration {

    static get API_URL () {
        return "https://api.tangle-mesh.io";
    }

    static get API_SUBJECT () {
        return "api";
    }

    static get API_AUDIENCE () {
        return "tangle-mesh";
    }

    static get API_ALGORITHM () {
        return "HS512";
    }

    static get API_DEFAULT_EXPIRATION_MS () {
        return 1000 * 60 * 15; //15 mins
    }

}