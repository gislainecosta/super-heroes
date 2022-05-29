import { HeroBiography, Powerstats, Appearance } from './interfaces'

class Hero {
  constructor(
    private id: string,
    private name: string,
    private biography: HeroBiography,
    private powerstats: Powerstats,
    private appearance: Appearance,
    private image: string
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getBiography(): HeroBiography {
    return this.biography;
  }

  getPowerstats(): Powerstats {
    return this.powerstats;
  }

  getAppearance(): Appearance {
    return this.appearance;
  }

  getImage(): string {
    return this.image;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setBiography(biography: HeroBiography) {
    this.biography = biography;
  }

  setPowerstats(powerstats: Powerstats) {
    this.powerstats = powerstats;
  }

  setAppearance(appearance: Appearance) {
    this.appearance = appearance;
  }

  setImage(image: string) {
    this.image = image;
  }
}



export default Hero