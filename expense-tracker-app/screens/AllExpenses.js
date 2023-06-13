import { StyleSheet, View } from 'react-native';
import { ExpensesOutput } from '../components/ExpensesOutput/ExpensesOutput';

export const AllExpenses = () => {
  return <ExpensesOutput expensePeriod='Total' />;
};

const styles = StyleSheet.create({});
