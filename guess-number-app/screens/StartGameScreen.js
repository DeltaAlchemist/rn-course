import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import { StyleSheet, View } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { Title } from '../components/ui/Title';
import { useState } from 'react';
import Colors from '../constants/colors';
import { Card } from '../components/ui/Card';
import { InstructionText } from '../components/ui/InstructionText';

export const StartGameScreen = ({ onPickNumber }) => {
  const [inputNumber, setInputNumber] = useState(''); // textinput value is always a string

  const numberInputHandler = (text) => {
    setInputNumber(text);
  };

  const resetInputHandler = () => {
    setInputNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(inputNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior='position'>
        <View style={styles.rootContainer}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={inputNumber} // binding textinput value with state
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
