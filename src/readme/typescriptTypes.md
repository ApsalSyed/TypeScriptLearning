# TypeScript Types Cheat Sheet

This is a cheat sheet for various types in TypeScript. Use this as a quick reference guide when working with TypeScript.

## Primitives

- `number`: Represents numeric values.
- `string`: Represents textual data.
- `boolean`: Represents true or false values.
- `null`: Represents the absence of any object value.
- `undefined`: Represents an uninitialized variable.
- `symbol`: Represents unique and immutable values.

## Arrays

- `Array<type>`: Represents an array of values of a specific type.
- `type[]`: An alternative syntax for defining arrays.

## Objects

- `object`: Represents a generic JavaScript object.
- `Record<key, value>`: Represents an object with specific key-value pairs.

## Functions

- `(parameters) => returnType`: Represents a function with specific parameters and return type.
- `void`: Represents a function that doesn't return a value.

## Union Types

- `type1 | type2`: Represents a value that can be either of `type1` or `type2`.
- `type1 | type2 | type3`: Represents a value that can be either of `type1`, `type2`, or `type3`.

## Intersection Types

- `type1 & type2`: Represents a value that must satisfy both `type1` and `type2`.

## Type Aliases

- `type AliasName = type`: Represents a custom type alias.

## Generics

- `type<T>`: Represents a generic type that can be used with different types.

## Type Assertions

- `value as type`: Represents a type assertion to tell the compiler about the type of a value.

For more detailed information, refer to the official TypeScript documentation.

Usage:

```typescript
const age: number = 25;
const name: string = 'John Doe';
const isStudent: boolean = true;
const person: object = {name: 'John Doe', age: 25};
const numbers: number[] = [1, 2, 3, 4, 5];
const user: Record<string, string> = {
  username: 'johndoe',
  password: 'password123',
};

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

type Status = 'active' | 'inactive';
const status: Status = 'active';

type Point = {x: number; y: number};
const point: Point = {x: 10, y: 20};

function identity<T>(arg: T): T {
  return arg;
}

const value: any = 'Hello, TypeScript!';
const length: number = (value as string).length;
```
