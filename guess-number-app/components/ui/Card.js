import { StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

export const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 36,
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
});
