import { NextApiRequest, NextApiResponse } from "next";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/init";
import bcrypt from "bcryptjs";
import { registerSchema } from "@/schemas/auth";
import { UserData } from "@/types/type";
import cuid from "cuid";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const data = registerSchema.parse(req.body);
    const { name, nim, typeClass, password } = data;

    const userId = cuid();
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: UserData = {
      id: userId,
      nim,
      name,
      password: hashedPassword,
      role: "member",
      typeClass,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await setDoc(doc(db, "users", userId), newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: "Registration failed" });
  }
}
