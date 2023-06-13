import { StyleSheet, View, Text, TextInput } from 'react-native';

export const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
};

const styles = StyleSheet.create({});
