
//----------ARRAY//----------
/*
// Creamos un array

let frutas = ["banana", "maracuya", "mango", 13];

//document.write(frutas[3]+"<br>");
*/

//----------ARRAY ASOCIATIVO----------
/*
// asociamos una variable a los índices del array

let auto = {
    marca: "KIA",
    motor: "1.6",
    puertas: "5",
    modelo: "Cerato"
}

// Básicamente estamos creando un objeto
// y seleccionando sus atributos para mostrarlos
let _marca = auto["marca"];
let _motor = auto["motor"];
let _puertas = auto["puertas"];
let _modelo = auto["modelo"];

// Ahora mostramos esto 

outHTMl = `Este es un auto marca <b>${_marca}</b> <br>
           es modelo: <b>${_modelo}</b> <br>
           con un motor: <b>${_motor}</b> <br>
           y posee <b>${_puertas}</b> puertas <br>`;

document.write(outHTMl); */

//----------BUCLES E ITERACIÓN----------
/*
//let numero = prompt("Ingrese un número");
/*
    if (numero < 10){
        alert(`El número ${numero} es menor a 10`);
    }
    else if (numero > 10){
        alert(`El número ${numero} es mayor a 10`);
    }
    else if (numero == 10){
        alert(`El número es 10`);
    }
    else {
        alert("Error")
    }

    // Bucle for para recorrer un array de frutas previamente creado
    
    let frutas = ["banana", "maracuya", "mango", 13];
    /*for (let i = 0 ; i < numero ; i++ ){
        // Agregamos una validación para que no se muestre el número 13 del array
        if(frutas[i] == "13"){
            continue;
        }
        document.write(frutas[i]+"<br>");
    }

    // for-in recorre los arrays
    for (f in frutas){
        document.write(f+"<br>");
    }

    // mostramos los objetos dependiendo del indice del array
    for (f in frutas){
        document.write(frutas[f]+"<br>");
    }

    // for-of recorre los objetos del array
    for (f of frutas){
        document.write(f+"<br>");
    }*/

//----------FUNCIONES----------
/*
// Función definida de forma clásica
//function saludar(nombre){
 //   let saludo = alert(`Hola ${nombre}, ¿cómo estás?`)
//}

// Función flecha
const saludar = nombre => alert(`Hola ${nombre}, ¿cómo estás?`);

saludar("Sebas")
*/









