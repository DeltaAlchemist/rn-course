import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ManageExpense } from './screens/ManageExpense';
import { RecentExpenses } from './screens/RecentExpenses';
import { AllExpenses } from './screens/AllExpenses';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesOverview = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='RecentExpenses' component={RecentExpenses} />
      <BottomTab.Screen name='AllExpenses' component={AllExpenses} />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          {/* The first screen the loads up when the app starts */}
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview} />
          <Stack.Screen name='ManageExpenses' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
