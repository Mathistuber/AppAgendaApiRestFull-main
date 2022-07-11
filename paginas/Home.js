import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity, Alert } from 'react-native';
import {visualizarContatos} from './ContatoModel';
import { FlatList } from 'react-native-web';

export default function Home() {
const [dadosContatos, setDadosContatos] = useState([]);
 
async function buscarContatos() {

  const resultado = await visualizarTodosContatos(id);
  if(resultado){
    setDadosContatos(resultado);
  }else{
    Alert.alert('Sem contatos');
    setDadosContatos('');
  }
}

useEffect(async ()=>{
  const rest = await buscarContatos();
  setDadosContatos(resp);
},[])
  return (
    <View style={styles.container}>
      <Text>Contatos</Text>

      <TouchableOpacity styles={estilo.botaoCadastrar}>
        <text style={estilo.botaoTextoCadastrar}>Cadastrar Contatos</text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <FlatList
      data={}
      keyExtrator={dadosContatos => dadosContatos.id}
      renderItem={({item})=>
  <TouchableOpacity style={estilo.botaoDados} >
    <Text style={estilo.botaoTextoDados}>{item.id}</Text>
    <Text style={estilo.botaoTextoDados}>{item.nome}</Text>
    <Text style={estilo.botaoTextoDados}>{item.fone}</Text>
    <Text style={estilo.botaoTextoDados}>{item.email}</Text>
  </TouchableOpacity>
  }
  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCadastrar:{
    backgroundColor: '#2a9d8f',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  botaoTextoCadastrar:{
    fontSize: 30
  },
  botaoDados:{
    backgroundColor: '#2a9d8f',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  botaoTextoDados:{
    fontSize: 30

  }
});
