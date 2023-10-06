// SINTAXYS 
// 
// function <nombre de la funcion>(argumento1, argumento2, arg...) {
//     <codigo de la funcion...>
//     return <valor a retornar>
// }

// 1. Función para Saludar:
// Escribe una función llamada saludar que tome un nombre como argumento y devuelva un saludo que diga "Hola, [nombre]".
function saludar(nombre) {
    return 'hola ' + nombre
}

let usuarioname = 'juan'
console.log(saludar(usuarioname))

// 2. Función para Duplicar un Número:
// Escribe una función llamada duplicar que tome un número como argumento y devuelva el doble de ese número.
function duplicar(numerodelusuario) {
    return numerodelusuario * 2
}
let usuarionumero = 10
console.log(duplicar(usuarionumero))
// 3. Función para Determinar si un Número es Par:
// Escribe una función llamada esPar que tome un número como argumento y devuelva true si es par o false si es impar.
function esPar(numerodelusuario) {
    if (numerodelusuario % 2 === 0) {
        return 'par'
    } else {
        return 'impar'

    }
}
let numero = 3
console.log(esPar(numero))
// 4. Función para Elevar un Número al Cuadrado:
// Escribe una función llamada elevarAlCuadrado que tome un número como argumento y devuelva ese número elevado al cuadrado.
function elevarAlCuadrado(datousuario) {
    return datousuario ** 2
}

let usuario = 10
console.log(elevarAlCuadrado(usuario))

// 5. Función para Calcular la Longitud de una Cadena:
// Escribe una función llamada longitudCadena que tome una cadena como argumento y devuelva la longitud (número de caracteres) de esa cadena.
function longitudCadena(longitud) {
    return longitud.length
}
let cadena = 'soy una cadena'
console.log(longitudCadena(cadena))

// 6. Función para Obtener el Último Elemento de una Lista == Array:
// Escribe una función llamada obtenerUltimoElemento || que tome una lista como argumento || y devuelva el último elemento de esa lista.
function obtenerUltimoElemento( argumento ) {
    return argumento[argumento.length-1]
}

let elemento = [1,123,234,234,234,234,234,234, 3, 4, 5, 6, 7, "Elias"]

console.log(obtenerUltimoElemento(elemento))
// 7. Función para Concatenar Dos Cadenas:
// Escribe una función llamada concatenarCadenas || que tome dos cadenas como argumentos |♀y devuelva una sola cadena que sea la concatenación de las dos cadenas.
function concatenar ( hansel, pedrito) {
    return hansel +' ' + pedrito 
}

console.log(concatenar(" Cosas", "elias"));