// Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100

function generarMatriz() {
  const matriz = [];
  for (let i = 0; i < 10; i++) {
    const fila = [];
    for (let j = 1; j < 11; j++) {
      fila.push(i * 10 + j);
    }
    matriz.push(fila);
  }

  return matriz;
};

let miMatriz = generarMatriz()

// 3) Por último, vamos a generar dos funciones:
// a) Una va a sumar los valores en la diagonal primaria de la matriz. Resultado: 505.

function diagonalRojo(algunArray) {
  let sumaRojo = 0;
  for (let i = 0; i < algunArray.length; i++) {
    sumaRojo += algunArray[i][i];
  }
  return sumaRojo;
};

console.log(diagonalRojo(miMatriz));

// b) La otra va a marcar los valores de la diagonal secundaria de la matriz. Resultado: 505.

function diagonalVerde(algunArray) {
  let sumaVerde = 0;
  let j = 0;
  for (let i = algunArray.length - 1; i >= 0; i--) {
    sumaVerde += algunArray[j][i];
    j++;
  }
  return sumaVerde;
};

console.log(diagonalVerde(miMatriz));

// Otros código para la creación de la matriz 10x10.

function matriz10x10() {
  let unaMatrix10x10 = [];
  for (i = 1; i <= 100; i++) {
    unaMatrix10x10.push(i);
  }
  let matriz10x10U = [];
  let inicio = 0;
  let fin = inicio + 10;
  for (i = 0; i < 10; i++) {
    matriz10x10U.push(unaMatrix10x10.slice(inicio, fin));
    inicio = fin;
    fin = inicio + 10;
  }
  return matriz10x10U;
};

console.table(matriz10x10());

function matriz10x10 () {
  const matriz = [];
  let fila = [];
  for (i = 1; i <= 100; i++) {
    fila.push(i);
    if (i % 10 === 0) {
      matriz.push(fila);
      fila = [];
    }
  }
  return matriz;
};

console.log(matriz10x10());

function crearMatriz(numero1, numero2){
  let acumulador = 0
  const matriz = []

  for (let i = 0; i < numero1; i++) {
      const matriz1 = []
      for (let j = 0; j < numero2; j++) {
          acumulador+= 1
          matriz1.push(acumulador)
      }
      matriz.push(matriz1)
  }
  return matriz;
};

console.table(crearMatriz(10,10));
