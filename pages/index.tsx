import * as React from 'react';
import DefaultLayout from '../layouts';
import { GetWeatherQuery } from '../graphql/__generated__';
import fetch from 'isomorphic-unfetch';
import { LineChart, Line, XAxis, YAxis, TickFormatterFunction } from 'recharts';
import styled from 'styled-components';
import { white } from '../styles/palette';
import chroma from 'chroma-js';
import ReactResizeDetector from 'react-resize-detector';

const base = chroma(white);
const line = base.alpha(0.65).css();
const axis = base.alpha(0.35).css();
const tick = base.css();
const title = base.alpha(0.75).css();

const StyledLineChart = styled(LineChart)`

    text {
        font-family: 'Lato';
        font-size: 0.65em;
        tspan {
            stroke: ${tick};
            stroke-width: 0.02em;
        }
    }

    margin-left: -2em;
`;

const Title = styled.span`
    font-family: 'Lato';
    font-weight: 500;
    font-size: 0.65em;
    color: ${title};
    margin-bottom: 5em;    
`;

type IndexProps = {

}

const Index: React.SFC<IndexProps> = (props) => {
    const { } = props;

    const [weather, setWeather] = React.useState<GetWeatherQuery | undefined>(undefined);
    const [dimensions, setDimensions] = React.useState({ width: 400, height: 400 });

    React.useEffect(() => {

        const getWeather = async () => {
            const response = await fetch('/api/get-weather');
            const json = await response.json();
            setWeather(json);
        }

        getWeather();
    }, []);

    const formatTimeOfDay: TickFormatterFunction = (dateValue: string) => {

        const date = new Date(dateValue);
        const hh = date.getHours().toString().padStart(2, '0');
        const mm = date.getMinutes().toString().padStart(2, '0');
        return `${hh}:${mm}`;
    }

    const formatCelcius: TickFormatterFunction = (temperatureValue: string) => {
        return `${temperatureValue} C`;
    }

    const width = dimensions.width * 0.9;
    const height = dimensions.height * 0.66;

    return (
        <>
            <ReactResizeDetector handleHeight={true} handleWidth={true} onResize={(width, height) => setDimensions({ width, height })} />
            <DefaultLayout>
                <Title>TODAY'S TEMPERATURE</Title>
                {!!weather && (
                    <StyledLineChart {...{ width, height }} data={weather.me?.home?.weather?.entries?.map(e => e!)}>
                        <Line type="natural" dataKey="temperature" stroke={line} dot={false} />
                        <XAxis dataKey="time" stroke={axis} tickFormatter={formatTimeOfDay} minTickGap={width / 5} />
                        <YAxis stroke={axis} tickFormatter={formatCelcius} axisLine={false} tickSize={-width} tickMargin={width + 10} />
                    </StyledLineChart>
                )}
            </DefaultLayout>
        </>
    );
}

export default Index;