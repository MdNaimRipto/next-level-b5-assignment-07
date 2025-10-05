import httpStatus from "http-status";
import { IAuthenticatedUser, ILoginUser, IUser } from "./admin.interface";
import { Users } from "./admin.schema";
import ApiError from "../../../errors/ApiError";
import bcrypt from "bcrypt";
import { envConfig } from "../../../config/config";
import { jwtHelpers } from "../../../util/jwt/jwt.utils";
import { Response } from "express";

//* User Register
const userRegister = async (payload: IUser): Promise<null> => {
  const { email } = payload;

  const lowercaseEmail = email.toLocaleLowerCase();

  const isExistsUser = await Users.findOne();

  if (isExistsUser) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "Admin Already Exists. Cannot Create Another Account"
    );
  }

  const hashedPassword = await bcrypt.hash(
    payload.password,
    Number(envConfig.salt_round)
  );

  await Users.create({
    ...payload,
    email: lowercaseEmail,
    password: hashedPassword,
  });

  return null;
};

//* User Login
const userLogin = async (payload: ILoginUser): Promise<IAuthenticatedUser> => {
  const { email, password } = payload;

  const isExists = await Users.findOne({ email: email });

  if (!isExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Email Or Password");
  }

  const checkPassword = await bcrypt.compare(password, isExists.password);

  if (!checkPassword) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid Email Or Password");
  }

  const jwtPayload = {
    email: isExists.email,
    id: isExists._id,
  };

  const accessToken = jwtHelpers.createToken(
    jwtPayload,
    envConfig.jwt_access_secret,
    envConfig.jwt_access_expires_in
  );

  const refreshToken = jwtHelpers.createToken(
    jwtPayload,
    envConfig.jwt_refresh_secret,
    envConfig.jwt_refresh_expires_in
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getAuthenticatedUserDetails = async (
  accessToken: string
): Promise<IUser | null> => {
  const { id, email } = jwtHelpers.jwtVerify(
    accessToken,
    envConfig.jwt_access_secret
  );
  const result = await Users.findOne({
    _id: id,
    email: email.toLocaleUpperCase(),
  }).select("-password");
  return result;
};

const logout = async (res: Response): Promise<null> => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  return null;
};

export const AdminService = {
  userRegister,
  userLogin,
  getAuthenticatedUserDetails,
  logout,
};
