import { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { queriesOptions } from "./../configs/queriesOption";
import DefautLayout from "../layouts/DefautLayout";
import UserPanelLayout from "@/layouts/UserPanelLayout";
import AuthLayout from "../layouts/AuthLayout";
import "../styles/Global.css";
import { Toaster } from "react-hot-toast";

const layouts = {
  auth: AuthLayout,
  panel: UserPanelLayout,
  default: DefautLayout,
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const queryClient = new QueryClient(queriesOptions);

  // Determine layout based on route
  const getLayout = () => {
    const { pathname } = router;

    if (pathname.startsWith("/auth") || pathname === "/resetpassword") {
      return layouts.auth;
    }
    if (pathname.startsWith("/userpanel")) {
      return layouts.panel;
    }
    return layouts.default;
  };

  const Layout = getLayout();

  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
            <Toaster
                position="top-center"
                toastOptions={{
                  className:
                    "font-peyda text-sm !text-white !bg-primary-lighter dark:!bg-primary-darker",
                }}></Toaster>
          </Layout>
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
