import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as St from './styles';

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = window.localStorage.getItem('isLogged')
   
    !isLogged && navigate('/')
  }, [])

  return (
    <St.HomeContainer>
      <St.SearchSection>
        <St.SearchTitle>Pesquise um Super-herói ou um vilão</St.SearchTitle>
        <St.SearchInput
          placeholder='Insira um nome'
          type='text'
        />
      </St.SearchSection>
    </St.HomeContainer>
  );
}

export default Home