import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/lib/firebaseAdmin";
import { decodeJWT } from "@/lib/jwt";
import { verifyPassword } from "@/lib/bcrypt";

interface LoginRequestBody {
  email: string;
  password: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { email, password }: LoginRequestBody = req.body;

  try {
    const userRecord = await auth.getUserByEmail(email);

    if (!userRecord) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const passwordHash = await verifyPassword(
      password,
      userRecord.customClaims?.passwordHash || ""
    );
    if (!passwordHash) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = decodeJWT(userRecord.uid);
    res.status(200).json({ token });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Login failed", details: (error as Error).message });
  }
}
