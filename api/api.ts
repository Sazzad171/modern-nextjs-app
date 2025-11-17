import {
  SignupType,
  SignUpResponse,
  LoginType,
  LoginResponse,
  ProfileResponse,
  ProfileType,
  TodoPayload,
  TodoResponse,
  GetTodosResponse,
  SignupPayload,
} from "@/types/interface";
import axiosInstance from "./axiosInstance";

// Login/Signup APIs
export const signUp = (payload: SignupPayload) =>
  axiosInstance.post<SignUpResponse>("/users/signup/", payload);

export const login = (payload: LoginType) =>
  axiosInstance.post<LoginResponse>("/auth/login/", payload);

// Profile APIs
export const getProfile = () =>
  axiosInstance.get<ProfileResponse>("/users/me/");

export const updateProfile = (payload: ProfileType) => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined) formData.append(key, value as any);
  });
  return axiosInstance.patch<ProfileResponse>("/users/me/", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Todo APIs
export const getTodos = (params?: Record<string, any>) =>
  axiosInstance.get<GetTodosResponse>("/todos/", { params });

export const createTodo = (payload: TodoPayload) =>
  axiosInstance.post<TodoResponse>("/todos/", payload);

export const updateTodo = (id: number, payload: Partial<TodoPayload> & { is_completed?: boolean; position?: number }) =>
  axiosInstance.patch<TodoResponse>(`/todos/${id}/`, payload);

export const deleteTodo = (id: number) =>
  axiosInstance.delete(`/todos/${id}/`);
