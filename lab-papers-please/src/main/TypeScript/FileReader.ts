import * as fs from 'fs';
import * as path from 'path';

export class FileReader {
    private filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath; // Используем относительный путь напрямую
    }

    public readFile(): void {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            console.log("File Content:", fileContent);
        } catch (error) {
            console.error("Error reading file:", error);
        }
    }

    public parseJson(): any {
        try {
            const fileContent = fs.readFileSync(this.filePath, 'utf-8');
            return JSON.parse(fileContent);
        } catch (error) {
            console.error("Error parsing JSON:", error);
            return null;
        }
    }
}