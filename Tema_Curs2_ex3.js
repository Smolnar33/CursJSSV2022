// Tema 3

const saveStrings = [1, '1', 'salut', 2, 6, true, 'true'];
let stringArr = [];

function onlyStrings(item) {
    if (typeof item === 'string') {
        stringArr.push(item);
    }
}
saveStrings.forEach(onlyStrings);
console.log(stringArr);