import config from 'config';


const baseUrl = `${config.apiUrl}/namespace`;

export const namespaceService = {
    getId
};

function getId(namespace) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return fetch(baseUrl, {
        method: 'post',
        headers: headers,
        body: JSON.stringify(namespace)
    }).then(function (response) {
        return response.json()
    })
}
