import Head from "next/head";
import { useEffect } from "react";
import {
  MantineProvider,
  Button,
  Container,
  Text,
  Image,
  Group,
} from "@mantine/core";
import Link from "next/link";
import supabase from "../utilities/supabaseClient";

export default function Home() {

  useEffect(() => {
    const { data, error } = supabase.auth.getUser(
      localStorage.getItem("supabase.auth.token")
    )
  }, []);

  return (
    <>
      <Head>
        <title>Next.js Basic App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Roboto",
          textDecoration: "none",
        }}
      >
        Home Page
      </MantineProvider>
    </>
  );
}
