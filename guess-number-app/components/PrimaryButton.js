import { StyleSheet, Text, Pressable, View } from 'react-native';

export const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log('Pressed');
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: '#da006d' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  innerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  /* for iOS */
  pressed: {
    opacity: 0.75,
  },
});
