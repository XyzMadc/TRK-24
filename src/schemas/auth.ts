import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  nim: z.string().min(8, "NIM must be at least 8 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  typeClass: z.string(),
});

export const loginSchema = z.object({
  nim: z.string().min(8, "NIM must be at least 8 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
