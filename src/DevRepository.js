import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';  

import { Provider } from "react-redux"
import { AppRouter } from "./routers/AppRouter"
import { store } from "./store/store"

export const DevRepository = () => {
    return (
        <Provider store={store}>
            <ApolloProvider client={client}>
                <AppRouter />
            </ApolloProvider>
        </Provider>
    )
}
