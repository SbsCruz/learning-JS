//----------METODOS DE CADENA----------
/*
// concat()
// junta 2 o más cadenas

let palabra = `mecánica cuántica`
total = palabra.concat(` es difícil`)

document.write(palabra+`<br>`)
document.write(total)

// startwith()
// verifica si un string empieza con los mismos caracteres
// de otra

let palabra1 = `Ecuador esta bonito`
let palabra2 = `Ecuador esta bonitop`

res = palabra1.startsWith(palabra2,2)
document.write(`<br>`)
document.write(res)

// includes() - indexOf() - lastIndexOf()
// verifica si el string está dentro de otro
// en cualquier lugar del string
// indexOf nos muestra la posición del caracter en donde empieza
// la cadena que buscamos
// si se repite, nos muestra el primero
// lastIndexOf lo mismo pero con la última vez que se repite

let saludos = [`hola`, `hi`, `ey`, `que tal` ]
let saludo = `ey! hola como estás, que tal?`

document.write("<br>"+"verificamos si incluye saludos <br>dentro de un array y su posición")
document.write("<br>"+"la frase es: <b><br><br>"+saludo+"</b><br>")

for (let i = 0 ; i<saludos.length; i++){
    check1 = saludo.includes(saludos[i])
    check2 = saludo.indexOf(saludos[i])
    document.write(`<br>`)
    document.write(saludos[i]+": "+check1 +" || posición: "+check2)
}



// padStart()
// se rellena el string para que tenga el número de caracteres 
// deseado, y se especifíca con qué se va a rellenar

let email = "@gmail.com";

completo = email.padStart(23,"sebas.cruz750") 

document.write("<br><br>");
document.write(completo);

// split()
// separa un string en donde haya el caracter que le indiquemos
// nos genera un array con miniStrings

let st = "Hola como estás? yo muy bien jaja"

separado = st.split(" ")
document.write("<br><br>");
document.write(separado[0])

// substring()
// nos crea un string a partir de otro, tiene 2 parámetros
// el índice para ver desde donde empieza y donde acaba
// el índice final no se incluye en el resultado

sub = st.substring(1,4)
document.write("<br><br>");
document.write(sub)
document.write("<br>");
document.write(sub[0])

// toLowerCase() - toUpperCase()
// convierte el string a minúsculas y mayúsculas según corresponda

minus = st.toLowerCase()
mayus = st.toUpperCase()
document.write("<br><br>");
document.write(minus)
document.write("<br>");
document.write(mayus)

// trim()
// le quita los espacios en blanco a un string
// su variaciones de End y Start hacen lo mismo pero 
// quita los del principio o los del final
*/

//----------METODOS DE ARRAYs----------
/*
// pop()
// imprime el último elemento de un array y lo elimmina

let nombres = ["sebas", "jona","jonaP", "brandon"]

document.write("el array original: " + nombres)
final = nombres.pop();
document.write("<br> eliminamos el último: "+ final)
document.write(`<br>se alteró el array original: ` +nombres)

// shift()
// imprime el primer elemento de un array y lo elimina

document.write("<br><br>el array original: " + nombres)
init = nombres.shift();
document.write("<br> eliminamos el primero: "+ init)
document.write(`<br>se alteró el array original: ` +nombres)

// push()
// agregamos un elemento al final del array
// nos devuelve la cantidad de elementos que ahora hay en el array

let adicion = "sebasC"
added = nombres.push(adicion)
document.write(`<br><br>ahora hay este numero de elementos: ` +added)
document.write(`<br> el array ahora es:` + nombres)

// unshift()
// agregra elementos al principio del array
// y devuelve la cantidad de elementos que hay

let aded = "dilan"
ad = nombres.unshift(aded)
document.write(`<br><br>se agregó: ` +aded)
document.write(`<br> el array ahora es:` + nombres)

// reverse()
// invierte el orden de los elementos del array

reverso = nombres.reverse();
document.write("<br><br>el inverso: " + reverso)

// sort()
// ordena ya sea de manera alfabética,
// numéricamente hablando, toma los números como texto
// si hay un 10, este irá luego del 1 y antes del 2

let num = [1,2,4,7,3,6,5]

document.write("<br><br> array original:"+num)
num.sort();
document.write("<br>el array ordenado:"+num)

// splice()
// modifcamos el array, ya sea agregando o eliminando
// a partir de un indice seleccionado
// el primer numero es desde donde se trabaj
// el segundo numero es cuantos elementos se desean eliminar

document.write("<br><br>array original: "+ nombres)

sliced = nombres.splice(0,2,"dilanCruz")
document.write("<br> elemento/s modificado:"+sliced)
document.write("<br> array nuevo:"+nombres)
*/




