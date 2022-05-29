import { Radar } from 'react-chartjs-2';
import * as St from './styles';
import { ChartData, ChartOptions } from './ChartConfig';

const Stats = () => {
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