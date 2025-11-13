const arr = [
    { id: 1, name: 'Вася' },
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
];

const uniqueIds = new Set(arr.map((user) => user.id));
const uniqueEls = [...uniqueIds].map((id) => arr.find((el) => el.id === id));

