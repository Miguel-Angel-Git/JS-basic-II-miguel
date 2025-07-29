//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log("Hola soy tu consola y juntas vamos a aprender Javascript");
let Nejercicio = 1;
//Si has encontrado el mensaje puedes continuar con los ejercicios

//Arrays

//Ejercicio 1: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.
console.log("           Ejercicio:", Nejercicio++);
const postres = ["helado", "tarta", "pastel"];

console.log(postres);

//Objetos

//Ejercicio 2: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.
console.log("           Ejercicio:", Nejercicio++);
const coder = { nombre: "Miguel", edad: -1 };

//Ejercicio 3: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.
console.log("           Ejercicio:", Nejercicio++);
console.log(coder);
console.log("Tipo de postres:", typeof postres);
console.log("Tipo de coder:", typeof coder);
console.log("Tipo de coder.nombre:", typeof coder.nombre);
console.log("Tipo de coder.edad:", typeof coder.edad);

//CONDICIONALES

//Ejercicio 4: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'
console.log("           Ejercicio:", Nejercicio++);
let age = 18;

if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}
//Ejercicio 5: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
console.log("           Ejercicio:", Nejercicio++);

age = 12;
if (age >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

//Ejercicio 6: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"
console.log("           Ejercicio:", Nejercicio++);
let pet = "Perro";
if (pet === "Perro") {
  console.log("Tienes un perro.");
} else if (pet === "Gato") {
  console.log("Tienes un gato");
} else {
  console.log("Ni gato ni perro");
}

//Ejercicio 7: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
console.log("           Ejercicio:", Nejercicio++);
pet = "Serpiente";
if (pet === "Perro") {
  console.log("Tienes un perro.");
} else if (pet === "Gato") {
  console.log("Tienes un gato");
} else {
  console.log("Ni gato ni perro");
}

//Ejercicio 8: Haz el mismo ejercicio 6, pero con el condicional switch.
console.log("           Ejercicio:", Nejercicio++);

pet = "serpiente";
switch (pet) {
  case "perro":
    console.log("Tienes un perro");
    break;
  case "gato":
    console.log("Tienes un gato");
    break;
  default:
    console.log("otro animal");
}

//Ejercicio 9: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"
console.log("           Ejercicio:", Nejercicio++);
let weather = "frio";

weather === "calor"
  ? console.log("Me vestiré con un vestido")
  : console.log("Me vestiré con pantalón");

//Ejercicio 10: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.
console.log("           Ejercicio:", Nejercicio++);

weather = "calor";
ropa =
  weather === "calor"
    ? "Me vestiré con un vestido"
    : "Me vestiré con pantalón ";
console.log("Clima:", weather, ropa);
//Ejercicio 11: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.
console.log("           Ejercicio:", Nejercicio++);

const value = "1";

switch (typeof value) {
  case "string":
    console.log("es string");
    break;
  case "number":
    console.log("es un número");
    break;
  case "boolean":
    console.log("es booleano");
    break;
  case "object":
    console.log("es un objeto");
    break;
  default:
    console.log("es tipo desconocido");
}

//BUCLES

//Ejercicio 12: Imprime en consola una lista del 0 al 10 con el bucle for
console.log("           Ejercicio:", Nejercicio++);
console.log("Lista del 0 al 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

//Ejercicio 13: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'.

const programmers = [
  {
    name: "Ada",
    lastname: "Lovelace",
    knowledge: "la máquina analítica",
  },
  {
    name: "Margaret",
    lastname: "Hamilton",
    knowledge: "el programa espacial Apolo",
  },
  {
    name: "Grace",
    lastname: "Hopper",
    knowledge: "el lenguaje Cobol",
  },
  {
    name: "Hedy",
    lastname: "Lamarr",
    knowledge: "el wifi",
  },
];
console.log("           Ejercicio:", Nejercicio++);
console.log("For...in nombres");
const programadoras = ["Lucía", "María", "Ana"];
for (let i in programadoras) {
  console.log(`Índice ${i}: ${programadoras[i]}`);
}

//Ejercicio 14: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.
console.log("           Ejercicio:", Nejercicio++);

const names = ["Rocío", "Cris", "Antía", "Judith", "Noelia"];

console.log("14 saludando");
const nombres = ["Carlos", "Sofía", "Elena"];
for (let nombre of nombres) {
  console.log(`¡Hola, ${nombre}!`);
}

//Ejercicio 15: Con un bucle while imprime en consola una lista del 1 al 5.

console.log("           Ejercicio:", Nejercicio++);
console.log("While del 1 al 5");
let contador = 1;
while (contador <= 5) {
  console.log(contador);
  contador++;
}

//Ejercicio 16: Realiza el mismo ejercicio anterior pero con un bucle do while.

console.log("           Ejercicio:", Nejercicio++);
console.log("Do...while del 1 al 5");
let contador2 = 1;
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 5);

//Ejercicio 17: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

console.log("           Ejercicio:", Nejercicio++);
console.log("saludar");
function saludar(nombre) {
  return `¡Hola, ${nombre}! Bienvenido.`;
}
console.log(saludar("Lucia"));

//Ejercicio 18: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

console.log("           Ejercicio:", Nejercicio++);

console.log("area de un rectángulo");
function calcularAreaRectangulo(base, altura) {
  const area = base * altura;
  console.log(`El área del rectángulo es: ${area}`);
}
calcularAreaRectangulo(5, 3);
