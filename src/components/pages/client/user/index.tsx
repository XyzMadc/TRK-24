// src/components/pages/client/user/index.tsx

import { UserData } from "@/types/type";
import { Avatar, useToast, useDisclosure } from "@chakra-ui/react";
import { ResetPasswordModal } from "@/components/modals/resetpassword/resetPasswordModal";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";

interface UserProfileProps {
  userData: UserData;
}

export default function UserProfile({ userData }: UserProfileProps) {
  const toast = useToast();
  const {
    isOpen: isResetPasswordModalOpen,
    onOpen: onResetPasswordModalOpen,
    onClose: onResetPasswordModalClose,
  } = useDisclosure();

  const handleResetPassword = async ({
    currentPassword,
    newPassword,
    confirmPassword,
  }: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  }) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      toast({
        title: "User  not logged in",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirmation do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        user.email as string,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      toast({
        title: "Password reset successful",
        description: "Your password has been updated",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onResetPasswordModalClose();
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error resetting password:", error);
        toast({
          title: "Error resetting password",
          description:
            error.message || "Please check your current password and try again",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        console.error("Unknown error:", error);
        toast({
          title: "Unknown error",
          description: "An unknown error occurred",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <section className="p-6 h-screen overflow-y-scroll lg:w-4/5 text-white">
      <h1 className="text-3xl text-center font-extrabold tracking-wide mb-6">
        {`Selamat Datang, ${userData.name}!`}
      </h1>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="border border-zinc-700 rounded-xl shadow-xl p-8 w-full max-w-lg text-zinc-300">
          <div className="flex items-center gap-4 mb-6">
            <Avatar
              size="xl"
              name={userData.name}
              src={userData.imageURL}
              className="border-2 border-zinc-600"
            />
            <div>
              <h2 className="text-2xl font-bold">{userData.name}</h2>
              <p className="text-zinc-400 capitalize">
                {userData.role} of {userData.typeClass}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-zinc-400">NIM:</p>
              <p className="text-xl font-light">{userData.nim}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Name:</p>
              <p className="text-xl font-light">{userData.name}</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Kelas:</p>
              <p className="text-xl font-light">{userData.typeClass}</p>
            </div>
          </div>

          <button
            onClick={onResetPasswordModalOpen}
            className="w-full mt-8 py-2 rounded-lg border border-zinc-700 bg-zinc-700/60 hover:bg-zinc-600/70 text-white font-semibold transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Reset Password
          </button>
        </div>
      </div>

      <ResetPasswordModal
        isOpen={isResetPasswordModalOpen}
        onClose={onResetPasswordModalClose}
        onSubmit={handleResetPassword}
      />
    </section>
  );
}
