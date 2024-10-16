import { FileReader } from './FileReader.js';

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
}

main();