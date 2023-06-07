import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export const GoalInput = (props) => {
  const [text, setText] = useState('');

  const goalInputHandler = (enteredText) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    props.addGoalHandler(text);
    setText(''); // Reset value of text state after button press
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        value={text}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
});
