function dice(type) {
    const availableTypes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D16', 'D20'];
    if (availableTypes.includes(type)) {
        const throwNumber = Number(type.split('D')[1]);
        return Math.floor(Math.random() * (throwNumber - 2) + 1);
    }

    return null;
}

console.log(dice('D16'));
