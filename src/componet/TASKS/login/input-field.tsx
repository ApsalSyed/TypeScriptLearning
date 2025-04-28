import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, HelperText} from 'react-native-paper';

interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;

  // Validation
  required?: boolean;
  minLength?: number;
  isEmail?: boolean;
  errorMessage?: string;
}

const CustomInputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  icon,
  keyboardType = 'default',
  multiline = false,
  numberOfLines = 1,
  required = false,
  minLength = 0,
  isEmail = false,
  errorMessage,
}) => {
  const [touched, setTouched] = React.useState(false);

  const validate = (): string | null => {
    if (required && value.trim() === '') {
      return `${label} is required.`;
    }
    if (minLength && value.length < minLength) {
      return `${label} must be at least ${minLength} characters.`;
    }
    if (isEmail && !/^\S+@\S+\.\S+$/.test(value)) {
      return 'Please enter a valid email address.';
    }
    return null;
  };

  const error = touched ? validate() : null;

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={text => {
          onChangeText(text);
          if (!touched) {
            setTouched(true);
          }
        }}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        error={!!error}
        left={icon ? <TextInput.Icon icon={icon} /> : undefined}
        style={[styles.input, !!error && styles.inputError]}
      />
      {error && (
        <HelperText type="error" visible={!!error}>
          {errorMessage || error}
        </HelperText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
});

export default CustomInputField;
