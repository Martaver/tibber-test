import React from 'react';

import {motion} from 'framer-motion';
import {Line, TickFormatterFunction, XAxis, YAxis} from 'recharts';

import {GetWeatherQuery} from '../graphql/__generated__';
import {axis, line} from '../styles/palette';
import {StyledLineChart} from './StyledLineChart';

type TemperatureChartProps = {
  height: number;
  weather: GetWeatherQuery;
  width: number;
};

/**
 * A LineChart component that plots temperature data from a GetWeatherQuery response.
 * It fades in on component mount.
 */
export const TemperatureChart: React.FC<TemperatureChartProps> = ({
  height,
  weather,
  width,
}) => {
  const formatTimeOfDay: TickFormatterFunction = (dateValue: string) => {
    const date = new Date(dateValue);
    const hh = date.getHours().toString().padStart(2, '0');
    const mm = date.getMinutes().toString().padStart(2, '0');
    return `${hh}:${mm}`;
  };

  const formatCelcius: TickFormatterFunction = (temperatureValue: string) => {
    return `${temperatureValue} C`;
  };

  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}}>
      <StyledLineChart
        {...{width, height}}
        data={weather.me?.home?.weather?.entries?.map(e => e!)}
      >
        <Line dataKey="temperature" dot={false} stroke={line} type="natural" />
        <XAxis
          dataKey="time"
          minTickGap={width / 5}
          stroke={axis}
          tickFormatter={formatTimeOfDay}
        />
        <YAxis
          axisLine={false}
          stroke={axis}
          tickFormatter={formatCelcius}
          tickMargin={width + 10}
          tickSize={-width}
        />
      </StyledLineChart>
    </motion.div>
  );
};
