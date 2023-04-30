//----------CLASE----------

// Básicamente un plantilla para crear objetos

class animal{
    // creamos constructor
    constructor(vEspecie, vEdad, vColor){
        this.especie = vEspecie;
        this.edad = vEdad;
        this.color = vColor;
    }

    // Modificadores
    // se usan para modifcar propiedades de un objeto

    get getColor(){
        return this.color
    }

    set setColor(newColor){
        this.color = newColor;
    }
}

// creamos un perro 
let perro1 = new animal("Golden", 14, "negro");

// mostramos las propiedades "especie" y "edad"
document.write(perro1.especie);
document.write("<br>"+perro1.edad);

// mostramos el color original del perro
document.write("<br>"+perro1.color);
// esta siguiente linea muestra lo mismo que la anterior
document.write("<br>"+perro1.getColor);

// mediante el modificador SET cambiamos su color
perro1.setColor = "azul";

// ahora mostramos el nuevo color del perro
document.write("<br>"+perro1.getColor);



