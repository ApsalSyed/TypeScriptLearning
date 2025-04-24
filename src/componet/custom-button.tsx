import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  // optional
  onPress?: () => void;
  //mandatory
  // onPress: () => void;
  //native props
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={[buttonStyle]}>
        <Text style={[textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
