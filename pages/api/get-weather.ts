import { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../graphql/getClient";
import { GetWeatherQuery, GetWeatherQueryVariables, GetWeatherDocument } from "../../graphql/__generated__";

export const GetWeather = async (req: NextApiRequest, res: NextApiResponse) => {
    const client = await getClient();
    const response = await client.query<GetWeatherQuery, GetWeatherQueryVariables>({
        query: GetWeatherDocument,
    })
    res.status(200).json(response.data);
};

export default GetWeather;
