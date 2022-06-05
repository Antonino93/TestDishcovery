import {
  IUser,
  IUserLoginRequestParams,
  IUserRegisterRequestParams,
  IUserUpdateRequestParams
} from "./models";
import RealWorldApiInstance from "./RealWorldApiBase";

const USER_PATH = "/user";
const USERS_PATH = "/users";

export const UserLogin = async (
  params: IUserLoginRequestParams
): Promise<IUser> => {
  const res = await RealWorldApiInstance.post(`${USERS_PATH}/login`, {
    user: params
  });
  return res?.data?.user as IUser;
};

export const UserRegister = async (
  params: IUserRegisterRequestParams
): Promise<IUser> => {
  const res = await RealWorldApiInstance.post(USERS_PATH, { user: params });
  return res?.data?.user as IUser;
};

export const UserGetCurrent = async (): Promise<IUser> => {
  const res = await RealWorldApiInstance.get(USER_PATH);
  return res?.data?.user as IUser;
};

export const UserUpdate = async (
  params: FormData
): Promise<IUser> => {
  const res = await RealWorldApiInstance.post(USER_PATH, { user: params }, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});
  return res?.data?.user as IUser;
};
