import express from "express";
import { AdminController } from "./admin.controller";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { UserValidation } from "./admin.validation";

const router = express.Router();

router.post(
  "/register",
  zodValidationRequest(UserValidation.usersZodSchema),
  AdminController.userRegister
);

router.post(
  "/login",
  zodValidationRequest(UserValidation.loginUserZodSchema),
  AdminController.userLogin
);

router.get("/me", AdminController.getAuthenticatedUserDetails);

router.post("/logout", AdminController.logout);

export const AdminRouter = router;
