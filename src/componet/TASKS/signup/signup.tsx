import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CustomInput from '../login/custom-input';
import {useForm} from 'react-hook-form';
import {Button, Card, Title} from 'react-native-paper';

const Signup = () => {
  const {control, handleSubmit, watch} = useForm();

  const password = watch('password');

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Content>
          <Title style={styles.title}>Create an Account</Title>
          <Text style={styles.subtitle}> Sign up to start your journey </Text>

          <CustomInput
            name="name"
            placeholder="Full Name"
            control={control}
            rules={{required: 'Name is required'}}
          />
          <CustomInput
            name="email"
            placeholder="Email"
            control={control}
            rules={{required: 'Email is required'}}
          />
          <CustomInput
            name="password"
            placeholder="Password"
            control={control}
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            }}
          />
          <CustomInput
            control={control}
            name="confirmPassword"
            placeholder="Confirm Password"
            rules={{
              validate: (value: any) =>
                value === password || "Password doesn't matched",
            }}
          />

          <Button
            mode="contained"
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
            contentStyle={{paddingVertical: 8}}>
            Sign Up
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f9f9f9',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    borderRadius: 8,
  },
});

export default Signup;
