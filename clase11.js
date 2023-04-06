// Desde un banco nos contactan para crear una aplicación que pueda facilitar el manejo
// de información y las acciones que el mismo necesita. Nuestro tech leader nos facilita la
// forma de representar a los usuarios (cuentas bancarias).

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
  },
];

// Nos solicitan también crear un objeto literal llamado “banco”, el cual tendrá una
// propiedad llamada “clientes” que estará compuesta de la lista de objetos
// obtenidos en el punto anterior.

// Al objeto “banco”, crearle un método llamado consultarCliente, el cual recibirá un
// nombre (titular) por parámetro, deberá buscarlo en la lista de cuentas y retornar el
// objeto cliente que corresponda con ese nombre ingresado.

// Crear otro método llamado depósito que recibirá dos parámetros: el titular de
// cuenta y una cantidad de dinero a depositar. El método debe obtener la cuenta
// correspondiente y luego sumar la cantidad de dinero a depositar a saldo en pesos.
// Luego, deberá dar un aviso por la consola con el mensaje “Depósito realizado, su
// nuevo saldo es: XXXX”.

// Crear un último método llamado extracción que recibirá también dos parámetros:
// el titular de cuenta y el monto a extraer. El método debe obtener la cuenta
// correspondiente y restar el monto al saldo actual. En caso de que el resultado sea
// menor a 0, deberá imprimir un mensaje por la consola de “Fondos insuficientes”.
// De lo contrario, deberá imprimir “Extracción realizada correctamente, su nuevo
// saldo es: XXXX”.

const banco = {
    clientes: arrayCuentas,
    consultarCliente: function (titular) {
        for (i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                return this.clientes[i]
            }
        }
    },

    deposito: function (titular, dineroDeposito) {
        for (i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                let saldoActual = this.clientes[i].saldoEnPesos += dineroDeposito;
                return 'Depósito realizado, su nuevo saldo es: ' + saldoActual + '$';
            }
        }
    },

    extraccion: function (titular, dineroExtraccion) {
        for (i = 0; i < this.clientes.length; i++) {
            if (titular === this.clientes[i].titularCuenta) {
                if (dineroExtraccion <= this.clientes[i].saldoEnPesos) {
                    let saldoActual = this.clientes[i].saldoEnPesos -= dineroExtraccion;
                    return 'Extracción realizada correctamente, su nuevo saldo es: ' + saldoActual + '$';
                } else {
                    return 'Fondos Insuficientes.';
                }
            }
        }
    }
}

console.log(banco.extraccion('Ansel Ardley', 40000));

// Crear el objeto “alumno”, el cual va a consistir de las siguientes propiedades básicas:
// ● Nombre
// ● Número de legajo
// ● Lista de notas
// Nos gustaría calcular el promedio del alumno y si el mismo está aprobado, basado en una
// nota de aprobación que le va a ser dada. Para este ejercicio, vamos a dejar que pienses
// todos los métodos y propiedades que puedan hacer falta para que el programa funcione
// correctamente de la manera solicitada.

const alumno = {
  nombre: 'Carlitos Juancho',
  nroLegajo: 356,
  notas: [5, 6, 8],
  promedioNotas: function (array) {
    let sumaNotas = 0;
    for (i = 0; i < array.length; i++) {
      sumaNotas += array[i];
    }
    let promedio = sumaNotas / array.length;
    if (promedio >= 7) {
      return '¡Felicidades! Has aprobado con: ' + promedio;
    } else {
      return 'Lo sentimos. Has desaprobado con: ' + promedio;
    }
  }
}

console.log(alumno.promedioNotas(alumno.notas));