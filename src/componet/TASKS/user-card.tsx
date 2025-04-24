import React from 'react';
import {StyleSheet, Text, View, ViewStyle, TextStyle} from 'react-native';

type User = {
  name?: string;
  email?: string;
  age?: number;
};
interface UserCardProps extends User {
  containerStyle?: ViewStyle;
  nameStyle?: TextStyle;
  emailStyle?: TextStyle;
  ageStyle?: TextStyle;
}

const UserCard: React.FC<UserCardProps> = ({
  name = 'NAME',
  email = 'dummy@gmail.com',
  age = '0',
  containerStyle,
  nameStyle,
  emailStyle,
  ageStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.name, nameStyle]}>{name}</Text>
      <Text style={[styles.email, emailStyle]}>{email}</Text>
      <Text style={[styles.age, ageStyle]}>Age: {age}</Text>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 20,
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    marginBottom: 2,
  },
  age: {
    fontSize: 14,
  },
});
