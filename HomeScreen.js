import React,{useState,useEffect} from 'react';
import { View, Text, KeyboardAvoidingView, Keyboard} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import { NativeBaseProvider, Box, Button,Input} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { config, styles } from './App';



export default function HomeScreen({ navigation,route }) {


  const handleChange = (event) => {
    console.log(route);
    route.params.setName(event);
  }
  return (
    <NativeBaseProvider config={config}>
      <View
            style={{ flex: 1,height:"100%", alignItems: 'center', justifyContent: 'center' }}>

        <Box
          style={styles.main}
          bg={{ linearGradient: { colors: ['info.600', 'blue.800'], start: [0, 0], end: [0, 1] } }}
          _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
        >

          <Text style={styles.textHeader}>LOGO</Text>
          <Text style={styles.textBody}>Select an icon that matches the current weather...</Text>
          <View p={"10"} h={"100%"} style={[styles.buttonContainer]}>
           <Input w="100%" placeholder = "Child's Name" bg="white"
            onChangeText={handleChange}
           
           />
            <Button size={20} style={[styles.button]}
              onPress={() => { console.log("press"); }}
              borderRadius="full"
              onPressIn={()=>route.params.setWeather("Cloudy")}
            >
              <FontAwesome5 name={"cloud"} size={60} color={"white"} />
            </Button>
            <Button size={20} style={[styles.button]}
            borderRadius="full"
            onPressIn={()=>route.params.setWeather("Sunny")}
            >
              <FontAwesome5 name={"sun"} size={75} color={"white"} />
            </Button>

            <Button size={20} style={[styles.button]}borderRadius="full"
            onPressIn={()=>route.params.setWeather("Snowing")}
            >
              <FontAwesome5 name={"snowflake"} size={60} color={"white"} />
            </Button>
            <Button size={20} style={[styles.button]} borderRadius="full"
            onPressIn={()=>route.params.setWeather("Raining")}
            >
              <FontAwesome5 name={"cloud-rain"} size={60} color={"white"} />
            </Button>

            <Button size={20} style={[styles.button]} borderRadius="full"
            onPressIn={()=>route.params.setWeather("Drizzling")}
            >
              <FontAwesome5 name={"cloud-sun-rain"} size={75} color={"white"} />
            </Button>

            <Button size={20} style={[styles.button]}borderRadius="full"
            onPressIn={()=>route.params.setWeather("Rainbow")}
            >
              <FontAwesome5 name={"rainbow"} size={60} color={"white"} />
            </Button>


            
          </View>
          <Button size="lg"
                bg="coolGray.200"
                _text="coolGray.800"
                w="90%"

                onPress={() => navigation.navigate('Location')}
                >
                Next
          </Button>

        </Box>

      </View>

    </NativeBaseProvider>

  );
}
