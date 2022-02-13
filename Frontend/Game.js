import React,{useState,useEffect} from 'react';
import { View, Text} from 'react-native';
import { NativeBaseProvider, Center,Button} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './App';
import Camera from './components/Camera.js'
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

export default function Game({navigation,route}) {
  const [name, setName] = useState("");
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState("");
  const [position,setPosition] = useState("")

    useEffect(() => {
      //setName(route.params.newUser.Name);
      //setWeather(route.params.newUser.Weather);
      setLocation("Park");

      Geolocation.getCurrentPosition(
        (position) => {
          setPosition(position);
          axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=c4f90c1e1f17c75649da1c5ed89f54c6&units=metric`).then(res=>{
            console.log(res.data.weather[0]);
            setWeather(res.data.weather[0].main)
          }).catch(err=>console.log(err))

        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

      
        
      },[]);

  return (
    <NativeBaseProvider>
      <Center>
        <View>
          <Camera />
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
