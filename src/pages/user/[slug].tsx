// src/pages/user/[slug].tsx

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import UserProfile from "@/components/pages/client/user";

export default function UserProfilePage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }

  const userSlug = session.user.name.toLowerCase().replace(/\s+/g, "-");

  if (typeof slug === "string" && slug !== userSlug) {
    router.push("/404");
    return null;
  }

  const userData = {
    id: session.user.id,
    name: session.user.name,
    nim: session.user.nim,
    role: session.user.role,
    typeClass: session.user.typeClass,
    password: "", // add the missing properties here
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return <UserProfile userData={userData} />;
}
