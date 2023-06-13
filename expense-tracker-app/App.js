import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ManageExpense } from './screens/ManageExpense';
import { ExpensesOverview } from './components/ExpensesOutput/ExpensesOverview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          {/* The first screen the loads up when the app starts */}
          <Stack.Screen
            name='ExpensesOverview'
            component={ExpensesOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='ManageExpenses' component={ManageExpense} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
