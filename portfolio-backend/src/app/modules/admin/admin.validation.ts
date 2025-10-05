import { z } from "zod";

const usersZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: "User Name is Required",
    }),
    email: z.string({
      required_error: "Email is Required",
    }),
    password: z.string({
      required_error: "Password is Required",
    }),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is Required",
    }),
    password: z.string({
      required_error: "Password is Required",
    }),
  }),
});

export const UserValidation = {
  usersZodSchema,
  loginUserZodSchema,
};
