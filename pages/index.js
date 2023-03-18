import Head from "next/head";
import {
  MantineProvider,
  Button,
  Container,
  Text,
  Image,
  Group,
} from "@mantine/core";
import Link from "next/link";

export default function Home() {
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
        Test
      </MantineProvider>
    </>
  );
}
