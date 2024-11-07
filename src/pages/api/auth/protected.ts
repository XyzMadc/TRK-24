// pages/api/auth/protected.ts
import { protectedRouteMiddleware } from "@/lib/middleware/protected";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
}

export default protectedRouteMiddleware(handler);
