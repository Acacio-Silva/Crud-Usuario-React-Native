import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';

export default function User() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

async function saveUser(){
  const data = {
    nome : name,
    login: email,
    senha: password
  }
console.log(data)
  await api.post('usuarios', data)
  alert('usuario salvo com sucesso')
  
}

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>New User</Text>
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu nome'
      onChangeText={(text)=>setName(text)}
      />
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu email'
      onChangeText={(text)=>setEmail(text)}
      />
      <TextInput
      style={styles.inputs}
      placeholder='Digite sua senha'
      onChangeText={(text)=>setPassword(text)}
      />

      <TouchableOpacity style={styles.btns} onPress={saveUser}>
        <Text style={styles.Textbtns}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textMain:{
    fontSize:20,
    marginBottom: 15
  },
  btns:{
    width: '90%',
    backgroundColor: '#3e2af3',
    padding: 8,
    borderRadius: 10,
    marginBottom: 6,
    alignItems: 'center'
  },
  Textbtns:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  inputs:{
      width: '90%',
      borderColor:'#f89603',
      borderRadius:7,
      borderWidth: 1,
      padding: 6,
      marginBottom: 10,
      textAlign: 'center'
  }


});
