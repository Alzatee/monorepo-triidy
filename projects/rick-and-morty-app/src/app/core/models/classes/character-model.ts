import { Character } from "../interfaces/character";

export class CharacterModel implements Character {
    public id: number;
    public name: string;
    public image: string;
    public gender: string;
    public species: string;
    public status: string;
    public type: string;
    public url: string;
    public created: string;
    public episode: EpisodeModel[];
    public location: CharacterLocationModel;
    public origin: CharacterOriginModel;

    constructor(
        id: number = 0,
        name: string = '',
        image: string = '',
        gender: string = '',
        species: string = '',
        status: string = '',
        type: string = '',
        url: string = '',
        episode: EpisodeModel[] = [],
        created: string = '',
        location: CharacterLocationModel = new CharacterLocationModel(),
        origin: CharacterOriginModel = new CharacterOriginModel(),
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.gender = gender;
        this.species = species;
        this.status = status;
        this.type = type;
        this.url = url;
        this.created = created;
        this.episode = episode;
        this.location = location;
        this.origin = origin;
    }
}

export class CharacterLocationModel {
    public name: string = '';
    public url: string = '';
}

export class CharacterOriginModel {
    public name: string = '';
    public url: string = '';
}

export class EpisodeModel {
    public id: string = '';
    public name: string = '';
}