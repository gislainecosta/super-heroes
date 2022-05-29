import { Hero, HeroBiography } from '../../modules/types';
import * as St from './styles';

const Biography = () => {
  const hero: Hero = {
    id: "64",
    name: "Batgirl",
    powerstats: {
      intelligence: "100",
      strength: "27",
      speed: "80",
      durability: "40",
      power: "20",
      combat: "60",
    },
    biography: {
      "full-name": "Mary Elizabeth Kane",
      "alter-egos": "Hawkfire",
      aliases: ["Bette Kane", "Bat-Girl"],
      "place-of-birth": "-",
      "first-appearance": "Batman #139",
      publisher: "Hawkfire",
      alignment: "good",
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-",
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg",
  };

  let heroBio: HeroBiography = hero.biography;
  
  return (
    <St.BioContainer>
      <St.Text><b>{heroBio.alignment === 'good' ? 'Herói' : 'Vilão'}</b></St.Text>
      
      <St.Text><b>Nome Completo:</b> {heroBio['full-name']}</St.Text>
      
      <St.Text><b>Alter-Ego:</b> {heroBio['alter-egos']}</St.Text>
      
      <St.Text><b>Aliados:</b> {heroBio.aliases.join(', ')}</St.Text>
      
      <St.Text><b>Local de Nascimento:</b> {heroBio['place-of-birth']}</St.Text>
      
      <St.Text><b>Primeira Aparição:</b> {heroBio['first-appearance']}</St.Text>
      
      <St.Text><b>Editora:</b> {heroBio.publisher}</St.Text>
      
    </St.BioContainer>
  );
}

export default Biography