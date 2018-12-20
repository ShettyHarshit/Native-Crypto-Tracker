import React from 'react';
import { View, Text } from 'react-native';
import { Header, CryptoContainer } from './src/components/';
import Store from './src/Store';
import { Provider } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Text>Harshit Shetty</Text>
          <Header />
          <CryptoContainer />
        </View>
      </Provider>
    );
  }
}