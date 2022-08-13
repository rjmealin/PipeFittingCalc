import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { TrigCalculations } from '../constants/TrigCalculations';


export default function RiggingCalc() {
  const [numDia, SetPipeDia] = useState('');
  const [numLen, SetLength] = useState('');
  const [numWeight, SetWeight] = useState('');

  function calculate() {
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Text style={styles.title}>Rigging Calculator</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  Input: {
    height: 40,
    width: '40%',
  },
  normText: {
    fontSize:14
  },
});