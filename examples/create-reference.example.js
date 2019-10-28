import { ApiClient } from "../index";

(async () => {
    //Do request
    const apiClient = new ApiClient ({
        apiIdentifier: "7DE635ECF529629BA113571D2A288598",
        apiSecret: "A4BEF4E7CE564EDD2BD8141F1D6546S567F659DC8F30D9918B2F17C387BD7B60"
    });

    const newReference = await apiClient.post (
        "/references/" + "7458d984-47ea-4ee1-bfbc-e3016a233f35" + "/" + "78e35831-53ab-4d2e-90fa-b7f59e493d66",
        {
            amount: 0,
            referenceNumber: String (Math.random ()),
            purpose: "try it our api",
            comment: "some internal comment",
            validFrom: null,
            validUntil: null,
            active: true,
        }
    );

    console.log ("My withdrawals:", newReference);
})();