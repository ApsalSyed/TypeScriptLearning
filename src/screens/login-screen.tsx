import {useForm} from 'react-hook-form';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-paper';
import CustomInput from './custom-input';

const LoginScreen = () => {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <CustomInput
          control={control}
          name="username"
          placeholder="Username"
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          control={control}
          name="password"
          secureTextEntry
          placeholder="Password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />

        <Button
          mode="contained"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
          contentStyle={styles.buttonContent}>
          Login
        </Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  formContainer: {
    width: '100%',
    maxWidth: 360,
    padding: 24,
    backgroundColor: '#d9d7d7',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    alignSelf: 'center',
  },
  button: {
    marginTop: 24,
    borderRadius: 4,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
