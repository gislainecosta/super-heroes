import { Hero, Powerstats } from './../../modules/types';

const hero: Hero = {
  id: "64",
  name: "Batgirl",
  powerstats: {
    intelligence: "100",
    strength: "27",
    speed: "80",
    durability: "40",
    power: "20",
    combat: "60",
  },
  biography: {
    "full-name": "Mary Elizabeth Kane",
    "alter-egos": "Hawkfire",
    aliases: ["Bette Kane", "Bat-Girl"],
    "place-of-birth": "-",
    "first-appearance": "Batman #139",
    publisher: "Hawkfire",
    alignment: "good",
  },
  appearance: {
    gender: "Female",
    race: "null",
    height: ["-", "0 cm"],
    weight: ["- lb", "0 kg"],
    "eye-color": "-",
    "hair-color": "-",
  },
  image: "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg",
};

let heroStats: Powerstats = hero.powerstats;

export const ChartData = {
  labels: [
    "Poder",
    "Combate",
    "Resistência",
    "Inteligência",
    "Velocidade",
    "Força",
  ],
  datasets: [
    {
      display: false,
      backgroundColor: "#7e42af9d",
      borderColor: "#7e42af",
      pointBackgroundColor: "#7e42af",
      poingBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "#7e42af",
      data: [
        heroStats.power,
        heroStats.combat,
        heroStats.durability,
        heroStats.intelligence,
        heroStats.speed,
        heroStats.strength,
      ],
    },
  ],
};
export const ChartOptions = {
  scale: {
    ticks: {
      display: false,
      min: 0,
      max: 100,
      stepSize: 20,
      showLabelBackdrop: false,
      backdropColor: "rgba(203, 197, 11, 1)",
    },
    angleLines: {
      color: "#0000004d",
      lineWidth: 1,
    },
    gridLines: {
      color: "#0000004d",
      circular: true,
    },
  },
  legend: {
    display: false,
  },
};
