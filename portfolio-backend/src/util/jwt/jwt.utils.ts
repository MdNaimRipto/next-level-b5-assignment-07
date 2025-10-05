import { Request, Response } from "express";
import jwt, { Secret, sign, SignOptions } from "jsonwebtoken";
import ApiError from "../../errors/ApiError";
import httpStatus from "http-status";
import { Types } from "mongoose";
import { envConfig } from "../../config/config";

export interface IJwtPayload {
  email: string;
  id: Types.ObjectId;
  iat: number;
  exp: number;
}

export interface AuthTokens {
  accessToken?: string;
  refreshToken?: string;
}

const createToken = (
  payload: object,
  secret: Secret,
  expireTime: string
): string => {
  return sign(payload, secret, {
    expiresIn: 3600000,
  } as SignOptions);
};

export const setAuthCookie = (res: Response, tokenInfo: AuthTokens) => {
  if (tokenInfo.accessToken) {
    res.cookie("accessToken", tokenInfo.accessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
      sameSite: "none",
    });
  }

  if (tokenInfo.refreshToken) {
    res.cookie("refreshToken", tokenInfo.refreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 3600000,
      sameSite: "none",
    });
  }
};

const jwtVerify = (token: string, secret: Secret): IJwtPayload => {
  return jwt.verify(token, secret) as IJwtPayload;
};

const verifyAuthToken = (req: Request) => {
  const token = req.headers.authorization;

  // Check if the Authorization header is present
  if (!token) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Authorization Token is Missing"
    );
  }

  return token;
};

export const jwtHelpers = {
  createToken,
  jwtVerify,
  verifyAuthToken,
};
