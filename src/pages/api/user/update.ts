import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/init";
import { updateUserSchema } from "@/schemas/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session || !session.user || !("nim" in session.user)) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const data = updateUserSchema.parse(req.body);
    const userRef = doc(db, "users", session.user.nim as string);

    await updateDoc(userRef, {
      ...data,
      updatedAt: new Date(),
    });

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ message: "Update failed" });
  }
}
