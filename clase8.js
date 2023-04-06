// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.

function diezSiguientes(num) {
	for (i = num + 1; i <= num + 10; i++) {
		console.log(i);
	}
}

diezSiguientes(23);

// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

for (let i = 5; i <= 20; i += 3) {
	console.log(i);
}

// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

function sumatoria() {
	let acumulador = 0;
	for (i = 0; i <= 100; i++) {
		acumulador += i;
	}
	return acumulador;
}

console.log(sumatoria());

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

function factorial(num) {
	let totalFactorial = 0;
	for (i = 0; i <= num; i++) {
		totalFactorial += i;
	}
	return totalFactorial;
}

console.log(factorial(8));

// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

function fibonacci(num) {
	let vector = [];
	vector[0] = 0;
	vector[1] = 1;
	for (let i = 2; i < num; i++) {
		vector[i] = vector[i - 1] + vector[i - 2];
	}
	return vector;
}
console.log(fibonacci(20));