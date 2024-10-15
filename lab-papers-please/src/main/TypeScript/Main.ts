// main.ts
import { Individual } from './Individual';

function main() {
    // Создание экземпляров класса Creature
    const creature1 = new Individual(1, false, "Asgard", 200, ["small", "red"]);
    const creature2 = new Individual(2, true, "Kashyyyk", 16, ["intelligent", "blue-eyed"]);

    // Печать информации о существах
    const creatures = [creature1, creature2];
    creatures.forEach(creature => {
        creature.printInfo();
    });

    // Создание копии creature2 с изменением id и isHumanoid
    const creature3 = creature2.copy(3, false);
    creature3.printInfo();
    creature3.greet();
}

main();
