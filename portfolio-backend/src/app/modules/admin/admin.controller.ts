import { Request, Response } from "express";
import { AdminService } from "./admin.service";
import httpStatus from "http-status";
import catchAsync from "../../../util/catchAsync";
import sendResponse from "../../../util/sendResponse";
import { jwtHelpers, setAuthCookie } from "../../../util/jwt/jwt.utils";

// User Register
const userRegister = catchAsync(async (req: Request, res: Response) => {
  const { ...userInfo } = req.body;

  const result = await AdminService.userRegister(userInfo);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Registration Successful",
    data: result,
  });
});

// User Login
const userLogin = catchAsync(async (req: Request, res: Response) => {
  const { ...authCredentials } = req.body;

  const result = await AdminService.userLogin(authCredentials);

  // setAuthCookie(res, result);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Login Successful",
    data: result,
  });
});

// Get User
const getAuthenticatedUserDetails = catchAsync(
  async (req: Request, res: Response) => {
    const token = jwtHelpers.verifyAuthToken(req);

    const result = await AdminService.getAuthenticatedUserDetails(token);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "User Details Retrieved Successfully",
      data: result,
    });
  }
);

// Logout
const logout = catchAsync(async (req: Request, res: Response) => {
  await AdminService.logout(res);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "User Logged Out Successfully",
    data: null,
  });
});

export const AdminController = {
  userRegister,
  userLogin,
  getAuthenticatedUserDetails,
  logout,
};
