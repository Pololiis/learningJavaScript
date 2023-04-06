// Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
};

fizzBuzz();

// Escriban una función que reciba dos parámetros: un array y un índice. La
// función deberá de mostrar por consola el valor del elemento según el
// índice dado. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6'.

const array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let index = 1;

const showIndex = function (listToSearch, position) {
    console.log(listToSearch[position]);
};

showIndex(array, index);

// Escribir una función que, dado un número de mes, devuelva la cantidad
// de días de ese mes —suponiendo que no es un año bisiesto—.

function daysPerMonth (monthNumber) {
    if (monthNumber <= 7) {
        if (monthNumber === 2) {
            return `El mes ${monthNumber} tiene 28 días.`
        } else if (monthNumber % 2 === 0) {
            return `El mes ${monthNumber} tiene 30 días.`
        } else {
            return `El mes ${monthNumber} tiene 31 días.`
        }
    }
    if (monthNumber >= 8) {
        if (monthNumber % 2 !== 0) {
            return `El mes ${monthNumber} tiene 30 días.`
        } else {
            return `El mes ${monthNumber} tiene 31 días.`
        }
    }
};

console.log(daysPerMonth(5));

// Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'.

const array2 = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const justRepeated = function (whereToLook) {
    for (let i = 0; i < whereToLook.length - 1; i++) {
        for (let j = 1 + i; j < whereToLook.length; j++) {
            if (whereToLook[i] === whereToLook[j]) {
                console.log(whereToLook[i]);
            }
        }
    }
};

justRepeated(array2);