const url = process.env.REACT_APP_API_URL;

export const getByApi = (entity, fn, params) => {
    let fullUrl = '';
    if (fn) fullUrl = params ? `${url + entity}/${fn}/${params}` : `${url + entity}/${fn}`;
    else fullUrl = `${url + entity}`
    console.log(fullUrl);
    return fetch(fullUrl, {
        headers: { "authorization": localStorage.getItem("token") }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error("Error: ", err))
}

export const sendByApi = (entity, fn, params, method, body) => {
    let fullUrl = '';
    if (fn) fullUrl = params ? `${url + entity}/${fn}/${params}` : `${url + entity}/${fn}`;
    else fullUrl = `${url + entity}`
    return fetch(fullUrl, {
        method,
        headers: {
            "Content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error("Error: ", err))
}