/* function captura (){
    let nombrees=document.getElementById("nombre").value;
    alert(nombrees);
    
} */

const asd = document.forms[0]

console.log(asd)
console.dir(asd)
console.log( { 
/*    /*  name: 'elias' */ /*  esto es un valor quemado/*  */ 
}
    // CUalquier  cosa que se vaya a imprimir */

)

// Variuable
const a = 0

// Objeto ↓↓
const b = {}

asd.addEventListener("submit", function (e) {
    e.preventDefault()
    console.log(
        // CUalquier  cosa que se vaya a imprimir
        {
            name: e.target.nombre.value, 
            lastname: e.target.lastname.value,
            cedula: e.target.cedula.value,
            email: e.target.email.value
        }
    )
    

})
function Objeto(a, b, c, d, e) {
    return console.log({
        name: 'elias',

        lastname: 'gallardo',

        cedula: '1192763513',

        email: 'hanselgallardo2000@gmail.com'



    })
}

function sumar(a, b, c) {
    return a + b + c

}
console.log(sumar(10, 10, 10))

const restar = (a, b) => {
    return a - b

}
console.log(restar(20, 20))                     /* functionarrow */
