import axios from 'axios';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

export const getClient = async () => {

    const response = await axios.post<{
        token: string;
    }>('https://app.tibber.com/v4/login.credentials', {
        email: "demo@tibber.com",
        password: "Electric"
    });

    const httpLink = createHttpLink({
        uri: 'https://app.tibber.com/v4/gql',
        fetch: fetch as any,
    });

    const authLink = setContext((_, { headers }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${response.data.token}`,
        }
    }));

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    return client;
};
