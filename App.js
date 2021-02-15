//Imports
import React, {Component} from 'react';
import StackNavigation from './src/navigation/stack_navigation';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

const store = configureStore();
let persistor = persistStore(store);

//Main Class
export default class App extends Component {
  componentDidMount() {}

  render() {
    return (
      // <Provider store={store}>
      //   <StackNavigation />
      // </Provider>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
