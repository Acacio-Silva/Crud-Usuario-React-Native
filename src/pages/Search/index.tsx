import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import api from '../../services/api';

interface User {
id:string
nome: string,
login: string,
senha: string
}

export default function Search() {

  const [data, setData] = useState<User>()
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

async function findById(){
  await api.get(`usuarios/${id}`).then((response) =>{
    setData(response.data);
    setName(response.data.nome);
    setEmail(response.data.login);
    setPassword(response.data.senha)
    console.log(response.data);
  }).catch((error)=>{
    alert(error+' : Usuario não encotrado')
  })
}

async function deleteById() {
  await api.delete(`usuarios/${id}`).then((response)=>{
    alert('Usuario deletado com sucesso')
  }).catch((error)=>{
    alert('falha ao deletar usuario')
  })
}

async function handleUpdateByid(){
  const user = {
    id:id,
    login: email,
    nome: name,
    senha: password
  }
  await api.put(`usuarios/${id}`, user).then((response)=>{
    console.log(response.data)
  }).catch((error)=>{
    console.log(error)
  })
}

  return (
      <>
      <View style={styles.containerSearch}>
      <TextInput
      style={styles.inputs}
      placeholder='Digite o Id do usuario'
      onChangeText={(text)=>setId(text)}
      keyboardType='numeric'
      />
      <TouchableOpacity style={styles.btns}
      onPress={findById}
      >
        <Text style={styles.Textbtns}>Search</Text>
      </TouchableOpacity>
      </View>

      {data &&
      <SafeAreaView style={styles.container}>    
      
      <Text style={styles.textMain}>User</Text>
      
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu nome'
      onChangeText={(text)=>setName(text)}
      value={name}
      />
      <TextInput
      style={styles.inputs}
      placeholder='Digite seu email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      />
      <TextInput
      style={styles.inputs}
      placeholder='Digite sua senha'
      onChangeText={(text)=>setPassword(text)}
      value={password}
      />

      <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity style={[styles.btns, {width:'40%', marginRight:10, backgroundColor:'#ee5b5b'}]}
      onPress={deleteById}
      >
        <Text style={styles.Textbtns}>Delete</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btns, {width:'40%', marginLeft:10, backgroundColor: '#34ca59'}]}
      onPress={handleUpdateByid}
      >
        <Text style={styles.Textbtns}>Update</Text>
      </TouchableOpacity>
      </View>

    </SafeAreaView>
    
      }
    </>   
  ); 
}

const styles = StyleSheet.create({
  containerSearch:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:20    
  },
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
