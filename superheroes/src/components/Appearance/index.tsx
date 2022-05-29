import * as St from './styles';
import { Appearance as ApparenceInterface } from '../../modules/types';
import IconWeight from '../../images/weight.png';
import IconEye from '../../images/eye.png';
import IconGender from '../../images/gender.png';
import IconHair from '../../images/hair.png';
import IconHeight from '../../images/height.png';
import IconRace from '../../images/race.png';

const Appearance = (props:any) => {
  const heroApparance: ApparenceInterface = props.dataHero
  
  return (
    <St.AppearanceContainer>
      <St.Detail>
        <St.Icon src={IconGender} alt="Gênero" />
        <St.Text>{heroApparance.gender}</St.Text>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconRace} alt="Raça" />
        <St.Text>{heroApparance.race}</St.Text>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconHeight} alt="Altura" />
        <St.Text>{heroApparance.height[1]}</St.Text>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconWeight} alt="Peso" />
        <St.Text>{heroApparance.weight[1]}</St.Text>
      </St.Detail>
      
      <St.Detail>
        <St.Icon src={IconEye} alt="Cor dos olhos" />
        <St.Text>{heroApparance['eye-color']}</St.Text>
      </St.Detail>

      <St.Detail>
        <St.Icon src={IconHair} alt="Cor do cabelo" />
        <St.Text>{heroApparance['hair-color']}</St.Text>
      </St.Detail>
    </St.AppearanceContainer>
  );
}

export default Appearance