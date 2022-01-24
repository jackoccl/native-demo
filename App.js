import React,{useState}from 'react';
import { StatusBar,StyleSheet,Dimensions,LogBox,View,Text} from 'react-native';
import { NativeBaseProvider, Box, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './HomeScreen.js';
import Location  from './Location.js';
import Game from './Game.js';
const Stack = createNativeStackNavigator();


LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);


function StartScreen({navigation}){
  return(
    <NativeBaseProvider>        
      <View
       style={{ flex: 1,height:"100%", alignItems: 'center', justifyContent: 'center' }}
      >

          <Box
            h="100%"
            w="100%"
            bg="#121212"
            style={[styles.main]}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
          >
            <Text style={styles.textHeader}>LOGO</Text>
            <FontAwesome5 name={"camera"} size={100} color={"#ffbc03"} />
            <Button 
              m={2}
              w={150}
              bg="warning.400"
              isDisabled={false}
              onPress={()=>navigation.navigate('Home')}
            >New Game</Button>
            <Button  
              m={2} 
              w={150}
              isDisabled={true}>High Score</Button>
            <Button  
              m={2} 
              w={150}
              isDisabled={true}>Profile</Button>
              <Button  
              m={2} 
              w={150}
              isDisabled={true}>Sign Up</Button>

          </Box>
      </View>

    </NativeBaseProvider>
  )
}


export default function App(){
  const [name,setName] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");

  const state = {
    Name:name,
    Weather:weather
  }

  return(
    <NavigationContainer>
    <Stack.Navigator
      screenOption={{headerShow:false}}
    >
      <Stack.Screen 
       options= {{headerShown:false}} name="Start" component={StartScreen}/>
      <Stack.Screen 
       options= {{headerShown:false}} name="Home" component={HomeScreen} initialParams={{setName,setWeather}} /> 
      <Stack.Screen options= {{headerShown:false}} name="Location" component={Location} /> 
      <Stack.Screen state={name} options= {{headerShown:false}} name="Game" component={Game} initialParams={{state}} /> 
    </Stack.Navigator>
  </NavigationContainer>

  )
}
export const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  buttonContainer:{
    flex:1,
    marginTop:50,
    flexDirection:"row",
    justifyContent:"center",
    flexWrap:"wrap",
  },
  button:{
    flexBasis:"40%",
    margin:10
  },


  main:{
    flex:1,
    padding:20,
    alignItems: 'center',
    width: "100%",
    height: "100%"
    },
  textHeader:{
    fontSize:60,
    fontWeight: "bold",
    color:"#ffbc03"
  },
  textBody:{
    fontSize:25,
    color:"white"
  },

});


export const config = {
  dependencies: {
    'linear-gradient': require('react-native-linear-gradient').default,
  },
};
