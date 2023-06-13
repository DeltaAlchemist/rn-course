import { FlatList, StyleSheet, View, Text } from 'react-native';

const renderExpenseItem = (itemData) => {
  return <Text>{itemData.item.description}</Text>;
};

export const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({});
