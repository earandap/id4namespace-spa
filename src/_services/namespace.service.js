import config from 'config';


const baseUrl = `${config.apiUrl}/namespace`;

export const namespaceService = {
    getId
};

function getId(namespace) {

    return fetch(`${baseUrl}/${namespace}/id`).then(function (response) {
        return response.text()
    })
}
