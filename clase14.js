const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Obtener el mayor.

let mayor = edades[0];

for (i = 1; i < edades.length; i++) {
    if (mayor < edades[i]) {
        mayor = edades[i];
    }
}

console.log(mayor);

// Obtener el menor.

let menor = edades[0];

for (i = 1; i < edades.length; i++) {
    if (menor > edades[i]) {
        menor = edades[i];
    }
}

console.log(menor);

// Obtener el promedio de edades.

let sumatoria = 0;

for (i = 0; i < edades.length; i++) {
    sumatoria += edades[i];
}

let promedio = sumatoria / edades.length;
console.log(promedio);

// Incrementar en 1 todas las edades.

let edadAumentada = [];

for (i = 0; i < edades.length; i++) {
    edadAumentada.push(edades[i] + 1);
}

console.log(edadAumentada);