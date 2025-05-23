// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    // <HomeScreen />
    <NavigationContainer>
         <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
         </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
