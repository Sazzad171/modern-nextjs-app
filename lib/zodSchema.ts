import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(4, "Min 4 chars"),
});

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name is too long")
      .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Please enter a valid name format."),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name is too long")
      .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Please enter a valid name format."),

    email: z.string().email("Enter a valid email"),

    password: z
      .string()
      .min(4, "4 characters minimum.")
      .max(50, "Password too long"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });


export const profileSchema = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  address: z.string().optional(),
  contact: z.string().optional(),
  birthday: z.string().optional(),
});
