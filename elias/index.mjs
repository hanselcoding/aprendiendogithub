/* const fn = (str) => {

    console.log("Parametro recibido: " + str)
    //1. Convertir todo a mayuscula
    const upper = str.toUpperCase();
    console.log("Despues de Upper: " + upper)

    //2. Quitar los espacios
    const withoutSpace = upper.split(' ').join("");
    console.log("Despues de withoutSpace: " + withoutSpace)

    return withoutSpace
}

const name = 'Elias Garcia Alvarado'

fn(name) */

/* Como calcular la seguridad social en Colombia:
1. Necesitas saber el Salario Minimo Vigente (SLMV)
2. Obtener la base sobre la cual se calcularan los impuestos (El 40% del SLMV)
3. Calcular la salud: el 12.5% de la base
4. Calcular la pensino: el 16% de la base
5. Calcular la arl: el 0.005% de la base
*/


/* function calcularSeguridadSocial(salario) {
    const SMLV = 1200000
    // Dentro de la funcion
    // No necesitas retornar
    // Necesitas CONSOLOGEAR los datos
    let base = salario * 0.4

    if (base < SMLV) {
        base = SMLV
    }

    let salud = base * 0.125
    let pension = base * 0.16
    let arl = base * 0.005


}





calcularSeguridadSocial(1200000) */







function func () {
    console.log(1); 
    return ' hola'
}


 

const saludo = func()
 console.log(saludo)
