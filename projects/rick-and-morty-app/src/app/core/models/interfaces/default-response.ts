import { InfoCharacter } from "./info-character";
import { Character } from "./character";

export interface DefaultResponse {
    info: InfoCharacter;
    results: Character[];
}