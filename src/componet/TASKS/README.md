# UserCard Component

The `UserCard` component is a reusable React Native component designed to display user information such as name, email, and optionally age. It supports customization through styles and props.

---

## Table of Contents

1. [Props](#props)
2. [Usage](#usage)
3. [Default Styles](#default-styles)
4. [License](#license)

---

## Props

| Prop Name        | Type        | Default Value       | Description                             |
| ---------------- | ----------- | ------------------- | --------------------------------------- |
| `name`           | `string`    | `'NAME'`            | The name of the user to display.        |
| `email`          | `string`    | `'dummy@gmail.com'` | The email of the user to display.       |
| `age`            | `number`    | `0`                 | The age of the user to display.         |
| `containerStyle` | `ViewStyle` | `undefined`         | Custom styles for the container view.   |
| `nameStyle`      | `TextStyle` | `undefined`         | Custom styles for the name text.        |
| `emailStyle`     | `TextStyle` | `undefined`         | Custom styles for the email text.       |
| `ageStyle`       | `TextStyle` | `undefined`         | Custom styles for the age text.         |
| `showage`        | `boolean`   | `false`             | Whether to display the age of the user. |

---

## Usage

Here is an example of how to use the `UserCard` component:

```tsx
import React from 'react';
import {StyleSheet} from 'react-native';
import UserCard from './user-card';

const App = () => {
  return (
    <UserCard
      name="John Doe"
      email="john.doe@example.com"
      age={30}
      showage={true}
      containerStyle={styles.container}
      nameStyle={styles.name}
      emailStyle={styles.email}
      ageStyle={styles.age}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
  },
  name: {
    color: 'blue',
    fontWeight: 'bold',
  },
  email: {
    color: 'gray',
  },
  age: {
    color: 'green',
  },
});

export default App;
```

---

## Default Styles

The `UserCard` component comes with the following default styles:

```tsx
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
```

---

## License

MIT (or add your own licensing terms here)
