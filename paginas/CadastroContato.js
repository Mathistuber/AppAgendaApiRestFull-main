import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { visualizarTodosContatos } from './ContatoModel';


export default function CadastrarContato({navigation}) {

    return (
        <View style={estilo.container}>
            <TextInput style={estilo.campoTexto}
                placeholder='Digite o Nome do Contato'
            />

            <TextInput style={estilo.campoTexto}
                placeholder='Digite o Fone do Contato'
            />

            <TextInput style={estilo.campoTexto}
                placeholder='Digite o E-mail do Contato'
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
        backgroundColor:"#D2691E",

    },
    campoTexto:{
        flex:0,
        backgroundColor:"#F5DEB3",
        borderRadius: 10,
    },
    botao:{
        backgroundColor:"#F4A460",
        borderRadius: 10,
    },
    textBotao:{
        fontSize:30
    }

});