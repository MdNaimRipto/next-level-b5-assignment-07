"use client";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getMe, login } from "@/actions/auth";
import { toast } from "sonner";
import { useUserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginForm() {
  const { setUser } = useUserContext();
  const navigate = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const res = await login(data);
      console.log(res);
      if (res.success) {
        const user = await getMe();
        setUser(user?.data);
        toast.success("User Logged in Successfully");
        navigate.push("/dashboard/blogs");
      } else {
        toast.error("User Login Failed");
      }
    } catch (error) {
      // toast.error(String(error as string));
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login Now</h1>
        <p className="text-sm text-gray-500">
          Enter your email and password to login
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto"
      >
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...form.register("email")}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          {form.formState.errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...form.register("password")}
            className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
          {form.formState.errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {form.formState.errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            type="submit"
            disabled={isLoading}
            className="w-4/5 rounded-lg bg-black px-4 py-2 text-white font-medium hover:bg-black/90 disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
