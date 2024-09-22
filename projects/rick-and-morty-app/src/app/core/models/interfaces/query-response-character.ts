import { Character } from "./character";

export interface QueryResponseCharacter {
    data: CharacterData;
}

interface CharacterData {
    character: Character;
}