export interface LoginForm {
  email: string;
  password: string;
}

export interface HeroBiography {
  "full-name": string;
  "alter-egos": string;
  aliases: Array<string>;
  "place-of-birth": string;
  "first-appearance": string;
  publisher: string;
  alignment: string;
}

export interface Powerstats {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
}

export interface Appearance {
  gender: string;
  race: string;
  height: Array<string>;
  weight: Array<string>;
  "eye-color": string;
  "hair-color": string;
}

export interface Hero {
  id: string;
  name: string;
  biography: HeroBiography;
  powerstats: Powerstats;
  appearance: Appearance;
  image: string;
}

export interface CardProps {
  key: string;
  name: string;
  alignment: string;
  publisher: string;
  image: string;
}