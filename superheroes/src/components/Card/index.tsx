import { MouseEventHandler } from 'react';
import { CardProps } from '../../modules/types';
import * as St from './styles';

interface Props extends CardProps {
  open: MouseEventHandler;
}

const Card = (props: Props) => {
  return (
    <St.Card>
        <St.CardImage src={props.image} />
        <St.HeroName>{props.name}</St.HeroName>
        <St.HeroDetail>{props.alignment}</St.HeroDetail>
        <St.HeroDetail>{props.publisher}</St.HeroDetail>
        <St.CardButton onClick={props.open}>Ver mais</St.CardButton>
    </St.Card>
  );
}

export default Card