import React, { useState } from 'react';
import { StatusBar, StyleSheet, Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './NewGame.js';
import Location from './Location.js';
import StartScreen from './StartScreen.js';
import Game from './Game.js';
import  ServerScreen  from './ServerScreen';


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


export default function App() {

  const Stack = createNativeStackNavigator();
  const NewGameStack = createNativeStackNavigator();
  const GameStack = createNativeStackNavigator();





  const GameStackScreen = () => {
    return (
      <GameStack.Navigator>
        <GameStack.Screen name="Main" component={Game} />
        
      </GameStack.Navigator>
    )
  }

  const NewGameScreen = () => {

    return (
      <NewGameStack.Navigator
        screenOptions={{headerShown:false}}
      >
        <NewGameStack.Screen
          name="SignUp" component={SignUp}/>
        <NewGameStack.Screen
          name="Location" component={Location} />

      </NewGameStack.Navigator>
    )

  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown:false}}
      >
        <Stack.Screen
          name="Start" component={StartScreen} />
        <Stack.Screen
          name="NewGame" component={NewGameScreen} />
        <Stack.Screen 
          name="Game" component={GameStackScreen} />
        <Stack.Screen 
          name="Server" component={ServerScreen} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flex: 1,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  button: {
    flexBasis: "40%",
    margin: 10
  },
  main: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  textHeader: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffbc03"
  },
  textBody: {
    fontSize: 25,
    color: "white"
  },

});


export const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
