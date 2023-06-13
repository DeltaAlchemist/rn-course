import { StyleSheet, View } from 'react-native';
import { Input } from './Input';

export const ExpenseForm = () => {
  const amountChangedHandler = () => {};
  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label='Description' textInputConfig={{}} />
    </View>
  );
};

const styles = StyleSheet.create({});
