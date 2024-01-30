import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerTabs from './src/Routes/DrawerTabs';
import rootReducer from './src/slices';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
const store = configureStore({reducer: rootReducer, devTools: true});

// const App = () => {
//   return (
//     <NavigationContainer>
//       <DrawerTabs />
//     </NavigationContainer>
//   );
// };
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
