"use strict";
// Definición de la arrow function que toma un objeto 'Person' como parámetro y devuelve un array
const personToArray = (person) => {
    return [person.name, person.age, person.profession];
};
// Ejemplo de uso
let lucas = { name: "Lucas", age: 28, profession: "Full Stack" };
console.log(personToArray(lucas)); // ["Lucas", 28, "Full Stack"]
