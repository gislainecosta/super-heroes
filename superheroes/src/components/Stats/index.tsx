import { useState, createRef } from 'react';
import { Radar } from 'react-chartjs-2';
import * as St from './styles';
import { Hero, Powerstats } from '../../modules/types';
import { ChartData, ChartOptions } from './ChartConfig';

const Stats = () => {
  const chartRef = createRef();

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