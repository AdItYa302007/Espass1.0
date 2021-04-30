import React from 'react';import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
//import { AppTabNavigator } from './components/AppTabNavigator'

export default function App() {
  return (
    <AppContainer/>
  );
}

const Navigator =createSwitchNavigator({
    
    SignUp:{screen:SignUpScreen},
    Login:{screen:LoginScreen}
})

const AppContainer=createAppContainer(Navigator)