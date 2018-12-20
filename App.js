import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './src/components/';
import Store from './src/Store';
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <View>
          <Header />
        </View>
      </Provider>
    );
  }
}