import { StyleSheet, View, Text } from 'react-native';

export const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text style={styles.text}>
        This is the Meal Details Screen ({mealId})
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
  },
});
