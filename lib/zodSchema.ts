import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(4, "Min 4 chars"),
});

export const signupSchema = z
  .object({
    first_name: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name is too long")
      .regex(/^[A-Za-z]+(?: [A-Za-z]+)*$/, "Please enter a valid name format."),

    last_name: z
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
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().email("Invalid email").optional(),
  address: z.string().optional(),
  contact_number: z.string().optional(),
  birthday: z.string().optional(),
});

export const todoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(200, { message: "Title is too long" }),

  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(2000, { message: "Description is too long" }),

  priority: z.enum(["low", "moderate", "extreme"], {
    message: "Priority must be low, moderate, or extreme",
  }),
  todo_date: z
    .string()
    .min(1, "Date is required")
    .refine((val) => {
      const parsed = new Date(val);
      if (Number.isNaN(parsed.getTime())) return false;

      const given = new Date(parsed);
      given.setHours(0, 0, 0, 0);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return given.getTime() >= today.getTime();
    }, {
      message: "todo_date must be today or a future date (not in the past)"
    }),
});