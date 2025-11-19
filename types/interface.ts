import { LoginSchema, profileSchema, signupSchema, todoSchema } from "@/lib/zodSchema";
import z from "zod";

export type LoginType = z.infer<typeof LoginSchema>;

export interface LoginResponse {
  access: string;
  refresh: string;
}

export type SignupType = z.infer<typeof signupSchema>;

export interface SignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export type ProfileType = z.infer<typeof profileSchema>;

export interface ProfileResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  address?: string;
  contact_number?: string;
  birthday?: string;
  profile_image?: string;
  bio?: string;
}

export type TodoPayload = z.infer<typeof todoSchema>;

export interface TodoEditPayload extends TodoPayload {
  id: number;
}

export interface TodoResponse {
  id: number;
  title: string;
  description: string;
  priority: "low" | "moderate" | "extreme";
  is_completed: boolean;
  position: number;
  todo_date: string;
  created_at: string;
  updated_at: string;
}

export interface GetTodosResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: TodoResponse[];
}