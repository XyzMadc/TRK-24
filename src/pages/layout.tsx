import { Router, useRouter } from "next/router";
import Sidebar from "../components/layout/sidebar";
import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const { pathname } = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex justify-center items-center bg-black">
          <Spinner size={"xl"} color="white" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row bg-black min-h-screen">
          {!pathname.startsWith("/auth") && <Sidebar />}
          {children}
        </div>
      )}
    </>
  );
}
