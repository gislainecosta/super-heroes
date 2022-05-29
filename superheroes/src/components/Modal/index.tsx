import { useState } from 'react';
import { Hero } from '../../modules/types';
import Appearance from '../Appearance';
import Biography from '../Biography';
import Stats from '../Stats';
import * as St from './styles';

const Modal = () => {
  const [tabActive, setTabActive] = useState<string>('appearance')
  const hero = useState<Hero>(
    {
      "id": "64",
      "name": "Batgirl",
      "powerstats": {
        "intelligence": "null",
        "strength": "27",
        "speed": "null",
        "durability": "null",
        "power": "null",
        "combat": "null"
      },
      "biography": {
        "full-name": "Mary Elizabeth Kane",
        "alter-egos": "Hawkfire",
        "aliases": [
          "Bette Kane",
          "Bat-Girl"
        ],
        "place-of-birth": "-",
        "first-appearance": "Batman #139",
        "publisher": "Hawkfire",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Female",
        "race": "null",
        "height": [
          "-",
          "0 cm"
        ],
        "weight": [
          "- lb",
          "0 kg"
        ],
        "eye-color": "-",
        "hair-color": "-"
      },
      "image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/638.jpg"
    }
  )

  let contentTab

  switch (tabActive) {
    case 'appearance':
      contentTab = <Appearance />
      break;
    case 'bio':
      contentTab = <Biography />
      break;
    default:
      contentTab = <Stats />
  }

  return (
    <St.ModalContainer>
      <St.Modal>
        <St.ModalHeader>
          <St.Image src={hero[0].image} alt=""/>
          <St.Button>X</St.Button>
          <St.HeroName>{hero[0].name}</St.HeroName>
        </St.ModalHeader>
        
        
        <St.ModalContent>
          <St.TabsController>
            <p>Estatísticas</p>
            <p>Biografia</p>
            <p>Aparência</p>
          </St.TabsController>

          <St.TabsContent>
            { contentTab }
          </St.TabsContent>
        </St.ModalContent>
      </St.Modal>
    </St.ModalContainer>
  );
}

export default Modal