import { useState } from 'react';
import Appearance from '../Appearance';
import Biography from '../Biography';
import Stats from '../Stats';
import * as St from './styles';

const Modal = (props:any) => {
  const [tabActive, setTabActive] = useState<string>('bio')
  console.log(props.hero)
  const hero = props.hero

  let contentTab

  switch (tabActive) {
    case 'appearance':
      contentTab = <Appearance dataHero={hero.appearance}/>
      break;
    case 'bio':
      contentTab = <Biography dataHero={hero.biography}/>
      break;
    default:
      contentTab = <Stats dataHero={hero.powerstats}/>
  }

  return (
    <St.ModalContainer>
      <St.Modal>
        <St.ModalHeader>
          <St.Image src={hero.image} alt=""/>
          <St.Button onClick={props.close}>X</St.Button>
          <St.HeroName>{hero.name}</St.HeroName>
        </St.ModalHeader>
        
        
        <St.ModalContent>
          <St.TabsController>
            <St.TabText onClick={() => setTabActive('stat')}>Estatísticas</St.TabText>
            <St.TabText onClick={() => setTabActive('bio')}>Biografia</St.TabText>
            <St.TabText onClick={() => setTabActive('appearance')}>Aparência</St.TabText>
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