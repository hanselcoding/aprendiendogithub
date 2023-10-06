/* const abc = [
    { id: 1, nombre: "Elias", apellido: "Garcia" },
    { id: 2, nombre: "Hansel", apellido: "Gallardo" },
    { id: 3, nombre: "Jesus", apellido: "Vallecilla" },
]
 */
/* for (let i = 0; i < abc.length ; i++) {
    if(abc[i].nombre == "Elias"){
        console.log("En la base de datos encontramos los datos de elias")
        console.log(abc[i])
    }
} */
/* function imprimirEnConsola(value){
    console.log(value)
} */
/* function findObjectByName(arr, nombre) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre == nombre) {
            imprimirEnConsola(arr[i])
        }
    }
} */
/* const find = findObjectByName(abc, "Elias")
console.log(find); */
//findObjectByName(abc, "Elias")

// Metodos de array NO APRENDERSELO
/* abc.forEach(elemento => console.log("xada"))
abc.map()
abc.find()
abc.includes()
abc.filter() */


let personas = [
    {
        nombre: 'pepito',
        edad:14
    },
    {
        nombre:"juan",
        edad:22
    },
    {
        nombre:"camilo",
        edad:28
    }
]
for (let i=0; i< personas.length;i++) {
    if (personas[i].nombre == "juan") {
        console.log("encontramos al hp")
        console.log(personas[i])
    }
}

for (obj of personas){
    console.log(obj.nombre)
}
