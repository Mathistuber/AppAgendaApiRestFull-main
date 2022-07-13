import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';


export default function CadastrarContato({navigation}) {

    return (
        <View style={estilo.container}>
            <TextInput style={estilo.container}
                placeholder='Digite o código do Contato'
            />

            <TextInput style={estilo.container}
                placeholder='Digite o código do Contato'
            />

            <TextInput style={estilo.container}
                placeholder='Digite o código do Contato'
            />

            <TouchableOpacity style={estilo.botao}>
                <Text style={estilo.textBotao}>Salvar o Cotato</Text>
            </TouchableOpacity>

        </View>
    );

}

const estilo = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#6A5ACD"

    },
    campoTexto:{
        backgroundColor:"#f5355",
    },
    botao:{
        backgroundColor:"#000080",
    },
    textBotao:{
        fontSize:30
    }

});