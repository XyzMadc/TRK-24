// middlewares/protected.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export function protectedRouteMiddleware(
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

      if (req.url?.startsWith("/api/admin") && token.role !== "admin") {
        return res.status(403).json({ error: "Forbidden" });
      }

      req.user = token;
      return handler(req, res);
    } catch (error) {
      console.error("Protected Route Middleware Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
}
