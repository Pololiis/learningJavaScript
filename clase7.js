// Controlando el acceso a una discoteca.

let edad = 17;

if (edad < 0) {
	console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
	console.log("No puede pasar al bar.");
	if (edad % 2 !== 0) {
		console.log("¿Sabías que tu edad es impar?");
	}
} else if (edad < 21) {
	console.log("Puede pasar al bar, pero no puede tomar alcohol.");

	if (edad % 2 !== 0) {
		console.log("¿Sabías que tu edad es impar?");
	}
} else {
	if (edad === 21) {
		console.log("¡Bienvenide! Felicidades por cumplir la mayoría de edad.");
	} else if (edad % 2 !== 0) {
		console.log("¿Sabías que tu edad es impar?");
	}
	console.log("Puede pasar al bar y tomar alcohol.");
}

// Declará una función llamada totalAPagar() que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos son mayor a 25, se ha de añadir $25 al total a pagar.

const totalAPagar = function (vehiculo, litrosConsumidos) {

    let precioXLitro = 0;

    if (vehiculo === 'coche') {
        precioXLitro = 86;
        if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
            return (litrosConsumidos * precioXLitro) + 50;
        } else {
            return (litrosConsumidos * precioXLitro) + 25;
        }
    } else if (vehiculo === 'moto') {
        precioXLitro = 70;
        if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
            return (litrosConsumidos * precioXLitro) + 50;
        } else {
            return (litrosConsumidos * precioXLitro) + 25;
        }
    } else {
        precioXLitro = 55;
        if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
            return (litrosConsumidos * precioXLitro) + 50;
        } else {
            return (litrosConsumidos * precioXLitro) + 25;
        }
    }
}

console.log('Debes cancelar ' + totalAPagar('coche', 30) + '$');

// Necesitamos armar el sistema para un local de venta de sándwiches. Los clientes
// eligen el sándwich base que tiene un precio y, por cada selección siguiente, se le suma
// el valor de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con el resto de los ingredientes.

function sandwichBase (tipo) {
    costoSandwich = 0;
    if (tipo === 'pollo') {
        costoSandwich = 150;
    } else if (tipo === 'carne') {
        costoSandwich = 200;
    }
    else {
        costoSandwich = 100;
    }
    return costoSandwich;
}

function tipoPan (pan) {
    costoPan = 0;
    if (pan === 'blanco') {
        costoPan = 50;
    } else if (pan === 'negro') {
        costoPan = 60;
    } else {
        costoPan = 75;
    }
    return costoPan;
}

function adicionales (queso, tomate, lechuga, cebolla, mayo, mostaza) {
    costoAdicionales = 0;
    if (queso === true) {
        costoAdicionales += 20;
    }
    if (tomate === true) {
        costoAdicionales += 15;
    }
    if (lechuga === true) {
        costoAdicionales += 10;
    }
    if (cebolla === true) {
        costoAdicionales += 15;
    }
    if (mayo === true) {
        costoAdicionales += 5;
    }
    if (mostaza === true) {
        costoAdicionales += 5;
    }
    return costoAdicionales;
}

function totalSandwich (tipo, pan, queso, tomate, lechuga, cebolla, mayo, mostaza) {
    let totalAPagar = sandwichBase(tipo) + tipoPan(pan) + adicionales(queso, tomate, lechuga, cebolla, mayo, mostaza);
    return totalAPagar;
}

console.log('El total a cancelar es de ' + totalSandwich('veggie', 'blanco', false, false, false, false, false, false) + '$');

// Creá una función que reciba un parámetro numérico y verifique si el mismo es el
// número secreto. El número secreto deberá ser seleccionado de manera random de
// entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
// retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
// mensaje de aliento junto con el número ingresado y el secreto.

const numeroSecreto = function (num) {
    const random = Math.floor(Math.random() * 10);
    if (num === random) {
        return ('¡Felicidades! ¡' + num + ' es el número!');
    }
    else {
        return ('¡Más suerte para la próxima! El número era ' + random);
    }
}

console.log(numeroSecreto(5));


function abrirParacaidas (velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 & altura < 3000) {
        return '¡Se ha abierto el paracaídas!';
    } else {
        return '¡No se puede abrir el paracaídas todavía!'
    }
}

console.log(abrirParacaidas(800, 3500));

// Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
// altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
// siguiente:
// ● La velocidad debe ser menor a 1000 km/h.
// ● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.

// Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
// "perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
// inglés.
// En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
// informe que la palabra ingresada es incorrecta.

let palabra = 'genio';

switch (palabra) {
    case 'casa':
        console.log(palabra + ' en inglés es house');
        break;
    case 'perro':
        console.log(palabra + ' en inglés es dog');
        break;
    case 'pelota':
        console.log(palabra + ' en inglés es ball');
        break;
    case 'árbol':
        console.log(palabra + ' en inglés es tree');
        break;
    case 'genio':
        console.log(palabra + ' en inglés es genius');
        break;
    default:
        console.log('La palabra ingresada no se encuentra en este diccionario.');
}

// Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
// según la siguiente escala:
// ● Muy mala.
// ● Mala.
// ● Mediocre.
// ● Buena.
// ● Muy buena.
// Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
// por su valoración.
// En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
// inválido".

let evaluacionPelicula = 'Muy buena';

switch (evaluacionPelicula) {
    case 'Muy mala':
        console.log('Sentimos mucho que la película te haya parecido muy mala.');
        break;
    case 'Mala':
        console.log('Qué lástima que la película te haya parecido mala.');
        break;
    case 'Mediocre':
        console.log('Al menos no estuvo tan mal la película, ¿cierto?');
        break;
    case 'Buena':
        console.log('Qué alegría que te haya parecido buena la película.');
        break;
    case 'Muy buena':
        console.log('¡Magnífico! Nos conteta que la película te haya parecido muy buena.');
        break;
    default:
        console.log('Ingresaste un valor inválido');
}

