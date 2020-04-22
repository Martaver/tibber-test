import axios from 'axios';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';

/**
 * Returns a new, authenticated apollo graphql client.
 */
export const getClient = async () => {

    /**
     * First, obtain a bearer token using the dummy account provided.
     */
    const response = await axios.post<{
        token: string;
    }>('https://app.tibber.com/v4/login.credentials', {
        email: "demo@tibber.com",
        password: "Electric"
    });

    /**
     * Create an apollo http link.
     */
    const httpLink = createHttpLink({
        uri: 'https://app.tibber.com/v4/gql',
        fetch: fetch as any,
    });

    /**
     * Set the authorization header on the client.
     */
    const authLink = setContext((_, { headers }) => ({
        headers: {
            ...headers,
            authorization: `Bearer ${response.data.token}`,
        }
    }));

    /**
     * Create and return the authorized client.
     */
    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });

    return client;
};
