import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: process.env.REACT_APP_API_URL_GIT,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const code = process.env.REACT_APP_TOKEN;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: code ? `Bearer ${code}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;