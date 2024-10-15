// Individual.ts
export class Individual {
    // Приватные свойства
    private id: number;
    private isHumanoid: boolean;
    private planet: string;
    private age: number;
    private traits: string[];

    // Конструктор для инициализации свойств
    constructor(id: number, isHumanoid: boolean, planet: string, age: number, traits: string[]) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }

    // Getter методы
    getId(): number {
        return this.id;
    }

    getIsHumanoid(): boolean {
        return this.isHumanoid;
    }

    getPlanet(): string {
        return this.planet;
    }

    getAge(): number {
        return this.age;
    }

    getTraits(): string[] {
        return this.traits;
    }

    // Методы
    greet(): void {
        console.log(`Hello! I am creature No. ${this.id}`);
    }

    printInfo(): void {
        console.log(`Creature: ${this.id}`);
        console.log(`Is Humanoid? ${this.isHumanoid}`);
        console.log(`It is from ${this.planet}`);
        console.log(`It is ${this.age} years old`);
        console.log(`It has traits: ${this.traits.join(', ')}`);
    }

    // Метод для создания копии
    copy(newId: number, newIsHumanoid: boolean): Individual {
        return new Individual(newId, newIsHumanoid, this.planet, this.age, this.traits);
    }
}
