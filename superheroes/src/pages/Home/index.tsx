import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import { HeroDTO } from '../../models/interfaces';
import Hero from '../../models/classes';
import * as St from './styles';

const Home = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
	const [loadingIsOpen, setLoadingIsOpen] = useState<boolean>(false);
	const [heroes, setHeroes] = useState<HeroDTO[]>([]);
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
				const heroesData = response.data
				
				heroesList.push(new Hero(
					heroesData.id,
					heroesData.name,
					heroesData.biography,
					heroesData.powerstats,
					heroesData.appearance,
					heroesData.image.url
				))

			} catch (e) {
				console.log(e)
			}
		}
		
		setHeroes([])
		setHeroes(heroesList)
		setLoadingIsOpen(false)
	}

	const onKeyFunction = (e:any) => {
		if (e.key === "Enter") {
			e.preventDefault();
			searchHeroes(heroName)
		}
	}

	const searchHeroes = async (work:string) => {
		setIsSearch(true)
		const heroesList: any = []
		setLoadingIsOpen(true)
		
		try {
			const response = await axios.post(`https://superheroapi.com/api/5496152487075803/search/${work}`);
			
			const heroesData = response.data.results

			console.log("DADOS DO BACK DE HERÓIS", heroesData)
			
			for (let i = 0; i < heroesData.length; i++) {
				heroesList.push(new Hero(
					heroesData[i].id,
					heroesData[i].name,
					heroesData[i].biography,
					heroesData[i].powerstats,
					heroesData[i].appearance,
					heroesData[i].image.url
				))
			}

			setHeroes([])
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
				<Search pressEnter={onKeyFunction} search={() => searchHeroes(heroName)} change={handleChange} />
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