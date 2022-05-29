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
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(true);
	const [loadingIsOpen, setLoadingIsOpen] = useState<boolean>(false);
	
  const heroes = useState<Hero[]>([
    {
      "id": "1",
      "name": "A-Bomb",
      "powerstats": {
        "intelligence": "38",
        "strength": "100",
        "speed": "17",
        "durability": "80",
        "power": "24",
        "combat": "64"
      },
      "biography": {
        "full-name": "Richard Milhouse Jones",
        "alter-egos": "No alter egos found.",
        "aliases": [
          "Rick Jones"
        ],
        "place-of-birth": "Scarsdale, Arizona",
        "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        "publisher": "Marvel Comics",
        "alignment": "good"
      },
      "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
          "6'8",
          "203 cm"
        ],
        "weight": [
          "980 lb",
          "441 kg"
        ],
        "eye-color": "Yellow",
        "hair-color": "No Hair"
      },
      "image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10060.jpg"
    },
    {
			"id": "63",
			"name": "Batgirl",
			"powerstats": {
				"intelligence": "88",
				"strength": "11",
				"speed": "33",
				"durability": "40",
				"power": "34",
				"combat": "90"
			},
			"biography": {
				"full-name": "Barbara Gordon",
				"alter-egos": "Oracle",
				"aliases": [
					"Oracle",
					"Bluebelle"
				],
				"place-of-birth": "-",
				"first-appearance": "Detective Comics #359",
				"publisher": "Oracle",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Female",
				"race": "Human",
				"height": [
					"5'7",
					"170 cm"
				],
				"weight": [
					"126 lb",
					"57 kg"
				],
				"eye-color": "Green",
				"hair-color": "Red"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1111.jpg"
		},
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
		},
		{
			"id": "65",
			"name": "Batgirl III",
			"powerstats": {
				"intelligence": "null",
				"strength": "43",
				"speed": "null",
				"durability": "null",
				"power": "null",
				"combat": "null"
			},
			"biography": {
				"full-name": "Helena Rosa Bertinelli",
				"alter-egos": "Huntress",
				"aliases": [
					"-"
				],
				"place-of-birth": "-",
				"first-appearance": "-",
				"publisher": "Huntress",
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
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1112.jpg"
		},
		{
			"id": "66",
			"name": "Batgirl IV",
			"powerstats": {
				"intelligence": "69",
				"strength": "12",
				"speed": "27",
				"durability": "56",
				"power": "46",
				"combat": "100"
			},
			"biography": {
				"full-name": "Cassandra Cain",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"Kasumi",
					"various mundane persona,"
				],
				"place-of-birth": "League of Assassins (exact base is unknown)",
				"first-appearance": "Batman: Legends of the Dark Knight #120",
				"publisher": "DC Comics",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Female",
				"race": "Human",
				"height": [
					"5'5",
					"165 cm"
				],
				"weight": [
					"115 lb",
					"52 kg"
				],
				"eye-color": "Green",
				"hair-color": "Black"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1113.jpg"
		},
		{
			"id": "67",
			"name": "Batgirl V",
			"powerstats": {
				"intelligence": "null",
				"strength": "null",
				"speed": "null",
				"durability": "null",
				"power": "null",
				"combat": "null"
			},
			"biography": {
				"full-name": "Charlotte Gage-Radcliffe",
				"alter-egos": "Misfit",
				"aliases": [
					"-"
				],
				"place-of-birth": "-",
				"first-appearance": "-",
				"publisher": "Misfit",
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
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1115.jpg"
		},
		{
			"id": "68",
			"name": "Batgirl VI",
			"powerstats": {
				"intelligence": "75",
				"strength": "10",
				"speed": "23",
				"durability": "28",
				"power": "22",
				"combat": "80"
			},
			"biography": {
				"full-name": "Stephanie Brown",
				"alter-egos": "Spoiler",
				"aliases": [
					"Steph",
					"Robin",
					"Marion Todd",
					"Spoiler"
				],
				"place-of-birth": "-",
				"first-appearance": "Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)",
				"publisher": "Spoiler",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Female",
				"race": "null",
				"height": [
					"5'6",
					"168 cm"
				],
				"weight": [
					"135 lb",
					"61 kg"
				],
				"eye-color": "Blue",
				"hair-color": "Blond"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1398.jpg"
		},
		{
			"id": "69",
			"name": "Batman",
			"powerstats": {
				"intelligence": "81",
				"strength": "40",
				"speed": "29",
				"durability": "55",
				"power": "63",
				"combat": "90"
			},
			"biography": {
				"full-name": "Terry McGinnis",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"Batman II",
					"The Tomorrow Knight",
					"The second Dark Knight",
					"The Dark Knight of Tomorrow",
					"Batman Beyond"
				],
				"place-of-birth": "Gotham City, 25th Century",
				"first-appearance": "Batman Beyond #1",
				"publisher": "DC Comics",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Male",
				"race": "Human",
				"height": [
					"5'10",
					"178 cm"
				],
				"weight": [
					"170 lb",
					"77 kg"
				],
				"eye-color": "Blue",
				"hair-color": "Black"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10441.jpg"
		},
		{
			"id": "70",
			"name": "Batman",
			"powerstats": {
				"intelligence": "100",
				"strength": "26",
				"speed": "27",
				"durability": "50",
				"power": "47",
				"combat": "100"
			},
			"biography": {
				"full-name": "Bruce Wayne",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"Insider",
					"Matches Malone"
				],
				"place-of-birth": "Crest Hill, Bristol Township; Gotham County",
				"first-appearance": "Detective Comics #27",
				"publisher": "DC Comics",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Male",
				"race": "Human",
				"height": [
					"6'2",
					"188 cm"
				],
				"weight": [
					"210 lb",
					"95 kg"
				],
				"eye-color": "blue",
				"hair-color": "black"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/639.jpg"
		},
		{
			"id": "71",
			"name": "Batman II",
			"powerstats": {
				"intelligence": "88",
				"strength": "11",
				"speed": "33",
				"durability": "28",
				"power": "36",
				"combat": "100"
			},
			"biography": {
				"full-name": "Dick Grayson",
				"alter-egos": "Nightwing, Robin",
				"aliases": [
					"Dick Grayson"
				],
				"place-of-birth": "-",
				"first-appearance": "-",
				"publisher": "Nightwing",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Male",
				"race": "Human",
				"height": [
					"5'10",
					"178 cm"
				],
				"weight": [
					"175 lb",
					"79 kg"
				],
				"eye-color": "Blue",
				"hair-color": "Black"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1496.jpg"
		},
		{
			"id": "72",
			"name": "Battlestar",
			"powerstats": {
				"intelligence": "50",
				"strength": "53",
				"speed": "35",
				"durability": "74",
				"power": "48",
				"combat": "74"
			},
			"biography": {
				"full-name": "Lemar Hoskins",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"Bucky"
				],
				"place-of-birth": "Chicago, Illinois",
				"first-appearance": "Captain America #323 (1986); (as Bucky)",
				"publisher": "Marvel Comics",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Male",
				"race": "null",
				"height": [
					"6'6",
					"198 cm"
				],
				"weight": [
					"295 lb",
					"133 kg"
				],
				"eye-color": "Brown",
				"hair-color": "Black"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/231.jpg"
		},
		{
			"id": "73",
			"name": "Batwoman V",
			"powerstats": {
				"intelligence": "81",
				"strength": "8",
				"speed": "29",
				"durability": "25",
				"power": "27",
				"combat": "80"
			},
			"biography": {
				"full-name": "Katherine Rebecca Kane",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"-"
				],
				"place-of-birth": "-",
				"first-appearance": "52 #7 (June, 2006)",
				"publisher": "DC Comics",
				"alignment": "good"
			},
			"appearance": {
				"gender": "Female",
				"race": "Human",
				"height": [
					"5'10",
					"178 cm"
				],
				"weight": [
					"- lb",
					"0 kg"
				],
				"eye-color": "Green",
				"hair-color": "Red"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/10234.jpg"
		},
		{
			"id": "427",
			"name": "Man-Bat",
			"powerstats": {
				"intelligence": "38",
				"strength": "18",
				"speed": "50",
				"durability": "70",
				"power": "33",
				"combat": "30"
			},
			"biography": {
				"full-name": "Robert Kirkland Langstrom",
				"alter-egos": "No alter egos found.",
				"aliases": [
					"Kirk Langstrom"
				],
				"place-of-birth": "Chicago, Illinois",
				"first-appearance": "Detective Comics #400 (June, 1970)",
				"publisher": "DC Comics",
				"alignment": "neutral"
			},
			"appearance": {
				"gender": "Male",
				"race": "Human",
				"height": [
					"-",
					"0 cm"
				],
				"weight": [
					"- lb",
					"0 kg"
				],
				"eye-color": "Brown",
				"hair-color": "Brown"
			},
			"image": "https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/731.jpg"
		}
  ])

  useEffect(() => {
    const isLogged = window.localStorage.getItem('isLogged')

    !isLogged && navigate('/')
  }, [])


  const listCards = heroes[0].map((hero: any) => {
    return <Card
      key={hero.id}
      image={hero.image}
      name={hero.name}
      alignment={hero.biography.alignment === 'good' ? 'Herói' : 'Vilão'}
      publisher={hero.biography.publisher}
    />
  })

  return (
    <St.HomeContainer>
			<St.HomeContent>
				<Search />
				<St.CardsContainer>
					{ listCards }       
				</St.CardsContainer>
			</St.HomeContent>

			{modalIsOpen && <Modal />}
			{loadingIsOpen && <Loading />}
		</St.HomeContainer>
  );
}

export default Home