
// 1. Crear la estructura adecuada para guardar las siguientes películas:
// "star wars", "totoro", "rocky", "pulp fiction", "la vida es bella".

const peliculas = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

// 2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
// en mayúsculas. Para esto solicitan que crees una función que reciba por
// parámetro un array y convierta el contenido de cada elemento a mayúsculas.

function toMayuscula (array) {
    let arrayMayus = [];
    for (i = 0; i <= array.length - 1; i++) {
        arrayMayus.push((array[i].toUpperCase()));
    }
    return arrayMayus;
}

console.log(toMayuscula(peliculas));

// 3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
// crear otra estructura similar a la primera, pero con las siguientes películas
// animadas:
// "toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
// Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
// para poder agregar los elementos contenidos en el segundo array dentro del
// primero, y así retornar un solo array con todas las películas como sus elementos.

const pelisAnimadas = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

// 4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
// array de películas animadas es un videojuego. Ahora tenés que editar el código y
// modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
// contenido al array que contenga todas las películas.
// PD: por precaución, guardá el elemento que vas a eliminar en una variable.

let videoJuego = pelisAnimadas.pop()
console.log(videoJuego);

function arrayUnion (array1, array2) {
    for (i = 0; i <= array2.length - 1; i++) {
        array1.push((array2[i]));
    }
    return array1;
}

console.log(toMayuscula(arrayUnion(peliculas, pelisAnimadas)));

// Te piden crear una función que compare las calificaciones e indique si son iguales
// o diferentes. Te confirman que están en el orden adecuado y que solo traen
// valores numéricos del 1 al 10.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparacion (array1, array2) {
    for (i = 0; i <= 8; i++) {
        if (array1[i] === array2[i]) {
            console.log('Misma calificación: ' + array1[i]);
        } else {
            console.log('Calificación Asia: ' + array1[i] + ' - Calificación Europa: ' + array2[i]);
        }
    }
}

comparacion(asiaScores, euroScores);

// Creá la función imprimirInverso que tome un array como argumento y que
// imprima en la consola cada elemento en orden inverso (no tenés que invertir el
// array).

function imprimirInverso (array) {
    for (i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

imprimirInverso(peliculas);

// Creá la función inversor que tome un array como argumento y devuelva uno
// nuevo invertido.

function inversor (array) {
    arrayInvertido = [];
    for (i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push((array[i]));
    }
    return arrayInvertido;
}

console.log(inversor(peliculas));

// En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
// números (3 elementos) y devuelva la suma de todos ellos.

const algunosNumeros = [5, 8, 10];

function sumArray (array) {
    let totalArray = 0;
    for (i = 0; i < array.length; i++) {
        totalArray += array[i];
    }
    return totalArray;
}

console.log(sumArray(algunosNumeros));

// En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
// strings de 4 elementos y simule el comportamiento del método Array.join().
// Importante: no podés usar el método Array.join() original.

const algunaSring = ['p', 'o', 'c', 'h', 'i', 't', 'a'];

function join (array) {
    otraString = '';
    for (i = 0; i < array.length; i++) {
        otraString += array[i];
    }
    return otraString;
}

console.log(join(algunaSring));

