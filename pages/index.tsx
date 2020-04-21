import * as React from 'react';
import DefaultLayout from '../layouts';
import _ from 'lodash';
import { GetWeatherQuery } from '../graphql/__generated__';
import fetch from 'isomorphic-unfetch';

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
    }, [])

    return (
        <>
            <DefaultLayout>
                <pre>{JSON.stringify(weather, null, 2)}</pre>
            </DefaultLayout>
        </>
    );
}

export default Index;