import { StyleSheet, View, Text } from 'react-native';
import { Button } from './Button';
import { GlobalStyles } from '../../constants/styles';

export const ErrorOverlay = ({ message, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error message</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Ok</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    color: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
