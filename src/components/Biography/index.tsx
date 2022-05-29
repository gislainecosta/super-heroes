import { HeroBiography } from '../../models/interfaces';
import * as St from './styles';

const Biography = (props:any) => {
  const heroBio: HeroBiography = props.dataHero
  
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