import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/init";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getSession({ req });
  if (!session || !session.user || session.user.role !== "admin") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { nim } = req.query;

  if (!nim || typeof nim !== "string") {
    return res.status(400).json({ message: "Invalid NIM" });
  }

  try {
    await deleteDoc(doc(db, "users", nim));
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(400).json({ message: "Delete failed" });
  }
}
