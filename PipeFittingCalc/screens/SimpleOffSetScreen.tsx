import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function SimpleOffSetScreen() {
    const [numRise, SetRise] = useState('');
    const [numRun, SetRun] = useState('');
    const [numTravel, SetTravel] = useState('');
    const [numAngle, SetAngle] = useState('');

    function calculate() {
      let rise:number = parseFloat(numRise);
      let run:number = parseFloat(numRun);
      let theta:number = parseFloat(numAngle);
      let thetaRad:number;
      let travel:number = 0;
      let travelSq:number;
      let trigMult:number;
      let hasRise:boolean = true;
      let hasRun:boolean = true;
      let hasTheta:boolean = true;

      
      //check to see what inputs the user has entered
      if (rise === 0 || rise === null || numRise === ""){
        hasRise = false;
      }
      if (run === 0 || run === null || numRun === ""){
        hasRun = false;
      }
      if (theta === 0 || theta === null || numAngle === ""){
        hasTheta = false;
      }
      if (hasRun && hasRise && hasTheta){
        console.log("triple stop test")
        return;
      }
      if(hasRun && hasRise){
        travelSq = rise**2 + run**2
        travel = Math.sqrt(travelSq)
      } else if(hasRun && hasTheta){
        thetaRad = theta*degToRad
        trigMult = parseFloat(Math.cos(thetaRad).toFixed(3));
        if (trigMult === 0){
          return;
        } else {
          travel = run/trigMult;
        }
      } else if (hasRise && hasTheta){
        thetaRad = theta*degToRad 
        trigMult = parseFloat(Math.sin(thetaRad).toFixed(3));
        if(trigMult === 0){
          return;
        } else {
          travel = rise/trigMult;
        }
      }

      SetTravel(travel.toString())
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.normText}>Please enter only two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Text style={styles.normText}>Enter Rise:</Text>
        <TextInput
          style = {styles.Input}
          //value = {number}
          placeholder = "Rise"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numRise}
          onChangeText={text => SetRise(text)}
        />
        <Text style={styles.normText}>Enter Run:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Run"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numRun}
          onChangeText={text => SetRun(text)} 
        />
        <Text style={styles.normText}>Enter Angle:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Angle of offset"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numAngle}
          onChangeText={text => SetAngle(text)} 
        />
        <Text style={styles.normText}>Travel:</Text>
        <TextInput
          style = {styles.Input}
          placeholder = "Travel"
          keyboardType='numeric' 
          onSubmitEditing={Keyboard.dismiss}
          editable={false}
          value={numTravel}
        />
        <Button
          title="Calculate travel"
          color="#BEEEEF"
          onPress={calculate}
        />
      </View>
    </TouchableWithoutFeedback>

  );
}

const degToRad:number = 0.01745533

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  }
});