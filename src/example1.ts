// Definición de la interfaz 'Person'
interface Person {
  name: string;
  age: number;
  profession: string;
}

// Definición de la arrow function que toma un objeto 'Person' como parámetro y devuelve un array
const personToArray = (person: Person): (string | number)[] => {
  return [person.name, person.age, person.profession];
}

// Ejemplo de uso
let lucas: Person = { name: "Lucas", age: 28, profession: "Full Stack" };
console.log(personToArray(lucas)); // ["Lucas", 28, "Full Stack"]
