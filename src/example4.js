"use strict";
// Definición de la función genérica 'removeFirstEntry'
function removeFirstEntry(arr) {
    return arr.slice(1);
}
const strArray = ['Hello', 'World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
const numArray = [1, 2, 3, 4, 5, 6, 7];
const mixedArray = ['Hello', 'I', 'have', 3, 'tasks'];
const newStrArray = removeFirstEntry(strArray);
const newNumArray = removeFirstEntry(numArray);
const newMixedArray = removeFirstEntry(mixedArray);
console.log(newStrArray); // --> ['World', 'Im', 'a', 'Full', 'Stack', 'Developer'];
console.log(newNumArray); // --> [2, 3, 4, 5, 6, 7];
console.log(newMixedArray); // --> ['I', 'have', 3, 'tasks'];
