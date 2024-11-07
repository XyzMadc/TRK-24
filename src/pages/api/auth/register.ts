import { registerSchema } from "@/schemas/auth";
import { collection, addDoc } from "firebase/firestore";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebase/init";
import { ZodError } from "zod"; // Import ZodError for type checking
import { apiAuthMiddleware } from "@/lib/middleware/api";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = registerSchema.parse(req.body);
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const userRef = await addDoc(collection(db, "users"), {
      ...data,
      password: hashedPassword,
      role: "member",
    });

    return res.status(201).json({
      message: "User created successfully",
      userId: userRef.id,
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.errors,
      });
    } else if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    } else {
      console.error("Unknown error:", error);
      return res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
}

export default apiAuthMiddleware(handler);
