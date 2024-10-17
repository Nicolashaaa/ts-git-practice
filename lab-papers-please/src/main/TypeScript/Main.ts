import { FileReader } from './FileReader.js';
import { Individual } from './Individual.js';
import { Classifier, Universe } from './Classifier.js'; // Импортируем Classifier
import * as fs from 'fs';
import * as path from 'path';

function main() {
    // Создание экземпляра FileReader
    const filePath = '../resources/input.json'; // Используем относительный путь
    const fileReader = new FileReader(filePath);

    // Вызов методов
    fileReader.readFile();
    const jsonData = fileReader.parseJson();
    if (jsonData) {
        console.log("Parsed JSON Data:", jsonData);
    }

    // Создание экземпляров Individual из полученных данных
    const individualsMap = new Map<number, Individual>();
    jsonData.forEach((data: any) => {
        const individual = new Individual(data); // Создаем объект Individual
        individualsMap.set(individual.getId(), individual); // Добавляем его в Map
    });

    // Проверка корректности маппинга
    console.log("Individuals Map:");
    individualsMap.forEach((individual: Individual) => {
        console.log(`Individual ${individual.getId()}:`);
        individual.printInfo(); // Используем метод printInfo для вывода данных
    });

    // Классификация индивидуумов
    const classifier = new Classifier();

    // Массивы для персонажей по вселенным
    const starWarsCharacters = [];
    const marvelCharacters = [];
    const hitchhikerCharacters = [];
    const lotrCharacters = [];

    // Классификация и группировка индивидуумов по вселенным
    individualsMap.forEach((individual: Individual) => {
        const classification = classifier.classify(individual); // Классифицируем индивидуум
        if (classification) {
            const characterData = {
                id: individual.getId(),
                universe: classification.universe,
                character: classification.character,
                // Добавляем все характеристики индивидума
                isHumanoid: individual.getIsHumanoid(),
                planet: individual.getPlanet(),
                age: individual.getAge(),
                traits: individual.getTraits() || [] // Включаем traits, если они есть
            };

            // Добавляем персонажа в соответствующий массив
            switch (classification.universe) {
                case Universe.STAR_WARS:
                    starWarsCharacters.push(characterData);
                    break;
                case Universe.MARVEL:
                    marvelCharacters.push(characterData);
                    break;
                case Universe.HITCHHIKER:
                    hitchhikerCharacters.push(characterData);
                    break;
                case Universe.LORD_OF_THE_RINGS:
                    lotrCharacters.push(characterData);
                    break;
            }
        }
    });

    // Путь к директории для записи
    const outputDir = '../output/';

    // Создание директории, если она не существует
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Запись результатов в отдельные JSON-файлы
    fs.writeFileSync(path.join(outputDir, 'star_wars.json'), JSON.stringify({ characters: starWarsCharacters }, null, 2));
    fs.writeFileSync(path.join(outputDir, 'marvel.json'), JSON.stringify({ characters: marvelCharacters }, null, 2));
    fs.writeFileSync(path.join(outputDir, 'hitchhiker.json'), JSON.stringify({ characters: hitchhikerCharacters }, null, 2));
    fs.writeFileSync(path.join(outputDir, 'lotr.json'), JSON.stringify({ characters: lotrCharacters }, null, 2));

    console.log(`Results have been written to ${outputDir}`);
}

main();
