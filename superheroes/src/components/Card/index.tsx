import { CardProps } from '../../modules/types';
import * as St from './styles';

const Card = (props: CardProps) => {
  return (
    <St.Card>
        <St.CardImage src={props.image} />
        <St.HeroName>{props.name}</St.HeroName>
        <St.HeroDetail>{props.alignment}</St.HeroDetail>
        <St.HeroDetail>{props.publisher}</St.HeroDetail>
        <St.CardButton>Ver mais</St.CardButton>
    </St.Card>
  );
}

export default Card