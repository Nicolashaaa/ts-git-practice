"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
// Individual.ts
var Individual = /** @class */ (function () {
    // Конструктор для инициализации свойств
    function Individual(id, isHumanoid, planet, age, traits) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
    // Getter методы
    Individual.prototype.getId = function () {
        return this.id;
    };
    Individual.prototype.getIsHumanoid = function () {
        return this.isHumanoid;
    };
    Individual.prototype.getPlanet = function () {
        return this.planet;
    };
    Individual.prototype.getAge = function () {
        return this.age;
    };
    Individual.prototype.getTraits = function () {
        return this.traits;
    };
    // Методы
    Individual.prototype.greet = function () {
        console.log("Hello! I am creature No. ".concat(this.id));
    };
    Individual.prototype.printInfo = function () {
        console.log("Creature: ".concat(this.id));
        console.log("Is Humanoid? ".concat(this.isHumanoid));
        console.log("It is from ".concat(this.planet));
        console.log("It is ".concat(this.age, " years old"));
        console.log("It has traits: ".concat(this.traits.join(', ')));
    };
    // Метод для создания копии
    Individual.prototype.copy = function (newId, newIsHumanoid) {
        return new Individual(newId, newIsHumanoid, this.planet, this.age, this.traits);
    };
    return Individual;
}());
exports.Individual = Individual;
