import { StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Keyboard } from 'react-native';
import { useState, useEffect } from 'react';

export default function CustomMiter() {
  const [numDia, SetPipeDia] = useState('');
  const [numTheta, SetTheta] = useState('');
  const [numTravel, SetTravel] = useState('');
  const [numAngle, SetAngle] = useState('');


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Text style={styles.title}>Custom Miter fitting</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
