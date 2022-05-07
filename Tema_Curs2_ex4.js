// Tema 4

function addDigits(nr) {
    let suma = 0;
    for (let i = 0; i < nr.length; i++) {
        suma = suma + Number(nr[i]);
    }
    console.log(suma);
}
addDigits('10204639');