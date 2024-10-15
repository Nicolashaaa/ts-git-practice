"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// Функция для чтения файла JSON
function readInputFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent);
}
// Функция для вывода списка вселенных
function printUniverse(index, universe) {
    console.log(`${index + 1}: ${universe.name}`);
}
// Функция для записи вселенной в файл
function universeToFileOutput(universe) {
    const filePath = `output/${universe.name}.json`;
    fs.writeFileSync(filePath, JSON.stringify(universe, null, 2));
}
// Главная функция
function main() {
    // Чтение входных данных
    const input = readInputFile('src/main/resources/test-input.json');
    const data = input.data;
    // Создание списка вселенных
    const universes = [
        { name: 'starWars', individuals: [] },
        { name: 'hitchHiker', individuals: [] },
        { name: 'rings', individuals: [] },
        { name: 'marvel', individuals: [] }
    ];
    // Вывод списка вселенных
    universes.forEach((universe, index) => printUniverse(index, universe));
    // Классификация данных по вселенным
    data.forEach((node) => {
        console.log(node);
        const userInput = prompt("Введите номер вселенной (1-4): ");
        switch (userInput) {
            case '1':
                universes[0].individuals.push(node);
                break;
            case '2':
                universes[1].individuals.push(node);
                break;
            case '3':
                universes[2].individuals.push(node);
                break;
            case '4':
                universes[3].individuals.push(node);
                break;
            default:
                console.log("Неверный ввод, пропуск.");
        }
    });
    // Запись данных по вселенным в файлы
    universes.forEach(universe => universeToFileOutput(universe));
    console.log("Классификация завершена. Файлы записаны в папку output.");
}
// Вызов главной функции
main();
