"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Individual = void 0;
// Individual.ts
class Individual {
    // Конструктор для инициализации свойств
    constructor(id, isHumanoid, planet, age, traits) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }
    // Getter методы
    getId() {
        return this.id;
    }
    getIsHumanoid() {
        return this.isHumanoid;
    }
    getPlanet() {
        return this.planet;
    }
    getAge() {
        return this.age;
    }
    getTraits() {
        return this.traits;
    }
    // Методы
    greet() {
        console.log(`Hello! I am creature No. ${this.id}`);
    }
    printInfo() {
        console.log(`Creature: ${this.id}`);
        console.log(`Is Humanoid? ${this.isHumanoid}`);
        console.log(`It is from ${this.planet}`);
        console.log(`It is ${this.age} years old`);
        console.log(`It has traits: ${this.traits.join(', ')}`);
    }
    // Метод для создания копии
    copy(newId, newIsHumanoid) {
        return new Individual(newId, newIsHumanoid, this.planet, this.age, this.traits);
    }
}
exports.Individual = Individual;
