import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { TrigCalculations } from '../constants/TrigCalculations';
import { GeometricCalc } from '../constants/GeometricCalc';


export default function PipeWeight() {
  const [numDia, SetPipeDia] = useState('');
  const [numLen, SetLength] = useState('');
  const [numWeight, SetWeight] = useState('');
  const [ numWT, SetWT] = useState('');

  function calculate() {
    
    let model = GeometricCalc.CalculatePipeWeight(parseFloat(numLen),parseFloat(numDia), parseFloat(numWT))

    SetWeight(model.PipeWeight.toString())

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Text style={styles.title}>Pipe Weights</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.normText}>Enter Pipe Diameter:</Text>
        <TextInput
          style = {styles.Input}
          //value = {number}
          placeholder = "Pipe Diameter"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numDia}
          onChangeText={text => SetPipeDia(text)}
        />
        <Text style={styles.normText}>Enter Pipe Length:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Pipe Lenght"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numLen}
          onChangeText={text => SetLength(text)} 
        />
        <Text style={styles.normText}>Enter Pipe Length:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Wall Thickness"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numWT}
          onChangeText={text => SetWT(text)} 
        />
        <Text style={styles.normText}>Total Pipe Weight:</Text>
        <TextInput
          style = {styles.Input}
          editable={false}
          value={numWeight}
          onChangeText={text => SetWeight(text)} 
        />
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
