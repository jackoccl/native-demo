import React,{useState,useEffect} from 'react';
import { View, Text} from 'react-native';
import { NativeBaseProvider, Center } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './App';

export default function Game({route}) {

    useEffect(() => {
        // Update the document title using the browser API
        console.log()

        
      });
  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <View style={[styles.container]}>
            <FontAwesome5 name={"camera"} size={100} color={"black"} />
            <Text>Game Screen</Text>
            <Text>Welcome {route.params.state.Name}</Text>
            <Text>It is currently {route.params.state.Weather}</Text>
          </View>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}
