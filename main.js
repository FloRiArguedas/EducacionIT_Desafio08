import './css/style.css'

/*  DESAFIO 07 - FLORICELA ARGUEDAS */

// ?Ejercicio 1  Declaración y Asignación: Declara una variable llamada nombre y asígnale tu nombre como valor.

console.warn('EJERCICIO 1')

/* let nombre = 'Floricela'

console.log(nombre) */

// ?Ejercicio 2. Tipos de Datos: Crea variables para almacenar un número entero (edad), un número decimal (precio), una cadena de texto (ciudad) y un valor booleano (esEstudiante).

console.warn('EJERCICIO 2')

let edad = 30

let precio = 1250.25

let ciudad = ' Heredia, Costa Rica'

let estudiante = true

// ?Ejercicio 3. Concatenación: Declara dos variables (nombre, apellido) y muestra un mensaje que diga "Hola, [nombre] [apellido]".

console.warn('EJERCICIO 3')

let nombre = 'Floricela'

let apellido = 'Arguedas'

console.log( 'Hola ' + nombre + ' ' + apellido)

// ?Ejercicio 4. Operaciones Matemáticas: Declara dos variables numéricas (num1, num2) y realiza las operaciones básicas (suma, resta, multiplicación, división) con ellas.

console.warn('EJERCICIO 4')

let num1 = 20

let num2 = 8

let suma = num1+num2
let resta = num1-num2
let multiplicacion = num1*num2
let division = num1/num2

console.log ('La suma de ' + num1 + ' + ' + num2 + ' es igual a: ' + suma)
console.log ('La resta de ' + num1 + ' - ' + num2 + ' es igual a: ' + resta)
console.log ('La multiplicación de ' + num1 + ' x ' + num2 + ' es igual a: ' + multiplicacion)
console.log ('La división de ' + num1 + ' / ' + num2 + ' es igual a: ' + division)

// ?Ejercicio 5. Incremento y Decremento: Declara una variable (contador) y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor.

console.warn('EJERCICIO 5')

let contador = 8  // Se establece en 8 el contador

console.log ('El contador es: ' + contador)

contador ++  // Se incrementa en 1

console.log ('Contador Incrementado: ' + contador)

contador--  // Se decrementa en 1

console.log ('Contador Decrementado: ' + contador)

// ?Ejercicio 6. Prompt y Alert: Pide al usuario que ingrese su nombre mediante prompt() y luego muestra un mensaje de bienvenida con alert().

/* console.warn('EJERCICIO 6')

let nombreusuario = prompt( 'Digite su nombre') // Se solicita el nombre

alert( 'Hola ' + nombreusuario + ' Bienvenido (a)')  // Se brinda mensaje de bienvenida */
 
// ?Ejercicio 7. Cálculo de Área: Pide al usuario el radio de un círculo y calcula su área (π * radio^2).

console.warn('EJERCICIO 7')

/* const pi = 3.14

let radio = prompt( 'Digite el radio del círculo')

let area = pi*(radio*radio)  // Se ejecuta la fórmula y se guarda en la variable

console.log ( 'El área del círculo es: ' + area) */


// ?Ejercicio 8. Conversión de Unidades: Pide al usuario una temperatura en grados Celsius y conviértela a Fahrenheit.

console.warn('EJERCICIO 8')

/* let celsius = prompt ('Digite en grados Celsius la temperatura')

let conversion = (celsius*1.8)+32

console.log('La temperatura en grados Fahrenheit es: ' + conversion)
 */
// ?Ejercicio 9. Cálculo de Promedio: Pide al usuario tres números y calcula su promedio.

/* console.warn('EJERCICIO 9')

let primernum = parseInt(prompt( 'Digite el primer número'))
let segundonum = parseInt(prompt( 'Digite el segundo número'))
let tercernum = parseInt(prompt('Digite el tercer número'))

let sumanumeros = primernum+segundonum+tercernum

let promedio = sumanumeros/3

console.log (' El promedio de los números dados es: ' + promedio) */

// ?Ejercicio 10. Operador Ternario: Utiliza el operador ternario para determinar si un número es positivo o negativo.

console.warn('EJERCICIO 10')

/* let numero = prompt (' Digite un número')

let resultado = (numero >=0) ? 'Ese número es positivo' : 'Ese número es negativo'

console.log(resultado) */

// ?Ejercicio 11. Condicional if-else: Pide al usuario su edad y determina si es mayor o menor de edad.

 console.warn('EJERCICIO 11')
/*
let edadusuario = prompt ('Digite su edad')

if (edadusuario >= 18) {
    console.log ( 'Usted es mayor de edad')
} else {
    console.log ( 'Usted es menor de edad')
}
 */
// ?Ejercicio 12. Condicional switch: Pide al usuario un número del 1 al 7 y muestra el día de la semana correspondiente.

console.warn('EJERCICIO 12')

let numdia = parseInt (prompt ( 'Indique un número del 1 al 7'))

switch (numdia) {
    case 1:
        console.log ('Hoy es el día Lunes')
        break;
    case 2:
        console.log ('Hoy es el día Martes')
        break;
    case 3:
        console.log ('Hoy es el día Miércoles')
        break;
    case 4:
        console.log ('Hoy es el día Jueves')
        break;
    case 5:
        console.log ('Hoy es el día Viernes')
        break;
    case 6:
        console.log ('Hoy es el día Sábado')
        break;
    case 7:
        console.log ('Hoy es el día Domingo')
        break;

    default:
        console.log ('A digitado un número incorrecto')
        break;
}
