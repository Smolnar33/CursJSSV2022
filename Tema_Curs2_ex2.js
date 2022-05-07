// Tema 2

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nrPrime = [];

function checkPrime(numar) {
    for (let p = 2; p <= numar; p++) {
        if (numar == 2) {
            return true;
        } else if (numar % p == 0) {
            return false;
        }
        return true;
    }
}

for (let i = 0; arr[i] <= arr.length; i++) {
    if (checkPrime(arr[i])) {
        nrPrime.push(arr[i]);
    }
}
console.log(nrPrime);