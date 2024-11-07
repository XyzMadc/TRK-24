import { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "@/lib/firebase/init";
import { apiMiddleware } from "@/lib/middleware/api";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { user } = req.query;
  const usersRef = collection(db, "users");

  switch (req.method) {
    case "GET":
      try {
        if (user?.[0]) {
          // Get single user
          const userDoc = doc(db, "users", user[0]);
          const userSnapshot = await getDoc(userDoc);

          if (!userSnapshot.exists()) {
            return res.status(404).json({ message: "User not found" });
          }

          const userData = userSnapshot.data();
          delete userData.password; // Don't send password

          return res.status(200).json(userData);
        } else {
          // Get all users
          const querySnapshot = await getDocs(usersRef);
          const users = querySnapshot.docs.map((doc) => {
            const data = doc.data();
            delete data.password; // Don't send passwords
            return { id: doc.id, ...data };
          });

          return res.status(200).json(users);
        }
      } catch (error) {
        console.error("GET Error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case "PUT":
      try {
        if (!user?.[0]) {
          return res.status(400).json({ message: "User ID is required" });
        }

        const userDoc = doc(db, "users", user[0]);
        const userExists = (await getDoc(userDoc)).exists();

        if (!userExists) {
          return res.status(404).json({ message: "User not found" });
        }

        const updateData = { ...req.body };

        // If updating password, hash it
        if (updateData.password) {
          updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        await updateDoc(userDoc, updateData);
        return res.status(200).json({ message: "User updated successfully" });
      } catch (error) {
        console.error("PUT Error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case "PATCH":
      try {
        if (!user?.[0]) {
          return res.status(400).json({ message: "User ID is required" });
        }

        const userDoc = doc(db, "users", user[0]);
        const userExists = (await getDoc(userDoc)).exists();

        if (!userExists) {
          return res.status(404).json({ message: "User not found" });
        }

        const updateData = { ...req.body };

        // If updating password, hash it
        if (updateData.password) {
          updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        await updateDoc(userDoc, updateData);
        return res.status(200).json({ message: "User updated successfully" });
      } catch (error) {
        console.error("PATCH Error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

    case "DELETE":
      try {
        if (!user?.[0]) {
          return res.status(400).json({ message: "User ID is required" });
        }

        const userDoc = doc(db, "users", user[0]);
        const userExists = (await getDoc(userDoc)).exists();

        if (!userExists) {
          return res.status(404).json({ message: "User not found" });
        }

        await deleteDoc(userDoc);
        return res.status(200).json({ message: "User deleted successfully" });
      } catch (error) {
        console.error("DELETE Error:", error);
        return res.status(500).json({ message: "Internal server error" });
      }

    default:
      return res.status(405).json({ message: "Method not allowed" });
  }
}

// Apply middlewares
export default apiMiddleware(handler);
