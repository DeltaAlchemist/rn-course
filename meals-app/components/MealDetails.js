import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
  iconColor,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
      <Ionicons name='md-remove' size={12} color={iconColor} />
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Ionicons name='md-remove' size={12} color={iconColor} />
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
