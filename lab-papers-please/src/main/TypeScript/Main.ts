import { FileReader } from './FileReader.js';
import { Individual } from './Individual.js';

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
}

main();