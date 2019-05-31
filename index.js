/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import client from './apolloClient'
import React from 'react'
import {name as appName} from './app.json';
import { ApolloProvider } from "react-apollo";


const AppWrapper = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );

AppRegistry.registerComponent(appName, () => AppWrapper);
