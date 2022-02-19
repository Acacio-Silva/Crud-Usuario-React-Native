import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {

  return (
    <View style={styles.container}>
      <Text style={styles.textMain}>List Of Users</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070707',
    width: '100%'
  },
  textMain:{
    color: '#fff',
    padding: 8,
    textAlign:'center',
    fontSize:18
  }
 
});
