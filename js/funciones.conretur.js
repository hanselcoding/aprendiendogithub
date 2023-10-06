// Variables
// Tipo de datos 
// Simbolos aritmeticos y logicos
// Estructura IF
// estructura Function
// Objetos
// Arrays
// Metodos de Array

let micaja = [true, 'string', 2, []]


let casa = {
    puerta: '2metros',
    ventana: '40x40cm',
    cuarto: '5x5metros',
    laptop: [
        'cargador',
        'parlantes de la laptop'
    ],
    cama: '2x2metro',
    bano: {
        jabones: 3,
        espejo: 2,
        cremadepeinar: 3


    }


}
console.log(casa)



// 1
let nombre = 'hansel'
let edad = '22'
let estudiante = true

if (estudiante) {
    console.log
    ('eres un estudiante')
} else {
 
    console.log('no eres un estudiante')

}

function suma(a, b) {
    return a + b;

}
let resultado = suma(10, 20);

console.log(resultado);

function resta(a, b, c) {
    return a - b - c
}
 resultado = resta(20, 20, 10)
console.log(resultado)

function sumare (a,b,c) {
    return a*b*c
}
resultado= sumare (2,5,5)
console.log(resultado)

function elias (a,b,c){
    return a/b/c
} 
resultado= elias (20,41,2)
console.log(resultado)


let edadd = 80
if ( edadd > 17) {
    console.log(' eres mayor de edad')
} else {
    console.log(' eres menor de edad')
}








