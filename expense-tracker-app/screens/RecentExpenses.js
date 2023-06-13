import { StyleSheet, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const RecentExpenses = () => {
  return <ExpensesOutput expensePeriod='Last 7 Days' />;
};

const styles = StyleSheet.create({});
