'use strict';

function add(f, s) {
    return f + s;
}

function sub(f, s) {
    return f - s;
}

// модуле существует только в node js. В браузере работать не будет
module.exports = { add, sub };
