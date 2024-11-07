// pages/[username].tsx
import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { doc, getDoc } from "firebase/firestore";
import { UserData } from "@/types/type";
import { db } from "@/lib/firebase/init";
import { formatUrls } from "@/utils/formatUrls";

interface UserProfileProps {
  userData: UserData;
}

export default function UserProfile({ userData }: UserProfileProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  const isOwnProfile = session?.user?.nim === userData.nim;

  return (
    <>
      <Head>
        <title>{userData.name} | Profile</title>
      </Head>
      <main>
        <div>
          <h1>{userData.name} Profile</h1>
          <p>NIM: {userData.nim}</p>
          {/* Add more user data here */}
          {isOwnProfile && <button>Edit Profile</button>}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const username = context.params?.username as string;

  if (!username) {
    return { notFound: true };
  }

  try {
    // First, try to get the user by the exact username from the URL
    let userDoc = await getDoc(doc(db, "users", username));

    // If not found, try with the normalized version of the username
    if (!userDoc.exists()) {
      const normalizedUsername = formatUrls(username);
      userDoc = await getDoc(doc(db, "users", normalizedUsername));
    }

    if (!userDoc.exists()) {
      return { notFound: true };
    }

    const userData = userDoc.data() as UserData;

    return {
      props: {
        userData: JSON.parse(JSON.stringify(userData)),
      },
    };
  } catch (error) {
    console.error("Error fetching user:", error);
    return { notFound: true };
  }
};
