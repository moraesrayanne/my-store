import { UsersService } from '@/services/http/users';
import { Users } from '@/services/http/users/types';

export const getUsers = async () => {
  try {
    const { data } = await UsersService.getUsers();

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserById = async (id: number) => {
  try {
    const { data } = await UsersService.getUserById(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (data: Users) => {
  try {
    const { data: response } = await UsersService.createUser(data);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (id: number, data: Users) => {
  try {
    const { data: response } = await UsersService.updateUser(id, data);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (id: number) => {
  try {
    const { data } = await UsersService.deleteUser(id);

    return data;
  } catch (error) {
    console.error(error);
  }
};
