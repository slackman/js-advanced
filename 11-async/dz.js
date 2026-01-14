'use strict';

const request = new XMLHttpRequest();
request.open('GET', 'https://pokeapi.co/api/v2/pokemon/ditto/');
request.send();

request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    const url = data['abilities'][0].ability.url;
    console.log(url)
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.addEventListener('load', function() {
        const nestedData = JSON.parse(this.responseText);
        const d = nestedData.names.find(el => el.language.name == 'en');
        console.log(d['name'])
    })
})