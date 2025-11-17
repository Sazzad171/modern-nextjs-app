import { LoginSchema, signupSchema } from "@/lib/zodSchema";
import z from "zod";

export type LoginType = z.infer<typeof LoginSchema>;

export type SignupType = z.infer<typeof signupSchema>;