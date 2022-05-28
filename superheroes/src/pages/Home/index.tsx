import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search';
import * as St from './styles';

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isLogged = window.localStorage.getItem('isLogged')
   
    !isLogged && navigate('/')
  }, [])

  return (
    <St.HomeContainer>
      <Search />
    </St.HomeContainer>
  );
}

export default Home