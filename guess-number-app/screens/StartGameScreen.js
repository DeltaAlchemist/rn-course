import { Alert, TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { PrimaryButton } from '../components/ui/PrimaryButton';
import { useState } from 'react';
import Colors from '../constants/colors';

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
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalize='none'
        onChangeText={numberInputHandler}
        value={inputNumber} // binding textinput value with state
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 18,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    /* shadow for android */
    elevation: 6,
    /* shadow for iOS */
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderColor: Colors.accent500,
    borderWidth: 2,
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
