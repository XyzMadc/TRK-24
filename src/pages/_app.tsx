import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Sidebar from "../components/layout/sidebar";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <ChakraProvider>
      <main className="flex flex-col lg:flex-row bg-black min-h-screen">
        {pathname !== "/auth/login" && <Sidebar />}
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
