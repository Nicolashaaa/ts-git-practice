"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var Individual_1 = require("./Individual");
function main() {
    // Создание экземпляров класса Creature
    var creature1 = new Individual_1.Individual(1, false, "Asgard", 200, ["small", "red"]);
    var creature2 = new Individual_1.Individual(2, true, "Kashyyyk", 16, ["intelligent", "blue-eyed"]);
    // Печать информации о существах
    var creatures = [creature1, creature2];
    creatures.forEach(function (creature) {
        creature.printInfo();
    });
    // Создание копии creature2 с изменением id и isHumanoid
    var creature3 = creature2.copy(3, false);
    creature3.printInfo();
    creature3.greet();
}
main();
