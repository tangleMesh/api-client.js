import jsonwebtoken from "jsonwebtoken";
import Configuration from "../config";

export default class ApiAuthentificator {

    constructor (apiIdentifier, apiSecret, applicationName = "@tangleMesh/api-client.js") {
        if (typeof apiIdentifier !== "string" || apiIdentifier.length !== 32) {
            throw new Error ("Api-Authentificator: Your given apiIdentifier is invalid!");
        }
        this.apiIdentifier = apiIdentifier;

        if (typeof apiSecret !== "string" || apiSecret.length !== 64) {
            throw new Error ("Api-Authentificator: Your given apiSecret is invalid!");
        }
        this.apiSecret = apiSecret;

        if (typeof applicationName !== "string") {
            throw new Error ("Api-Authentificator: Your given applicationName is invalid!");
        }
        this.applicationName = applicationName;
    }

    createApiKey (expirationMs = Configuration.API_DEFAULT_EXPIRATION_MS) {
        return jsonwebtoken.sign ({
            data: {
                identifier: this.apiIdentifier,
            },
            receiver: Configuration.API_URL,
        }, this.apiSecret, {
            algorithm: Configuration.API_ALGORITHM,
            expiresIn: String (expirationMs) + "ms",
            audience: Configuration.API_AUDIENCE,
            issuer: this.applicationName,
            subject: Configuration.API_SUBJECT,
        });
    }

}