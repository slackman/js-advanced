'use strict';

// navigator.geolocation.getCurrentPosition((position) => {
//     console.log([position.coords.latitude, position.coords.longitude]);
// });

function getCurrentPosition() {
    return new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition((position) => {
            resolve([position.coords.latitude, position.coords.longitude]);
        }),
    );
}

getCurrentPosition()
    .then((coords) => console.log(coords))
    .catch((err) => console.error(err));
