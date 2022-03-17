const formId = "1FAIpQLSeYxseHAlXuhJsHZmVCsDd-fQtclhhjfzzlnAAXWhbO_wFHfw";
const entry1 = "entry.2005620554";
const entry2 = "entry.1045781291";
const entry3 = "entry.1166974658";
const entry4 = "entry.839337160";
const getPath = formId => `https://docs.google.com/forms/d/e/${formId}/formResponse`;
const responseEvent = response => alert('Your contact request has been submitted!');

const getURL = function (path, params) {
    const url = new URL(path);
    for (let key in params) {
        url.searchParams.set(key, params[key]);
    }
    return url;
}

const postToGoogleDB = function (data) {
    const path = getPath(formId);
    const url = getURL(path, data)
    sendRequest('POST', url)
        .then(responseEvent);
}

const sendRequest = async function (verb, url) {
    const request = initRequest(verb, url);
    const response = await fetch(request);
    return response;
}

const initRequest = function (verb, url) {
    const init = new Object();
    init.method = verb;
    init.mode = 'no-cors';
    return new Request(url, init);
}