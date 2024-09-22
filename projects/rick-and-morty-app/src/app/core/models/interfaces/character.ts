export interface Character {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
    status: string;
    type: string;
    url: string;
    created: string;
    episode: Episode[];
    location: CharacterLocation;
    origin: CharacterOrigin;
}

interface CharacterLocation {
    name: string;
    url: string;
}

interface CharacterOrigin {
    name: string;
    url: string;
}

interface Episode {
    id: string;
    name: string;
}