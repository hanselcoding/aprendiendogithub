// 1. Variables y Tipos de Datos ==============================================================================

// a. Declara una variable nombre y asígnale tu nombre. - ✅ NICE
console.log("=== 1. a ===")
let nombreee = 'hansel' // 🚨 Trata de escribir bien los nombres de las variables y que estos representen el valor de la variable
console.log(nombreee)

// b. Declara una variable edad y asígnale tu edad. ✅ NICE
console.log("=== 1. b ===")
let edad = 22
console.log(edad)

// c. Declara una variable esEstudiante y asígnale un valor booleano que indique si eres estudiante o no. ✅ NICE
console.log("=== 1. c ===") 

let estudiantee = true // 🚨 Escribe bien el nombre de la variable, te podria evitar confusiones a futuro.
if (estudiantee) {
    console.log('eres un estudiante') // 🚨 Estas usando comillas simples ('') y en los console.logs estas usando comillas dobles (""), trata de usar siempre una sola"
} else {
    console.log('no eres un estudiante')
}
console.log(estudiantee)

// 2. Números =================================================================================================

// a. Declara una variable precioProducto y asígnale el precio de un producto que te guste. ✅ NICE
console.log("=== 2. a ===")
let precioProducto = 200 // Nice usaste CamelCase para nombrar la variable
console.log(precioProducto)

// b. Declara una variable descuento y calcula el precio después de aplicar un descuento. ✅ NICE
console.log("=== 2. b ===")
let descuento = 40
let preciocondescuento = precioProducto * (descuento / 100) // 🚨 Usa CamelCase para nombrar la variable 'preciocondescuento', es decir el nombre de la variable asi precioConDescuento
console.log(preciocondescuento)


// 3. Cadenas de Texto ========================================================================================

// a. Declara una variable frase y asígnale una frase o cita que te guste. ✅ NICE
console.log("=== 3. a ===")
let frase = 'elias es kga'

// b. Usa el método toUpperCase() para convertir la frase a mayúsculas. ✅ NICE
console.log("=== 3. b ===")
console.log(frase.toUpperCase())

// 4. Arrays ==================================================================================================


// a. Crea un arreglo llamado colores con algunos colores que te gusten. ✅ NICE
console.log("=== 4. b ===")
let colores = ['azul', 'blanco', 'rojo', 'amarillo']

// b. Agrega un nuevo color al arreglo. ✅ NICE
let coloresdos = 'verde'  // 🚨 Usa CamelCase para nombrar la variable 'coloresdos', es decir el nombre de la variable asi 'colorDos'
colores.push(coloresdos)
console.log(colores)


// c. Accede al tercer color en el arreglo. ✅ NICE
let micuartocolor = colores[2]
console.log(micuartocolor)

// 5. Objetos ================================================================================================

// a. Crea un objeto persona con propiedades como nombre, edad y ciudad. ✅ NICE
console.log("=== 5. a ===")
let persona = {
    nombre: 'hansel',
    edad: 22,
    ciudad: 'barranquilla'
}
// b. Modifica la propiedad ciudad del objeto. ✅ NICE
console.log("=== 5. b ===")
persona.ciudad = 'malambo'
console.log(persona.ciudad)
// 6. Booleanos ===============================================================================================

// a. Declara una variable esSoleado y asígnale un valor booleano que indique si el día está soleado o no. ✅ NICE
console.log("=== 6. a ===")
let esSoleado = true
if (esSoleado) {
    console.log('esta soleado')
} else console.log('no esta soleado') // 🚨 Cuida la identacion. Esto funciona, pero puede hacer el codigo dificil de entender.

// b. Declara una variable esLluvioso y asígnale un valor booleano que indique si está lloviendo o no. ✅ NICE
console.log("=== 6. b ===")
let esLluvioso = false
if (esLluvioso) {
    console.log('esta lluvioso')
} else console.log('no esta lluvioso') // 🚨 Cuida la identacion. Esto funciona, pero puede hacer el codigo dificil de entender.
// 7. Null y Undefined ========================================================================================

// a. Declara una variable variableNula y asígnale el valor null. ✅ NICE
let variableNula = null
console.log(variableNula)

// b. Declara una variable variableNoDefinida sin asignarle ningún valor. ✅ NICE
let variableNoDefinida
console.log(variableNoDefinida)

// 8. Conversión de Tipos ======================================================================================

// a. Declara una variable numero y asígnale un número como cadena de texto. ✅ NICE
let numero = '123'
// b. Convierte esa cadena de texto en un número usando parseInt(). ✅ NICE
console.log(parseInt(numero))

// 9. Operaciones Matemáticas ===================================================================================

// a. Declara dos variables numero1 y numero2 y realiza operaciones matemáticas como suma, resta, multiplicación y división entre ellos. ✅ NICE
let numero1 = 20
let numero2 = 40
console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 / numero2)
console.log(numero1 * numero2)
console.log(numero1 % numero2)

