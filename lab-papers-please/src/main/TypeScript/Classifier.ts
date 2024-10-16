// Classifier.ts
import { Individual } from './Individual';

export enum Universe {
    STAR_WARS = "Star Wars",
    HITCHHIKER = "Hitchhiker's Guide to the Galaxy",
    LORD_OF_THE_RINGS = "Lord of the Rings",
    MARVEL = "Marvel"
}

export enum CharacterName {
    Wookie = "Wookie",
    Ewok = "Ewok",
    Asgardian = "Asgardian",
    Betelgeusian = "Betelgeusian",
    Vogon = "Vogon",
    Elf = "Elf",
    Dwarf = "Dwarf"
}

export interface Classification {
    universe: Universe;
    character: CharacterName;
}

export class Classifier {
    public classify(individual: Individual):  Classification | null {

        // Классификации для Star Wars (Wookie)
        if (
            individual.getPlanet() === "Kashyyyk" || 
            (!individual.getIsHumanoid() && (individual.getTraits()?.includes("TALL") || (individual.getAge() >= 201 && individual.getAge() <= 400) )) ||
            ((individual.getAge() >= 201 && individual.getAge() <= 400) && individual.getTraits()?.includes("HAIRY"))
        ) {
        return { universe: Universe.STAR_WARS, character: CharacterName.Wookie };

        }
        // Классификации для Star Wars (Ewok)
        if (
            individual.getPlanet() === "Endor" || 
            (!individual.getIsHumanoid() && individual.getTraits()?.includes("SHORT")) ||
            individual.getTraits()?.includes("HAIRY")
        ) {
        return { universe: Universe.STAR_WARS, character: CharacterName.Ewok };

        }

        // Классификации для Marvel (Asgardian)
        if (
            individual.getPlanet() === "Asgard" || 
            (individual.getIsHumanoid() && individual.getTraits()?.includes("TALL")) ||
            ((individual.getAge() >= 0 && individual.getAge() <= 5000) && individual.getTraits()?.includes("BLONDE"))
        ) {
        return { universe: Universe.MARVEL, character: CharacterName.Asgardian };

        }

        // Классификации для Lord of the rings (Elf)
        if (
            individual.getTraits()?.includes("BLONDE") || 
            (individual.getPlanet() === "Earth" && (individual.getTraits()?.includes("POINTY_EARS") || individual.getAge() >= 201) )
        ) {
        return { universe: Universe.LORD_OF_THE_RINGS, character: CharacterName.Elf };

        }

         // Классификации для Lord of the rings (Dwarf)
         if (
            individual.getPlanet() === "Earth" || 
            individual.getTraits()?.includes("SHORT") ||
            (individual.getIsHumanoid() && individual.getTraits()?.includes("BULKY"))
            
        ) {
        return { universe: Universe.LORD_OF_THE_RINGS, character: CharacterName.Dwarf };

        }

        // Классификации для Hitchhiker (Betelgeusian)
        if (
            individual.getPlanet() === "Betelgeuse" || 
            individual.getTraits()?.includes("EXTRA_ARMS") ||
            individual.getTraits()?.includes("EXTRA_HEAD")
            
        ) {
        return { universe: Universe.HITCHHIKER, character: CharacterName.Betelgeusian };

        }

        // Классификации для Hitchhiker (Vogons)
        if (
            individual.getPlanet() === "Vogsphere" || 
            individual.getTraits()?.includes("GREEN") ||
            individual.getTraits()?.includes("BULKY")
            
        ) {
        return { universe: Universe.HITCHHIKER, character: CharacterName.Vogon };

        }







        // Добавьте другие условия для классификации в Hitchhiker, Lord of the Rings и Marvel
        // Если не подходит ни под одно из условий
        return null;
    }
}
