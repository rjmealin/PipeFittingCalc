import { Button, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { TrigCalculations } from '../constants/TrigCalculations';
import { Pressable } from 'react-native';
import { MeasurementModel } from '../constants/Models';
import React from 'react';

export default function SimpleOffSetScreen() {
    const [numRiseFt, SetRiseFt] = useState('');
    const [numRiseInch, SetRiseInch] = useState('');
    const [numRiseDen, SetRiseDen] = useState('');
    const [numRiseNumerator, SetRiseNumerator] = useState('');
    const [numRunFt, SetRunFt] = useState('');
    const [numRunInch, SetRunInch] = useState('');
    const [numTravel, SetTravel] = useState('');
    const [numAngle, SetAngle] = useState('');

    function calculate() {
      let rise:MeasurementModel = new MeasurementModel(parseFloat(numRiseFt), parseFloat(numRiseInch));

      let run:MeasurementModel = new MeasurementModel();
      
      let theta:number = parseFloat(numAngle);
      let travel:number = 0;
      let travelSq:number;
      let hasRise:boolean = true;
      let hasRun:boolean = true;
      let hasTheta:boolean = true;
      
      //check to see what inputs the user has entered
      if (rise.DecimalFeet === 0 || rise === null){
        hasRise = false;
      }
      if (run.DecimalFeet === 0 || run === null){
        hasRun = false;
      }
      if (theta === 0 || theta === null || numAngle === ""){
        hasTheta = false;
      }
      if (hasRun && hasRise && hasTheta){
        console.log("triple stop test")
        alert("Please only enter two items")
        return;
      }
      if(hasRun && hasRise){
        travelSq = rise.DecimalFeet ** 2 + run.DecimalFeet ** 2;
        travel = Math.sqrt(travelSq)
      } else if(hasRun && hasTheta){
        travel = TrigCalculations.ComputeTravel(true,false,false,theta, run.DecimalFeet);
        
      } else if (hasRise && hasTheta){
        travel = TrigCalculations.ComputeTravel( false, true, false, theta, rise.DecimalFeet);
      }
      SetTravel(travel.toString())

      if (travel === -1 ){
       SetTravel("Incorrect numbers") 
      }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.normText}>Please enter only two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                

        <Text style={styles.normText}>Enter Rise:</Text>        
        <View style={styles.container1}>
          <TextInput
            style={styles.Input}
            placeholder = "Feet"
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
            value={numRiseFt}
            onChangeText={text => SetRiseFt(text)}
          />        
          <TextInput
          style = {styles.Input}
          placeholder = "Inches"
          keyboardType='numeric'
          onSubmitEditing={Keyboard.dismiss}
          value={numRiseInch}
          onChangeText={text => SetRiseInch(text)}
          />
          <View style={styles.container2}>
            <TextInput
            style = {styles.Input2}
            placeholder = "Inches"
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
            value={numRiseDen}
            onChangeText={text => SetRiseDen(text)}
            />
            <TextInput
            style = {styles.Input2}
            placeholder = "Inches"
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
            value={numRiseNumerator}
            onChangeText={text => SetRiseNumerator(text)}
            />
          </View>
        </View>


        <Text style={styles.normText}>Enter Run:</Text>
        <View style={styles.container1}>
          <TextInput
            style = {styles.Input}
            placeholder = "Feet"
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
            value={numRunFt}
            onChangeText={text => SetRunFt(text)} 
          />
          <TextInput
            style = {styles.Input}
            placeholder = "Inches"
            keyboardType='numeric'
            onSubmitEditing={Keyboard.dismiss}
            value={numRunInch}
            onChangeText={text => SetRunInch(text)} 
          />
        </View>


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
          onPress={calculate}        
        />
        <Pressable style={styles.Button} onPress={calculate}>
          <Text style={styles.buttonText}>Calculate Travel</Text>
        </Pressable>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#4A6DE5'
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#4A6DE5',
    borderColor: '#000000',
    borderWidth: 1,
  },
  container2: {
    flexDirection: 'column',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#4A6DE5',
    borderColor: '#000000',
    borderWidth: 1,
    width: 25,
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
    width: '20%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  Input2:{
    height: 40,
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  normText: {
    fontSize:14,
    color: '#CED8F7',
    padding: 10,
  },
  Button: {
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 12,

  },
  buttonText : {
    color: '#000000'
  }
});