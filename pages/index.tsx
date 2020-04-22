import React from 'react';
import { DefaultLayout } from '../layouts/DefaultLayout';
import { GetWeatherQuery } from '../graphql/__generated__';
import fetch from 'isomorphic-unfetch';
import ReactResizeDetector from 'react-resize-detector';
import { Title } from '../components/Title';
import { Loading } from '../components/Loading';
import { TemperatureChart } from '../components/TemperatureChart';
import { vars } from '../styles/vars';

const Index: React.FC = () => {

    const { chart: { scale } } = vars;

    const [weather, setWeather] = React.useState<GetWeatherQuery | undefined>(undefined);

    /**
     * Load the most recent weather data from our API and store it in
     * the component's state. This will run whenever the component mounts.
     */
    React.useEffect(() => {

        const getWeather = async () => {
            const response = await fetch('/api/get-weather');
            const json = await response.json();
            setWeather(json);
        }

        getWeather();
    }, []);

    return (
        <DefaultLayout>
            <Title>TODAY'S TEMPERATURE</Title>

            {!!weather && (
                /**
                 * Wrap the line chart in a resize detector so we can 
                 * respond to changes in frame dimensions.
                 */
                <ReactResizeDetector handleHeight handleWidth>
                    {(dimensions: { width: number, height: number }) => {

                        /**
                         * Calculate the width and height from the scaling factors provided.
                         */
                        const width = dimensions.width * scale.width;
                        const height = dimensions.height * scale.height;

                        return <TemperatureChart {...{ width, height, weather }} />
                    }}
                </ReactResizeDetector>
            )}

            {/* When weather data is not available, display animated loader. */}
            <Loading isLoading={!weather} />
        </DefaultLayout>
    );
}

export default Index;