import React from 'react';
import { View, Text } from 'react-native';
import { NativeBaseProvider, Box, Button } from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { styles } from './App';

export default function StartScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <View
        style={{ flex: 1, height: "100%", alignItems: 'center', justifyContent: 'center' }}
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
            onPress={() => navigation.navigate('NewGame',{screen:"SignUp"})}
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
  );
}
