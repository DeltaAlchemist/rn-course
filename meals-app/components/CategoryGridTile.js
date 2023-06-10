import { StyleSheet, View, Pressable, Text } from 'react-native';

export const CategoryGridTile = ({ title, color }) => {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
