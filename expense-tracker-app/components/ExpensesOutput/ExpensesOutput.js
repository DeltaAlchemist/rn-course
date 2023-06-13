import { StyleSheet, View, Text, FlatList } from 'react-native';
import { ExpensesSummary } from './ExpensesSummary';
import { ExpensesList } from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

export const ExpensesOutput = ({ expenses, expensePeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensePeriod} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
