import { myConfig } from '../_constants/config';

export const friendService = {
    getFriends,
    getFriend
}

const config = {
    apiUrl: myConfig.API_URL
}

function getFriends() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        }
    };

    return fetch(`${config.apiUrl}friends`, requestOptions)
        .then(handleResponse)
        .then(friends => {
            return friends;
        });
}

function getFriend() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' 
        }
    };

    return fetch(`${config.apiUrl}friends/by`, requestOptions)
        .then(handleResponse)
        .then(friend => {
            return friend;
        });
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = data || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}