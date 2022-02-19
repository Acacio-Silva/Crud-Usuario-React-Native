import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>Crud Users</Text>
      <TouchableOpacity style={styles.btns}
      onPress={()=>{navigation.navigate('User')}}
      >
        <Text style={styles.Textbtns}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns}
      onPress={()=>{navigation.navigate('AllUsers')}}
      >
        <Text style={styles.Textbtns}>Find All Users</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btns}
      onPress={()=>{navigation.navigate('Search')}}
      >
        <Text style={styles.Textbtns}>Find By Id</Text>
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
  }


});
