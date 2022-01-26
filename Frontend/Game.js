import React,{useState,useEffect} from 'react';
import { View, Text} from 'react-native';
import { NativeBaseProvider, Center,Button} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './App';

export default function Game({navigation,route}) {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");



    useEffect(() => {
      setName(route.params.newUser.Name);
      setWeather(route.params.newUser.Weather);
      setLocation("Park");
        
      });
  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <View style={[styles.container]}>
            <FontAwesome5 name={"camera"} size={100} color={"black"} />
            <Text>Game Screen</Text>
            <Text>Welcome {name}</Text>
            <Text>It is currently {weather}</Text>
          </View>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}
