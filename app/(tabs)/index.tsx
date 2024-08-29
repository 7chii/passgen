/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState , Component} from 'react';
import type {PropsWithChildren} from 'react';
import Slider from '@react-native-community/slider';
import { ModalPassword } from '../../components/modal';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image, Modal
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

const logo = {
  uri: '/home/nana/Documents/progmob/dir/CustomApp/images/lock.png',
  width: 200,
  height: 200,
};

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

const App = ()=>{
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  function gerarSenha(){
    let password = "";
    for(let i = 0, n = charset.length; i<size;i++){
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPasswordValue(password);
    setModalVisible(true);
  }
  return(
   <View style={styles.container}>
      <Image source={require("./images/lock.png")}></Image>
      <Text style={styles.title}>{size.toFixed(0)} caracteres</Text>
      <View style={styles.area}>
          <Slider style={{height:50}} 
          minimumValue={6} 
          maximumValue={20} 
          maximumTrackTintColor='#ff0000' 
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={(value) => setSize(value)}
          />
      </View>
      <TouchableOpacity style={styles.button} onPress={()=>gerarSenha()}>
        <Text style={{color:"#FFF",fontSize:20}}>Gerar Senha!</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
      <ModalPassword password={passwordValue} handleClose={()=> setModalVisible(false)} />
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    marginBottom:80,
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000'
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor: "#392de9",
    width:"80%",
    height:50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
  }
})

export default App;
