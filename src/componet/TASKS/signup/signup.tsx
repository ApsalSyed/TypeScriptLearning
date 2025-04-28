// practicing react-hook-form

import {View} from 'react-native';
import CustomInput from '../login/custom-input';
import {useForm} from 'react-hook-form';
import {Button} from 'react-native-paper';

const Signup = () => {
  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };
  const {control, handleSubmit} = useForm();
  return (
    <View style={{width: '100%', padding: 24}}>
      <CustomInput
        name="name"
        placeholder="Name"
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
        name="Password"
        placeholder="Please enter password"
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
      <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
    </View>
  );
};

export default Signup;
