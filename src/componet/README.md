# React Native Components Documentation

This project contains reusable React Native components, including:

- `DetailAtom`
- `CustomButton`
- `Counter`
- `CustomCounter`

Below is a guide on how to use these components in your React Native project.

---

## 📚 Table of Contents

1. [DetailAtom](#1-detailatom)
2. [CustomButton](#2-custombutton)
3. [Counter](#3-counter)
4. [CustomCounter](#4-customcounter)

---

## 🔹 1. DetailAtom

A simple component to display a label and description with optional styles and actions.

### 🔸 Props

| Prop Name        | Type         | Default Value | Description                                 |
| ---------------- | ------------ | ------------- | ------------------------------------------- |
| `label`          | `string`     | `'label'`     | The label text to display.                  |
| `desc`           | `string`     | `'desc'`      | The description text to display.            |
| `labelStyle`     | `TextStyle`  | `undefined`   | Custom styles for the label text.           |
| `descStyle`      | `TextStyle`  | `undefined`   | Custom styles for the description text.     |
| `containerStyle` | `ViewStyle`  | `undefined`   | Custom styles for the container view.       |
| `onPress`        | `() => void` | `undefined`   | Callback when the description is pressed.   |
| `disable`        | `boolean`    | `true`        | Disables the touch functionality if `true`. |

### 🔸 Usage

```tsx
import DetailAtom from './detail-atom';

<DetailAtom
  label="Title"
  desc="This is a description"
  labelStyle={{color: 'blue'}}
  descStyle={{color: 'green'}}
  containerStyle={{padding: 10}}
  onPress={() => console.log('Description pressed')}
  disable={false}
/>;
```

---

## 🔹 2. CustomButton

A customizable button component.

### 🔸 Props

| Prop Name     | Type         | Default Value | Description                                 |
| ------------- | ------------ | ------------- | ------------------------------------------- |
| `title`       | `string`     | `undefined`   | The text to display on the button.          |
| `onPress`     | `() => void` | `undefined`   | Function called when the button is pressed. |
| `buttonStyle` | `ViewStyle`  | `undefined`   | Custom styles for the button container.     |
| `textStyle`   | `TextStyle`  | `undefined`   | Custom styles for the button text.          |

### 🔸 Usage

```tsx
import CustomButton from './custom-button';

<CustomButton
  title="Click Me"
  onPress={() => console.log('Button pressed')}
  buttonStyle={{backgroundColor: 'blue', padding: 10}}
  textStyle={{color: 'white', fontSize: 16}}
/>;
```

---

## 🔹 3. Counter

A simple counter component with increment and reset functionality.

### 🔸 Description

The `Counter` component uses the `CustomButton` component to render two buttons:

- One to **increment** the count
- One to **reset** the count

### 🔸 Usage

```tsx
import Counter from './counter';

<Counter />;
```

---

## 🔹 4. CustomCounter

A flexible counter component with customizable buttons and actions.

### 🔸 Props

| Prop Name        | Type             | Default Value | Description                                        |
| ---------------- | ---------------- | ------------- | -------------------------------------------------- |
| `title`          | `string[]`       | `[]`          | Array of button titles.                            |
| `count`          | `number`         | `0`           | The current count value.                           |
| `noOfButtons`    | `number`         | `1`           | Number of buttons to display.                      |
| `buttonHandlers` | `(() => void)[]` | `[]`          | Array of functions to handle each button's action. |

### 🔸 Usage

```tsx
import CustomCounter from './custom-counter';

<CustomCounter
  title={['Increment', 'Decrement']}
  count={5}
  noOfButtons={2}
  buttonHandlers={[
    () => console.log('Increment pressed'),
    () => console.log('Decrement pressed'),
  ]}
/>;
```

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for more details.
