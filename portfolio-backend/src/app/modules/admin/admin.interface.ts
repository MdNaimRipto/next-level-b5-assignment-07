export interface IUser {
  userName: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IAuthenticatedUser {
  accessToken: string;
  refreshToken: string;
}
