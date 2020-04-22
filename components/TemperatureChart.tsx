import React from 'react';
import { TickFormatterFunction, Line, XAxis, YAxis } from "recharts";
import { line, axis } from "../styles/palette";
import { GetWeatherQuery } from "../graphql/__generated__";
import { StyledLineChart } from './StyledLineChart';
import { motion } from 'framer-motion';

type TemperatureChartProps = {
    width: number;
    height: number;
    weather: GetWeatherQuery;
};

/**
 * A LineChart component that plots temperature data from a GetWeatherQuery response.
 * It fades in on component mount.
 */
export const TemperatureChart: React.FC<TemperatureChartProps> = ({ width, height, weather }) => {

    const formatTimeOfDay: TickFormatterFunction = (dateValue: string) => {

        const date = new Date(dateValue);
        const hh = date.getHours().toString().padStart(2, '0');
        const mm = date.getMinutes().toString().padStart(2, '0');
        return `${hh}:${mm}`;
    }

    const formatCelcius: TickFormatterFunction = (temperatureValue: string) => {
        return `${temperatureValue} C`;
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
            <StyledLineChart {...{ width, height }} data={weather.me?.home?.weather?.entries?.map(e => e!)}>
                <Line type="natural" dataKey="temperature" stroke={line} dot={false} />
                <XAxis dataKey="time" stroke={axis} tickFormatter={formatTimeOfDay} minTickGap={width / 5} />
                <YAxis stroke={axis} tickFormatter={formatCelcius} axisLine={false} tickSize={-width} tickMargin={width + 10} />
            </StyledLineChart>
        </motion.div>
    )
}