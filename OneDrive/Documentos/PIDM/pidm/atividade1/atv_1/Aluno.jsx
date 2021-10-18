import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Aluno(){
    return (
        <View style={styles.conteudo}>
      <Text style={styles.nome}>
        Arley Gomes
      </Text>
      <Text style={styles.outro_texto, styles.nome_2}>
        Design Digital
      </Text>
      <Text style={styles.outro_texto}>
        Paraipaba - CE
      </Text>
      <Text style={styles.outro_texto}>
        20 anos
      </Text>
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#292929',
    },
    nome: {
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '10px',
      color: 'white',
      letterSpacing: '1.2px',
    },
    nome_2: {
      marginTop: '3px',
      fontSize: '18px',
      color: 'white',
      marginBottom: '3px',
      
    },
    outro_texto: {
      color: '#c1c1c1',
      marginTop: '3px',
      fontSize: '18px',
    } 
  });