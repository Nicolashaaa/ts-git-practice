// Individual.ts
export interface IndividualProps {
    id: number;
    isHumanoid?: boolean;
    planet?: string;
    age?: number;
    traits?: string[];
}

export class Individual {
    // Приватные свойства
    private id: number;
    private isHumanoid: boolean;
    private planet: string;
    private age: number;
    private traits: string[];

    // Конструктор для инициализации свойств
    constructor({ id, isHumanoid, planet, age, traits }: IndividualProps) {
        this.id = id;
        this.isHumanoid = isHumanoid;
        this.planet = planet;
        this.age = age;
        this.traits = traits;
    }

    // Getter методы
    public getId(): number {
        return this.id;
    }

    public getIsHumanoid(): boolean {
        return this.isHumanoid;
    }

    public getPlanet(): string {
        return this.planet;
    }

    public getAge(): number {
        return this.age;
    }

    public getTraits(): string[] {
        return this.traits;
    }

    // Методы

    // public printInfo(): void {
    //     console.log(`Is Humanoid? ${this.isHumanoid !== undefined ? this.isHumanoid : 'N/A'}`); // Проверяем на undefined
    //     console.log(`It is from ${this.planet !== undefined ? this.planet : 'N/A'}`); // Проверяем на undefined
    //     console.log(`It is ${this.age !== undefined ? this.age : 'N/A'} years old`); // Проверяем на undefined
    //     console.log(`It has traits: ${this.traits ? this.traits.join(', ') : 'None'}`); // Проверяем на наличие traits
    // }

    public printInfo(): void {
        
        // Проверяем и выводим только если свойство задано
        if (this.isHumanoid !== undefined) {
            console.log(`Is Humanoid? ${this.isHumanoid}`);
        }
        
        if (this.planet !== undefined) {
            console.log(`It is from ${this.planet}`);
        }
        
        if (this.age !== undefined) {
            console.log(`It is ${this.age} years old`);
        }
        
        if (this.traits) {
            console.log(`It has traits: ${this.traits.join(', ')}`);
        } else {
            console.log(`It has traits: None`);
        }
    }

    // Метод для создания копии
    public copy(newId: number, newIsHumanoid: boolean): Individual {
        return new Individual({ id: newId, isHumanoid: newIsHumanoid, planet: this.planet, age: this.age, traits: this.traits });
    }
}
