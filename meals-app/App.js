import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='white' />
      <CategoriesScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
