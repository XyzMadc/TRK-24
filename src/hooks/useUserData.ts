import { UserData } from "@/type";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export function useUserData(userId: string | null) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchUserData() {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const db = getFirestore();
        const userDocSnap = await getDoc(doc(db, "users", userId));

        if (userDocSnap.exists()) {
          setUserData(userDocSnap.data() as UserData);
          setLoading(false);
        } else {
          setUserData(null);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setUserData(null);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [userId]);

  return { userData, loading };
}
