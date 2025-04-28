// import {useState} from 'react';
// import {useForm} from 'react-hook-form';
// import {View} from 'react-native';
// import {Button, Text, TextInput} from 'react-native-paper';

import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import CustomInput from './custom-input';

// interface LoginForm {
//   username: string;
//   password: string;
// }

// const LoginScreen = () => {
//   const [form, setForm] = useState<LoginForm>({
//     username: '',
//     password: '',
//   });

//   const hookForm = useForm<LoginForm>();
//   return (
//     <View style={{backgroundColor: 'lightgray', padding: 20}}>
//       <Text>Login Screen</Text>
//       <View style={{marginTop: 20}}>
//         <TextInput
//           label="Username"
//           mode="outlined"
//           value={form.username}
//           onChangeText={text => setForm({...form, username: text})}
//         />
//       </View>

//       <View style={{marginTop: 20}}>
//         <TextInput
//           label="Password"
//           mode="outlined"
//           value={form.password}
//           onChangeText={text => setForm({...form, password: text})}
//           secureTextEntry
//         />
//       </View>
//       <View
//         style={{
//           marginTop: 20,
//           justifyContent: 'space-between',
//         }}>
//         <Button
//           // icon="camera"
//           mode="elevated"
//           onPress={() => console.log('Pressed')}>
//           Press me
//         </Button>
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;

const LoginScreen = () => {
  // const [form, setForm] = useState({
  //   username: '',
  //   password: '',
  // });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);

  const onButtonPressed = (data: any) => {
    // console.log(data);
  };
  return (
    <View style={{}}>
      {/* <Controller
        name="username"
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            label="Username"
            mode="outlined"
            value={value}
            // onChangeText={text => setForm({...form, username: text})}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      /> */}

      {/* <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={form.password}
        onChangeText={text => setForm({...form, password: text})}
      /> */}
      <CustomInput
        control={control}
        name="username"
        placeholder="username"
        rules={{required: 'Username is required'}}
      />
      <CustomInput
        control={control}
        name="password"
        secureTextEntry
        placeholder="password"
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters',
          },
        }}
      />

      <Button children="Press me" onPress={handleSubmit(onButtonPressed)} />
    </View>
  );
};

export default LoginScreen;