// 10. Concatenación de Cadenas =================================================================================

// a. Declara dos variables de cadena `nombre` y `apellido`, y concaténalas para formar tu nombre completo. ✅ NICE

let nombree = ' hansel'
let apellido = ' gallardo'
console.log(nombree + apellido)
// OBJECTOS ===============================================================================================================

// 1. Creación de un Objeto de Película:
// Crea un objeto llamado `pelicula` con propiedades para `título`, `director`, `año` y `duración`. Llena estas propiedades con información sobre tu película favorita. ✅ NICE
let pelicula = {
    titulo: 'elias es kga',
    director: 'hansel',
    año: 2023,
    duracion: '2 horas'
}
console.log(pelicula)
// 2. Creación de un Objeto de Producto:
// Crea un objeto llamado `producto` con propiedades para `nombre`, `precio` y `cantidad`. Asigna valores a estas propiedades para representar un producto en una tienda. ✅ NICE
let producto = {
    nombre: `manzanas`,
    precio: 2000,
    cantidad: 20
}
console.log(producto)
// 3. Creación de un Objeto de Coordenadas:
// Crea un objeto llamado `coordenadas` con propiedades `x` e `y` para representar las coordenadas de un punto en un plano. Asigna valores numéricos a estas propiedades. ✅ NICE
let coordenadas = {
    x: 125,
    y: 285
}
console.log(coordenadas)
// 4. Creación de un Objeto de Estudiante:
// Crea un objeto llamado `estudiante` con propiedades para `nombre`, `edad`, `carrera` y `notas` (un array de números). Asigna valores de muestra a estas propiedades. ✅ NICE
let estudiante = {
    nombre: 'juanito',
    edad: 25,
    Carrera: 'jugador de lol',
    notas: [4.5, 5.4, 8.4]
}
console.log(estudiante)
// 5. Creación de un Objeto de Libro:
// Crea un objeto llamado `libro` con propiedades para `título`, `autor` y `género`. Llena estas propiedades con información sobre un libro que te guste. ✅ NICE
let libro = {
    titulo: 'las aventuras de elias el perro',
    autor: 'elias',
    genero: 'ciencia'

}
console.log(libro)
// 6. Creación de un Objeto de Cuenta Bancaria:
// Crea un objeto llamado `cuentaBancaria` con propiedades para `titular`, `saldo` y `tipo` de cuenta. Asigna valores de muestra a estas propiedades. ✅ NICE
let cuentaBancaria = {
    titular: 'pedrito',
    saldo: 200000,     // 🚨 Esto no quiere decir 200 mil, esto es 200. En caso de que tu intencion era colocar 200 mil no le agreges el punto, ejemplo: 200000
    // 200.000 = 200 pesos
    // 200000 = 200.000 pesos
    tipo: 'ahorros'
}
console.log(cuentaBancaria)
// 7. Creación de un Objeto de País:
// Crea un objeto llamado `pais` con propiedades para `nombre`, `capital`, `población` y `idioma`. Asigna valores a estas propiedades para representar un país. ✅ NICE
let pais = {
    nombre: 'colombia',
    capital: 'bogota',
    poblacion: 50.000, 
    idioma: 'espanol'
}
console.log(pais)
// 8. Creación de un Objeto de Restaurante:
// Crea un objeto llamado `restaurante` con propiedades para `nombre`, `tipoDeComida`, `ubicación` y `horario`. Llena estas propiedades con información sobre un restaurante. ✅ NICE
let restaurante = {
    nombre: 'buena foot',
    ipoDeComida: 'mexicana', // 🚨 trata de usar camelCase para nombre tambien las propiedades de los objectos, en este caso 'tipoDeComida'
    ubicacion: 'barranquilla',
    horario: '1pmto10pm'
}
console.log(restaurante)
// 9. Creación de un Objeto de Música:
// Crea un objeto llamado `cancion` con propiedades para `nombre`, `artista`, `álbum` y `duración`. Asigna valores de muestra a estas propiedades. ✅ NICE
let cancion = {
    nombre: 'mi cancion',
    artista: 'hansel',
    album: 'el mejor booster',
    duracion: '3min'
}
console.log(cancion)

// 10. Creación de un Objeto de Computadora:
// Crea un objeto llamado `computadora` con propiedades para `marca`, `modelo`, `procesador` y `RAM`. Llena estas propiedades con información sobre una computadora. ✅ NICE
let computadora = {
    marca: 'hp',
    modelo: 'pcgamer',
    procesador: 'corei9',
    ram: 64
 // <------ Porque dejaste esta linea aqui en blanco?, esta linea la puedes remover.
}
console.log(computadora)


//keycut
/* ↑↓→←
inicio
fin
ctrl 
alt 
shift
 */