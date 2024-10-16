// Main.ts
import { FileReader } from './FileReader'; // Используем import

function main() {
    const filePath = 'src/main/resources/input.json';
    const fileReader = new FileReader(filePath);
    fileReader.readFile();
    const jsonData = fileReader.parseJson();
    if (jsonData) {
        console.log("Parsed JSON Data:", jsonData);
    }
}

main();
