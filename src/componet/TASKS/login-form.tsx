import {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import CustomButton from '../custom-button';

type LoginForm = {
  username: string;
  password: string;
  captcha: string;
};

const LoginForm = () => {
  const [form, setForm] = useState<LoginForm>({
    username: '',
    password: '',
    captcha: '',
  });
  const handleChange = (key: keyof LoginForm) => (value: string) => {
    setForm({...form, [key]: value});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Login </Text>
      <TextInput
        label="Username"
        mode="outlined"
        value={form.username}
        onChangeText={handleChange('username')}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={form.password}
        secureTextEntry
        onChangeText={handleChange('password')}
      />
      <TextInput
        label="Captcha"
        mode="outlined"
        value={form.captcha}
        onChangeText={handleChange('captcha')}
      />
      <CustomButton
        title="Submit"
        onPress={() =>
          Alert.alert(
            'Username: ' + form.username + ' Password: ' + form.password,

            'Captcha: ' + form.captcha,
          )
        }
        buttonStyle={styles.buttonStyle}
        textStyle={styles.textStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  buttonStyle: {
    backgroundColor: '#007AFF',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginForm;
