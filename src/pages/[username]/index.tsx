import { useUserData } from "@/hooks/useUserData";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UserPage() {
  const router = useRouter();
  const { username } = router.query;
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { userData, loading } = useUserData(userId);

  useEffect(() => {
    async function fetchUserIdByUsername() {
      if (typeof username !== "string") return;

      const db = getFirestore();
      const usersRef = collection(db, "users");
      const q = query(
        usersRef,
        where("username", "==", username.toLowerCase())
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        setUserId(userDoc.id);
      } else {
        router.push("/404");
      }
    }

    fetchUserIdByUsername();
  }, [username, router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && userId) {
        if (user.uid === userId) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } else {
        setIsAuthorized(false);
      }
    });

    return () => unsubscribe();
  }, [userId]);

  if (loading || !userId) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <div>You are not authorized to view this page.</div>;
  }

  if (!userData) {
    return <div>No user data found.</div>;
  }

  return (
    <section className="p-6 h-screen overflow-y-scroll w-4/5 text-white">
      <h1 className="text-3xl text-center font-extrabold tracking-wide mb-6">
        Profile
      </h1>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="border border-zinc-700 rounded-xl shadow-xl p-8 w-full max-w-lg text-zinc-300">
          <h2 className="text-2xl font-bold mb-6">Student Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-zinc-400">Nama:</p>
              <p className="text-xl font-light">{userData.name}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Email:</p>
              <p className="text-xl font-light">{userData.email}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">NIM:</p>
              <p className="text-xl font-light">{userData.NIM}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Kelas:</p>
              <p className="text-xl font-light">{userData.class}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Kontak:</p>
              <p className="text-xl font-light">{userData.contact}</p>
            </div>
          </div>
          <button className="mt-8 w-full py-2 rounded-lg border border-zinc-700 bg-zinc-700/60 hover:bg-zinc-600/70 text-white font-semibold transition-all duration-200 ease-in-out transform hover:scale-105">
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
}
