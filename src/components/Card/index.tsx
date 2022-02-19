import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Details from '../Details';

export default function Card({data}) {
const [modalVisible, setModalVisible] = useState(false)
  return (


    <View style={styles.container}>
      <Text style={styles.textMain}>{`ID: ${data.id}`}</Text>
      <Text style={styles.textMain}>{`Login: ${data.login}`}</Text>
      <TouchableOpacity style={styles.btns}>
        <Text style={styles.Textbtns}
        onPress={()=>{setModalVisible(true)}}
        >View More</Text>
      </TouchableOpacity>


      <Modal visible={modalVisible} animationType='slide' transparent={true}>
          <View style={styles.viewModal}>
            <Details data={data} voltar={() => setModalVisible(false)}/>
          
          </View>    
      </Modal>

       
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    marginTop:10,    
    alignItems:'center'
  },
  textMain:{
    color: '#fff',
    padding: 8,
    textAlign:'center',
    fontSize:18
  },
  btns:{
    
    backgroundColor: '#8579f1',
    padding: 6,
    borderRadius: 10,
    marginBottom: 6,
    alignItems: 'center'
  },
  Textbtns:{
    color:'#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewModal:{
    backgroundColor:'#74f0d5', 
    flex:1, 
    alignItems:'center', 
    marginTop: 100,
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  }
 
});
