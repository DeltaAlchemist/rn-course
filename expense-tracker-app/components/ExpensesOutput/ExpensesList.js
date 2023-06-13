import { FlatList, StyleSheet } from 'react-native';
import { ExpenseItem } from './ExpenseItem';

const renderExpenseItem = (itemData) => {
  return <ExpenseItem {...itemData.item} />;
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
