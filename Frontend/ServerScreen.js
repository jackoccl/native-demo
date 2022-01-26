import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {NativeBaseProvider, Center,Button} from 'native-base'
import {Text,View} from 'react-native'

export default function ServerScreen({ navigation }) {
  const ip = "192.168.1.95";
  const port = 3000;
  const fetchApi = async () =>{
      const res = await axios.get("http://"+ip+":"+port+"/").catch(setData("Api Down"));
      setData(res.data)
  }

  const [data,setData] = useState("");

  useEffect(()=>{
    fetchApi();
  },[])


  return (
      <NativeBaseProvider>
          <Text>{data}</Text>
      </NativeBaseProvider>
  );
}
