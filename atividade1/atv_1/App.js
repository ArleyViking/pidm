import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Aluno } from './Aluno';



export default function App() {
  return (
    <Aluno></Aluno>
  );
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
