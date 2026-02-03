'use strict';

// Жизненный цикл событий DOM

// Событие загрузки контента документа (момент, когда DOM дерево загружено)
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('DOMContentLoaded');
    console.log(e);
});

// Когда страница полностью загрузилась (документ и всё, что внутри)
window.addEventListener('load', function(e) {
    console.log('load');
    console.log(e);
});

// Событие срабатывает, когда страница выгружается (например, уходим на другую страницу)
// в Safari у меня вообще не сработало при закрытии вкладки!
window.addEventListener('beforeunload', function(e) {
    e.preventDefault();
    e.returnValue = '';
});

