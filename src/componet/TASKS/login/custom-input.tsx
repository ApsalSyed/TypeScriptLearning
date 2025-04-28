import {Controller} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

interface CustomInputProps {
  control: any;
  name: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  rules?: any;
}

const CustomInput: React.FC<CustomInputProps> = ({
  control,
  name,
  secureTextEntry = false,
  placeholder,
  rules,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View style={styles.container}>
          <TextInput
            mode="outlined"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            error={!!error}
            style={styles.input}
            outlineColor={error ? '#B00020' : '#C4C4C4'}
            activeOutlineColor={error ? '#B00020' : '#6200ee'}
          />
          {error && (
            <Text style={styles.errorText}>
              {error.message || 'This field is required'}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#B00020',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
