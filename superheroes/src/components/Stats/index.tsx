import { Radar } from 'react-chartjs-2';
import * as St from './styles';
import { Powerstats } from './../../modules/types';

const Stats = (props:any) => {
  let heroStats: Powerstats = props.dataHero;

  const ChartData = {
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
  }
  
  const ChartOptions = {
    scale: {
      ticks: {
        display: false,
        min: 0,
        max: 100,
        stepSize: 20,
        showLabelBackdrop: false,
      },
      angleLines: {
        color: "#0000008b",
        lineWidth: 1,
      },
      gridLines: {
        color: "#00000095",
        circular: true,
      },
    },
    legend: {
      display: false,
    },
  };

  console.log("PROPS DA STAT", props.dataHero)
  return (
    <St.StatsContainer>
      <Radar
        data={ChartData}
        options={ChartOptions}
        height={250}
        width={400}
      />
    </St.StatsContainer>
  );
}

export default Stats