import React, { useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, View } from 'react-native';
import Card from '../../components/Card';
import Header from '../../components/Header';
import api from '../../services/api';

export default function AllUsers() {
    const [visible, setVisible] = useState(false)
    const [users, setUsers] = useState([])

useEffect(()=>{
    api.get('usuarios').then((response)=>{
        setUsers(response.data)
        console.log(response.data)
    }).catch((error)=>{
        console.log(error)
    })
},[])

  return (
    
    <View style={styles.container}>
      <Header/>
      <FlatList data={users} renderItem={ ({item}) => <Card data={item}/> } />   
    
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
 
});
