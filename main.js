import "./css/style.css";

/*  DESAFIO 08 - FLORICELA ARGUEDAS */

// ?Ejercicio 1  Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.

console.warn("EJERCICIO 1");

let valorA = 100;
console.log("El Valor de A es: " + valorA);
let ValorB = 88;
console.log("El Valor de B es: " + ValorB);

//Intercambio de valores entre las variables
let Temporal = valorA;
valorA = ValorB;
ValorB = Temporal;

console.log("Ahora el Valor de A es: " + valorA);
console.log("Ahora el Valor de B es: " + ValorB);

// ?Ejercicio 2.  Función que reciba 2 números como entrada y determine cuál es el mayor.

console.warn("EJERCICIO 2");

let num1 = parseInt(prompt("Digite un primer número"));
let num2 = parseInt(prompt("Digite un segundo número"));

function numMayor(num1, num2) {
  if (num1 > num2) {
    console.log("El número " + num1 + " es mayor que " + num2);
  } else if (num2 > num1) {
    console.log("El número " + num2 + " es mayor que " + num1);
  } else {
    console.log("El número " + num2 + " y el número " + num1 + " son iguales");
  }
}

numMayor(num1, num2);

// ?Ejercicio 3.  Función que reciba un número y retorne si es un número dado es par o impar.

console.warn("EJERCICIO 3");

let buscarpar = parseInt(prompt("Digite un número"));
let espar = false;

function BuscandoPares(num) {
  if (num % 2 === 0) {
    espar = true;
  }
  return espar;
}

if (BuscandoPares(buscarpar) === true) {
  console.log("El número " + buscarpar + " es un número par");
} else {
  console.log("El número " + buscarpar + " es un número impar");
}

// ?Ejercicio 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento.

console.warn("EJERCICIO 4");

let precioOriginal = parseInt(prompt("Digite el precio original del producto"));

let porcentajeDes = parseInt(prompt("Digite el valor del porcentaje de descuento a aplicar"));

let precioFinal = precioOriginal - (precioOriginal * (porcentajeDes/100));

console.log ('El precio final de este producto, ya con ' + porcentajeDes +'% '+ 'de descuento es de: ' + precioFinal + ' colones')

// ?Ejercicio 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.

console.warn("EJERCICIO 5");

function areaCirculo() {
  const pi = 3.14;
  let radio = prompt("Digite el radio del círculo");
  let area = pi * (radio * radio);
  return area;
}

let resultado = areaCirculo(); //Se llama a la función y se guarda su resultado.
console.log("El área del círculo es: " + resultado);

// ?Ejercicio 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit.
console.warn("EJERCICIO 6");

function ConvertirTemperatura() {
  let celsius = prompt("Digite en grados Celsius la temperatura");
  let conversion = (celsius * 1.8) + 32;
  return conversion;
}

let tempFahrenheit = ConvertirTemperatura();
console.log("La temperatura en grados Fahrenheit es: " + tempFahrenheit);

// ?Ejercicio 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10.

console.warn("EJERCICIO 7");

for ( let i= 1; i<11; i++){
    console.log ('Número: ' + i)
}

// ?Ejercicio 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo.

console.warn("EJERCICIO 8");

let numeroNegativo = parseInt(prompt(" Digite un número negativo"));

while (numeroNegativo >= 0) {
  numeroNegativo = parseInt(prompt(" Debe digitar un número negativo"));
}

console.log ('Su número negativo es: ' + numeroNegativo)

// ?Ejercicio 9.  Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.
console.warn("EJERCICIO 9");

let numeroMulti = parseInt(prompt(" Digite el número de la tabla de Multiplicar que desea conocer"));

for ( let i= 1; i<11; i++){
    let resultadoMultiplicacion = numeroMulti*i;
    console.log ( numeroMulti + ' x ' + i + ' es igual a: ' + resultadoMultiplicacion)
}

// ?Ejercicio 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100.
console.warn("EJERCICIO 10");

let sumatoriaPares = 0;
let par;
console.log("Sumando los pares..." + sumatoriaPares)
for (let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    sumatoriaPares = sumatoriaPares + i;
    console.log( "+ " + i + " = " + sumatoriaPares);
  }
}
console.log(
  "La suma total de los números pares del 1 al 100 es: " + sumatoriaPares
);

// ?Ejercicio 11.  Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.

console.warn("EJERCICIO 11");

let persona = {
  nombre: 'Floricela',
  edad: 30,
  ciudad: 'Heredia',
  Presentarse: function presentacion() {
  console.log("Hola mi nombre es " + persona.nombre + " tengo " + persona.edad + " años y vivo en " + persona.ciudad );
}
};
//Llamo a la funcion
persona.Presentarse();

// ?Ejercicio 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.

console.warn("EJERCICIO 12");

//Objetos Persona
let persona1 ={
    nombre: 'Floricela',
    edad: 30,
    pais: 'Costa Rica', 
}
let persona2 ={
    nombre: 'Victor',
    edad: 28,
    pais: 'Perú', 
}
let persona3 ={
    nombre: 'Eduardo',
    edad: 30,
    pais: 'Costa Rica', 
}
let persona4 ={
    nombre: 'Sandra',
    edad: 62,
    pais: 'Estados Unidos', 
}
let persona5 ={
    nombre: 'Isabel',
    edad: 35,
    pais: 'México', 
}

//Array de los objetos persona
let arrayPersonas = [persona1, persona2, persona3, persona4, persona5]

//Bucle para recorrer el array

for (let i=0; i<arrayPersonas.length; i++){
    console.log ('La Persona de la posicion: ' + i + ', es ' + arrayPersonas[i].nombre + ' con ' + arrayPersonas[i].edad  + ' años, desde ' + arrayPersonas[i].pais)
}

// ?Ejercicio 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.

console.warn("EJERCICIO 13");

let arrayNumeros = [0,3,16,28,39,43,56,68,70,82,98,100]

let arrayNumeros2 = [5,6,9,8]

function CalcuPromedio (array){
    let suma =0;
    for (let i=0; i<array.length; i++){
        suma = suma + array[i]
    }
    let promedio = suma / array.length
    console.log ('El promedio de los números del array es: ' + promedio)
}
CalcuPromedio (arrayNumeros)
