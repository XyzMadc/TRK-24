import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "../components/layout/sidebar";
import { useRouter } from "next/router";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const { pathname } = useRouter();
  return (
    <SessionProvider session={session}>
      <ChakraProvider>
        <main className="flex flex-col lg:flex-row bg-black min-h-screen">
          {pathname !== "/auth/login" && <Sidebar />}
          <Component {...pageProps} />
        </main>
      </ChakraProvider>
    </SessionProvider>
  );
}
