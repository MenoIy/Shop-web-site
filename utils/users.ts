import axios from 'axios';

import { User } from '../interfaces';

const API_URL = process.env.BASE_URL || 'http://localhost';
const API_PORT = Number(process.env.BASE_PORT) || 3000;

const api = axios.create({
  baseURL: `${API_URL}:${API_PORT}`,
  withCredentials: true,
});

type RegisterResponse = Omit<User, 'password'>;
type RegisterParams = Omit<User, 'role'>;

export const register = async (params: RegisterParams) => {
  return await api
    .post<RegisterResponse>(`/api/users/register`, params)
    .then(({ data }) => data);
};
