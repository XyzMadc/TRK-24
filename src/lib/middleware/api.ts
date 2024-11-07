// middlewares/api.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export function apiAuthMiddleware(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      req.user = token;
      return handler(req, res);
    } catch (error) {
      console.error("API Middleware Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
