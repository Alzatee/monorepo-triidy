import { Character } from "./character";
import { InfoCharacter } from "./info-character";

export interface QueryResponseCharacters {
  data: {
    characters: CharactersData;
  };
}

interface CharactersData {
    info: InfoCharacter;
    results: Character[];
}