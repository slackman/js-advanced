'use strict';

fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Is error ${response.status}`);
        }
        return response.json();
    })
    .then((res) => {
        const url = res['abilities'][0].ability.url;
        return fetch(url);
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Is error ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        const d = data.names.find((el) => el.language.name == 'en');
        console.log(d['name']);
    })
    .catch((error) => console.error(error));
