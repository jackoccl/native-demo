import * as React from 'react';
import { View, Text} from 'react-native';
import { CommonActions,StackActions } from '@react-navigation/native';
import { config, styles } from './App';
import { NativeBaseProvider, Box, Button } from 'native-base';

export default function Location({ navigation,route }) {
  
  const newUser= route.params.newUser
  
  return (
    <NativeBaseProvider config={config}>
    <View
      style={{ flex: 1 }}>

      <Box
        style={styles.main}
        bg={{ linearGradient: { colors: ['danger.500', 'warning.800'], start: [0, 0], end: [0, 1] } }}
        _text={{ fontSize: 'md', fontWeight: 'bold', color: 'white' }}
      >


        <Text style={styles.textHeader}>LOGO</Text>
        <Text style={styles.textBody}>Select a destination that best represents your surroundings</Text>

        <View style={[styles.buttonContainer]}>
            <Button margin="2" w="100" bg ="warning.100">Home</Button>
            <Button margin="2" w="100" bg ="warning.100">School</Button>
            <Button margin="2" w="100" bg ="warning.100">Beach</Button>
            <Button margin="2" w="100" bg ="warning.100">Park</Button>
            <Button margin="2" w="100" bg ="warning.100">Lake</Button>
        </View>


        <Button
         onPress={()=>console.log(route.params.newUser)}
        >t</Button>

        <Button size="lg"
          w="100%"
          bg="coolGray.200"
          _text="coolGray.800"
          onPress={()=>{navigation.dispatch(
            CommonActions.navigate("Game",{screen:"Main",params:{newUser}})
          )}}>
          Next
        </Button>


      </Box>

    </View>
  </NativeBaseProvider>)
}

