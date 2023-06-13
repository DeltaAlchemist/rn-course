import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return <View></View>;
};

const styles = StyleSheet.create({});
