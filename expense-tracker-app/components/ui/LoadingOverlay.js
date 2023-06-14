import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { GlobalStyles } from '../../constants/styles';

export const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' />
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
});
