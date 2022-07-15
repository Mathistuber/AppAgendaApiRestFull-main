import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import {visualizarTodosContatos} from './ContatoModel';


export default function Home({navigation}) {
  
 const [dadosContatos, setDadosContatos] = useState([]);
 
  
  useEffect(async ()=> {
    const resp = await visualizarTodosContatos();
    setDadosContatos(resp);
  }, []);



  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Contatos</Text>

      <TouchableOpacity styles={estilo.botaoCadastrar} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={estilo.botaoTextoCadastrar}>Cadastrar Contatos</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <FlatList
        data={dadosContatos}
        keyExtrator={dadosContatos => dadosContatos.id}
        renderItem= {({item})=>
            <View style={estilo.container}>
            <Text style={estilo.botaoTextoDados}>{item.id}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Nome}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Fone}</Text>
            <Text style={estilo.botaoTextoDados}>{item.Email}</Text>
            </View>
          
        
        }
      />


    </View>

  );
}
    

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 40,

  },
  botaoCadastrar:{
    backgroundColor: 'black',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  botaoTextoCadastrar:{
    backgroundColor:'#F4A460',
    fontSize: 30,
    borderRadius: 10

  },
  botaoDados:{
    backgroundColor: '#000000',
    margin: 20,
    padding: 10,
    borderRadius: 10,
  },
  botaoTextoDados:{
    fontSize: 20,
  }
});
