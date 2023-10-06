// Variables
// var - let - const
// var (Ya no se usa esta deprecado)
// examples
var cosa = "Abanico" // YA NO SE USA
let edad = 20
const PI = 3.1416

// Tipos de datos
// Numericos(number)- Cade de texto(string) - Booleano(bolean) - objects
let sum = 5 + 5 // Tipo de dato numerico
let letter = 'Elias' // Tipo de dato string
let esMayor = 18 < 20 // Tipo de dato booleano
// Para saber el tipo de dato de una variable, se usa typeof y luego el nombre de la variable 
// Example
console.log(typeof sum)
console.log(typeof letter)
console.log(typeof esMayor)
console.log(esMayor)

// Operadores Aritmeticos y logicos

// Aritmeticos
// Para suma resta jultiplicacion division modulo potencia etc
// suma -> 5 + 5
// resta -> 5 - 5
// division -> 5 / 5
// multiplicacion -> 5 * 5
// modulo -> 5 % 5 (Es el restante de una division)
// potencia -> 5 ** 5

// Logicos
// Mayor que -> 5 > 2 (true)
// Menor que -> 2 < 10 (true)
// Mayor o igual que -> 3 >= 3 (true)
// Menor o igual que -> 4 <= 4 (true)
// Diferente que -> 10 != 8 (true)


// Condicionales
// Para la estructura de condicion se usa la palabra reservada if
// Estructura
// if (condicion) {
//   codigo que se ejecuta si la condicion es verdadera
// } else {  (EL ELSE ES OPCIONAL NO ES OBLIGATORIA COLOCARLA EN TODAS LAS CONDICIONES)
//   codigo que se ejecuta si la condicion es falsa
// }

// Examples
if(edad >= 18){
    console.log('Puede entrar a la discoteca')
} else {
    console.log('No puede ingresar')
}

edad = 15
if(edad < 18){
    console.log('Es menor de edad')
}

// Funciones
// Las funciones son bloques de codigos REUTILIZABLES !!
// Para crear una funcion se utiliza la palabra reservada function luego el nombre de la funcion y los parametros
// Ejemplo
function suma(a , b){
    return a + b
}

console.log(suma(10, 20))
console.log(suma(40, 30))
console.log(suma(30, 50))
console.log(suma(60, 60))

function saludar(nombre){
    return 'Hola, como estas ' + nombre
}
console.log(saludar('Elias'))
console.log(saludar('Hansel'))
console.log(saludar('Dargua'))

// Tipos de datos Objects
// Listas -> array
// se representan con corchetes []
// Ejemplo
const listNumber = [1,2,3,4,5]
console.log(listNumber)

// Objetos
// Son formados por clave y valor
// Ejemplos
const persona = {º
    nombre: 'Elias',
    edad: 20,
    email: 'eliasgarcia.mail@gmail.com'
}

// { key: value }
console.log(persona)
console.log(persona.nombre)
console.log(persona.email)
console.log(persona.edad)

const exambleDb = [
    {nombre: 'Jaime', edad:12},
    {nombre: 'hansel', edad:20},
    {nombre: 'andres', edad:23},
    {nombre: 'jose', edad:80},
]

const carro = {
    llantas: 4,
    marca: 'Hyunday',
    velodadMax: 230,
    ve
}

exambleDb.forEach(persona => {
    if(persona.nombre == 'elias'){
        console.log(`${persona.nombre} tiene ${persona.edad} años`)
    }
})