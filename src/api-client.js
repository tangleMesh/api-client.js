import axios from "axios";
import ApiAuthentificator from "./api-authentificator";
import Configuration from "../config";

export default class ApiClient {

    static defaultCallback (err, result) {
        if (err) {
            throw new Error (err.message);
        }
        return result;
    }

    constructor (options = {
        apiIdentifier: "",
        apiSecret: "",
        applicationName: "@tangleMesh/api-client.js",
        apiAuthentificator: null,
        apiUrl: null,
    }) {
        //Set the ApiAuthentificator directly
        if (options.apiAuthentificator !== null && options.apiAuthentificator instanceof ApiAuthentificator) {
            this.apiAuthentificator = this.apiAuthentificator;
        } else {
            //Use the options to create a new ApiAuthentificator
            this.apiAuthentificator = new ApiAuthentificator (
                options.apiIdentifier,
                options.apiSecret,
                options.applicationName
            );
        }
        this.apiUrl = options.apiUrl || Configuration.API_URL;
    }

    async request (method = "GET", path = "/", data = {}, params= {}, headers = {}, cb = ApiClient.defaultCallback, axiosSettings = {}) {
        try {
            const requestSettings = {
                method,
                url: path,
                baseURL: this.apiUrl,
                headers: {
                    'X-API-KEY': this.apiAuthentificator.createApiKey (),
                    'Content-Type': 'application/json',
                    ...headers,
                },
                withCredentials: true,
                params,
                timeout: Configuration.API_DEFAULT_EXPIRATION_MS,
                responseType: 'json',
                responseEncoding: 'utf8',
                crossorigin:true,
                validateStatus: () => true,
                ...axiosSettings,
            };
            if (method.toUpperCase () !== "GET") {
                requestSettings.data = data;
            }
            const result = await axios (requestSettings);

            if (result.status >= 200 && result.status <= 300) {
                return cb (null, result.data);
            }
            return cb (result.data, null);
        } catch (e) {
            return cb (e, null);
        }
    }

    async get (path = "/", params = {}, headers = {}, cb = ApiClient.defaultCallback, axiosSettings = {}) {
        return await this.request (
            "GET",
            path,
            undefined,
            params,
            headers,
            cb,
            axiosSettings
        );
    }

    async post (path = "/", data = {}, params= {}, headers = {}, cb = ApiClient.defaultCallback, axiosSettings = {}) {
        return await this.request (
            "POST",
            path,
            data,
            params,
            headers,
            cb,
            axiosSettings
        );
    }

    async put (path = "/", data = {}, params= {}, headers = {}, cb = ApiClient.defaultCallback, axiosSettings = {}) {
        return await this.request (
            "PUT",
            path,
            data,
            params,
            headers,
            cb,
            axiosSettings
        );
    }

    async delete (path = "/", data = {}, params= {}, headers = {}, cb = ApiClient.defaultCallback, axiosSettings = {}) {
        return await this.request (
            "DELETE",
            path,
            data,
            params,
            headers,
            cb,
            axiosSettings
        );
    }

}