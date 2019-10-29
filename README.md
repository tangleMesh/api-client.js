# api-client.js
A simple lightweight api client for using the tangleMesh:api with authentification.

## Installation
To install this package, simply run install this package with npm:

    npm install @tanglemesh/api-client.js

## Basic usage
To use this package, you can simply import the `api-client.js` and initialize a new Object with custom `options`.

    import ApiClient from "@tanglemesh/api-client.js";
    
    const apiClient = new ApiClient ({
        apiIdentifier: "7DE635ECF529629BA113571D2A288598",
        apiSecret: "A4BEF4E7CE564EDD2BD8141F1D6546S567F659DC8F30D9918B2F17C387BD7B60",
    });

    await apiClient.request (…);

## Methods / API reference

### request
You can create any HTTP request you want by using the method request:

    const result = await apiClient.request ("POST", "/", {
        "some-data": 1
    }, {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    });

If you do not want to use Promises but the `callback`-way, you can also set the `cb` parameter. Additionally you can add custom configurations of the library [axios](https://github.com/axios/axios) as `axiosSettings`.

    apiClient.request ("POST", "/", {
        "some-data": 1
    }, {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    }, (error, result) => {
        console.log (error, result);
    }, {
        timeout: 5000
    });

### get
You can also create simply `GET` requests by using our `apiClient.get (…)` method:

    get (path = "/", params = {}, headers = {}, cb = (err, result) => result, axiosSettings = {})

Example get request:

    const result = await apiClient.get ("/", {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    });

### post
You can also create simply `POST` requests by using our `apiClient.post (…)` method:

    post (path = "/", data = {}, params= {}, headers = {}, cb = (err, result) => result, axiosSettings = {})

Example post request:

    const result = await apiClient.post ("/", {
        "some-data": 1
    }, {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    });

### put
You can also create simply `PUT` requests by using our `apiClient.put (…)` method:

    put (path = "/", data = {}, params= {}, headers = {}, cb = (err, result) => result, axiosSettings = {})

Example put request:

    const result = await apiClient.put ("/", {
        "some-data": 1
    }, {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    });

### delete
You can also create simply `DELETE` requests by using our `apiClient.delete (…)` method:

    delete (path = "/", data = {}, params= {}, headers = {}, cb = (err, result) => result, axiosSettings = {})

Example get request:

    const result = await apiClient.delete ("/", {
        "some-data": 1
    }, {
        "q": "some-query-parameter"
    }, {
        "custom-header": "test
    });


## Examples
For more examples just have a look on the [/examples](/examples) directory.

Run an example with the command:

   node examples/get-api-status.example.js