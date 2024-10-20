import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";

export function signJWT(payload: object, expiresIn: string | number) {
  return jwt.sign(payload, secret, { expiresIn });
}

export function decodeJWT(token: string) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    console.error(error);
    return null;
  }
}
