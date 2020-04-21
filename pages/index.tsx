import * as React from 'react';
import DefaultLayout from '../layouts';
import _ from 'lodash';
import { GetWeatherQuery } from '../graphql/__generated__';
import fetch from 'isomorphic-unfetch';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

type IndexProps = {

}

const Index: React.SFC<IndexProps> = (props) => {
    const { } = props;

    const [weather, setWeather] = React.useState<GetWeatherQuery | undefined>(undefined);

    React.useEffect(() => {

        const getWeather = async () => {
            const response = await fetch('/api/get-weather');
            const json = await response.json();
            setWeather(json);
        }

        getWeather();
    }, []);

    return (
        <>
            <DefaultLayout>
                {!!weather && (
                    <>
                        {/* <pre>{JSON.stringify(weather, null, 2)}</pre> */}
                        <LineChart width={400} height={400} data={weather.me?.home?.weather?.entries?.map(e => e!)}>
                            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                            <XAxis dataKey="time" />
                            <YAxis />
                        </LineChart>
                    </>
                )}
            </DefaultLayout>
        </>
    );
}

export default Index;