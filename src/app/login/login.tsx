import { LoginService } from '@/services/http/login';

export const login = async (userName: string, password: string) => {
  try {
    const { data } = await LoginService.login({ userName, password });

    return data;
  } catch (error) {
    console.error(error);
  }
};
