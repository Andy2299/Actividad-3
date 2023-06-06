"use strict";
// Definición de la función de tipo predicado para comprobar si un objeto es de tipo 'Car'
function isCar(vehicle) {
    return vehicle.pressPedal !== undefined;
}
// Definición de la función que acepta un parámetro que puede ser 'Car' o 'Motorcycle'
function startVehicle(vehicle) {
    vehicle.turnOnEngine();
    if (isCar(vehicle)) {
        vehicle.pressPedal();
    }
    else {
        vehicle.openThrottle();
    }
}
// Ejemplo de uso
let car = {
    tires: 4,
    turnOnEngine: () => console.log("Car engine started"),
    pressPedal: () => console.log("Car pedal pressed"),
};
let motorcycle = {
    tires: 2,
    turnOnEngine: () => console.log("Motorcycle engine started"),
    openThrottle: () => console.log("Motorcycle throttle opened"),
};
startVehicle(car); // Car engine started, Car pedal pressed
startVehicle(motorcycle); // Motorcycle engine started, Motorcycle throttle opened
