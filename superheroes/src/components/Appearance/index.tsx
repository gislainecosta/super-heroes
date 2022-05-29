import * as St from './styles';
import { Hero, Appearance as ApparenceInterface } from '../../modules/types';
import IconWeight from '../../images/weight.png';
import IconEye from '../../images/eye.png';
import IconGender from '../../images/gender.png';
import IconHair from '../../images/hair.png';
import IconHeight from '../../images/height.png';
import IconRace from '../../images/race.png';

const Appearance = () => {
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
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "980 lb",
          "441 kg"
        ],
        "eye-color": "Yellow",
        "hair-color": "No Hair"
    },
    image: "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg",
  };

  let heroApparance:ApparenceInterface = hero.appearance;
  
  return (
    <St.AppearanceContainer>
      <St.Detail>
        <St.Icon src={IconGender} alt="Gênero" />
        <p>{heroApparance.gender}</p>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconRace} alt="Raça" />
        <p>{heroApparance.race}</p>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconHeight} alt="Altura" />
        <p>{heroApparance.height[1]}</p>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconWeight} alt="Peso" />
        <p>{heroApparance.weight[1]}</p>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconEye} alt="Cor dos olhos" />
        <p>{heroApparance['eye-color']}</p>
      </St.Detail>

      <St.Detail>
        <St.Icon src={IconHair} alt="Cor do cabelo" />
        <p>{heroApparance['hair-color']}</p>
      </St.Detail>
    </St.AppearanceContainer>
  );
}

export default Appearance