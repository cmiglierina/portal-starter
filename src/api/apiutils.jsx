function createHeader() {
    const headers = new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json"
    });
    const token = localStorage.getItem('token');
    if (token) {
        headers.append('Authorization', token);
    }
    return headers;

}



async function callRestApi(url, method, opt) {
    const headers = createHeader();
    const options = {
        method: method,
        headers: headers,
    };

    if (method == 'POST' || method == 'PUT' || method == 'PATCH') {
        options.body = JSON.stringify(opt.payload);
    }

    const resp = {
        esito: false,
        payload: null,
        errormessage: null,
        status: 0
    }

    try {
        await fetch(url, options).then(async (response) => {
            if (response.ok) {
                const payload = await response.json();
                resp.payload = payload;
                resp.esito = true;
                resp.status = 200;
                opt.onSuccess(resp);


            } else {
                resp.esito = false;
                const errorBody = await response.json();
                resp.errormessage = errorBody.message;
                resp.status = response.status;
                opt.onError(resp);

            }
        }).catch(e => {
            resp.esito = false;
            resp.errormessage = e.message;
            resp.status = -1;
            opt.onError(resp);
        });
    } catch (error) {
        resp.esito = false;
        resp.errormessage = error.message;
        resp.status = -1;
        opt.onError(resp);
    }
}


async function doPost(url, data, successCallback, errorCallback) {

    const opt = {
        payload: data,
        onSuccess: successCallback,
        onError: errorCallback
    };
    await callRestApi(url, 'POST', opt);
}

async function doGet(url, successCallback, errorCallback) {

    const opt = {
        onSuccess: successCallback,
        onError: errorCallback
    };
    await callRestApi(url, 'GET', opt);
}

async function doDelete(url, successCallback, errorCallback) {

    const opt = {
        onSuccess: successCallback,
        onError: errorCallback
    };
    await callRestApi(url, 'DELETE', opt);
}

async function doPut(url, data, successCallback, errorCallback) {

    const opt = {
        payload: data,
        onSuccess: successCallback,
        onError: errorCallback
    };
    await callRestApi(url, 'PUT', opt);
}

async function doPatch(url, data, successCallback, errorCallback) {

    const opt = {
        payload: data,
        onSuccess: successCallback,
        onError: errorCallback
    };
    await callRestApi(url, 'PATCH', opt);
};

const RestUtils = {
    doGet,
    doPost,
    doDelete,
    doPut,
    doPatch,
};

export default RestUtils;