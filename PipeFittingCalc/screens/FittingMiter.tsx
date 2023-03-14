import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { Button } from 'react-native';
import { TrigCalculations } from '../constants/TrigCalculations';
import React from 'react';


export default function CustomMiter() {
  const [numDia, SetPipeDia] = useState('');
  const [numTheta, SetTheta] = useState('');
  const [numTkOff, SetTkOff] = useState('');
  const [numIT, SetIT] = useState('');
  const [numOT, SetOT] = useState('');

  function calculate() {
    
    let result = TrigCalculations.ComputeMiter(parseFloat(numDia), parseFloat(numTheta), true, false);
    SetTkOff(result.TakeOff.toString());
    SetIT(result.InnerThroatLength.toString());
    SetOT(result.OuterThroatLength.toString());
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Text style={styles.title}>Custom Miter fitting</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.normText}>Select a radius type:</Text>

        <Text style={styles.normText}>Enter Pipe Diameter:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Pipe Diameter"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numDia}
          onChangeText={text => SetPipeDia(text)}
        />
        <Text style={styles.normText}>Desired Angle:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Angle"
          keyboardType='numeric' 
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={text => SetTheta(text)}
          value={numTheta}
        />
        <Text style={styles.normText}>Fitting Take-off:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Take-off"
          keyboardType='numeric' 
          onSubmitEditing={Keyboard.dismiss}
          editable={false}
          value={numTkOff}
        />
        <Text style={styles.normText}>Inner throat length:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Take-off"
          keyboardType='numeric' 
          onSubmitEditing={Keyboard.dismiss}
          editable={false}
          value={numIT}
        />
        <Text style={styles.normText}>Outer Throat Length:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Take-off"
          keyboardType='numeric' 
          onSubmitEditing={Keyboard.dismiss}
          editable={false}
          value={numOT}
        />
        <Button
          title="Calculate Take-off"
          onPress={calculate}         
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
    backgroundColor:'#eee'
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
    backgroundColor:'#fff',
    padding:5,
    margin:10,
    borderRadius:10
  },
  normText: {
    fontSize:14
  },
  button: {
    backgroundColor:'#ddd'
  }
});
