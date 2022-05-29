import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import { Hero } from '../../modules/types';
import * as St from './styles';

const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [loadingIsOpen, setLoadingIsOpen] = useState<boolean>(false);
	const [heroes, setHeroes] = useState<Hero[]>([]);
	const [isSearch, setIsSearch] = useState<boolean>(false);
	const [heroName, setHeroName] = useState<string>('')
	const [heroDetail, setHeroDetail] = useState<object>([]);

	useEffect(() => {
		const isLogged = window.localStorage.getItem('isLogged')

		!isLogged && navigate('/')
	}, [])

	useEffect(() => {
		!isSearch && getHeroes()
	}, [isSearch])

	const getHeroes = async () => {
		setLoadingIsOpen(true)
		
		const maxNumbers = 8;
		let idList = []
		const heroesList:any = []
		
		for (let i = 0; i < maxNumbers; i++) {
			const numberId = Math.floor(Math.random() * (244 - 1 + 1)) + 1;
			idList.push(numberId)
		}

		for (let i = 0; i < idList.length; i++) {
			try {
				const response = await axios.post(`https://superheroapi.com/api/5496152487075803/${idList[i]}`);

				const heroData = {
					id: response.data.id,
					name: response.data.name,
					biography: response.data.biography,
					powerstats: response.data.powerstats,
					appearance: response.data.appearance,
					image: response.data.image.url
				}
				heroesList.push(heroData)

			} catch (e) {
				console.log(e)
			}
		}

		setHeroes(heroesList)
		setLoadingIsOpen(false)
	}

	const searchHeroes = async (work:string) => {
		setIsSearch(true)
		const heroesList: any = []
		setLoadingIsOpen(true)
		
		
		try {
			const response = await axios.post(`https://superheroapi.com/api/5496152487075803/search/${work}`);
			
			const heroesData = response.data.results

			for (let i = 0; i < heroesData.length; i++) {
				
				const heroData = {
					id: heroesData[i].id,
					name: heroesData[i].name,
					biography: heroesData[i].biography,
					powerstats: heroesData[i].powerstats,
					appearance: heroesData[i].appearance,
					image: heroesData[i].image.url
				}
				heroesList.push(heroData)
			}
			
			
			setHeroes(heroesList)
		} catch (e) {
			console.log(e)
		}

		setLoadingIsOpen(false)
	}

	const handleChange = (e:any) => {
		setHeroName(e.target.value)
	};

	const openModal = (id:string) => {
		const hero = heroes.filter(hero => hero.id === id)
		setHeroDetail(hero[0])
		setModalIsOpen(true)
	}

  const listCards = heroes.map((hero: any) => {
    return <Card
      key={hero.id}
      image={hero.image}
      name={hero.name}
      alignment={hero.biography.alignment === 'good' ? 'Herói' : 'Vilão'}
      publisher={hero.biography.publisher}
			open={() => openModal(hero.id) }
    />
  })

  return (
    <St.HomeContainer>
			<St.HomeContent>
				<Search search={() => searchHeroes(heroName)} change={handleChange} />
				<St.CardsContainer>
					{ listCards }       
				</St.CardsContainer>
			</St.HomeContent>

			{modalIsOpen && <Modal hero={heroDetail} close={() => setModalIsOpen(false)} />}
			{loadingIsOpen && <Loading />}
		</St.HomeContainer>
  );
}

export default Home