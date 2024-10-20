import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/lib/firebaseAdmin";
import { signJWT } from "@/lib/jwt";
import { hashPassword } from "@/lib/bcrypt";

interface RegisterRequestBody {
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password }: RegisterRequestBody = req.body;

  try {
    const hashedPassword = await hashPassword(password);

    const userRecord = await auth.createUser({
      email,
      password: hashedPassword,
    });

    await auth.setCustomUserClaims(userRecord.uid, {
      passwordHash: hashedPassword,
    });

    const token = signJWT({ uid: userRecord.uid }, "1d");
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({
      error: "Registration failed",
      details: (error as Error).message,
    });
  }
}
