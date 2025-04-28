import axios from 'axios';

export interface User {
  id: number;
  firstName: string;
  email: string;
  age: number;
  height: number;
  bloodGroup: string;
  image: string;
}

export const fetchUser = async (): Promise<User[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    return response.data.users;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
