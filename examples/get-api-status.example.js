const { ApiClient } = require ("../index");

(async () => {
    //Do request
    const apiClient = new ApiClient ({
        apiIdentifier: "7DE635ECF529629BA113571D2A288598",
        apiSecret: "A4BEF4E7CE564EDD2BD8141F1D6546S567F659DC8F30D9918B2F17C387BD7B60"
    });

    const status = await apiClient.get ("/");

    console.log ("The tangleMesh:api status is", status);
})();