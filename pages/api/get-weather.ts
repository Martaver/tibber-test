import {NextApiRequest, NextApiResponse} from 'next';

import {
  GetWeatherDocument,
  GetWeatherQuery,
  GetWeatherQueryVariables,
} from '../../graphql/__generated__';
import {getClient} from '../../graphql/getClient';

/**
 * An API endpoint that uses our apollo graphql client to obtain the weather from
 * Tibber's graphql endpoint.
 *
 * @param req The incoming request, wrapped as a NextApiRequest helper object.
 * @param res The outgoing response, wrapped as a NextApiResponse helper object.
 */
export const GetWeather = async (req: NextApiRequest, res: NextApiResponse) => {
  const client = await getClient();

  /**
   * Use our generated queries and types to run a GetWeather query.
   */
  const response = await client.query<
    GetWeatherQuery,
    GetWeatherQueryVariables
  >({
    query: GetWeatherDocument,
  });

  res.status(200).json(response.data);
};

export default GetWeather;
