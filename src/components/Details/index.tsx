import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Details(props:any) {

  return (
      <View>
        <TouchableOpacity onPress={props.voltar} style={styles.btns}>
            <Text style={styles.Textbtns}>FECHAR</Text>
        </TouchableOpacity>
        <Text style={styles.textModal}>{`ID - ${props.data.id}`}</Text>
        <Text style={styles.textModal}>{`Nome - ${props.data.nome}`}</Text>
        <Text style={styles.textModal}>{`Login - ${props.data.login}`}</Text>
        <Text style={styles.textModal}>{`Senha - ${props.data.senha}`}</Text>
      </View>
  )}

  const styles = StyleSheet.create({
    btns:{
        backgroundColor: '#8579f1',
        borderRadius: 10,
        marginBottom: 6,
        marginTop: 10,
        alignItems: 'center'
      },
      Textbtns:{
        color:'#fff',
        fontSize: 28,
        fontWeight: 'bold'
      },
      textModal:{
        fontSize:16,
        marginBottom:10
      }
  })