import Head from "next/head";
import styles from "../styles/Home.module.css";
import { MantineProvider, Button, Container, Text, Image } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Head className={styles.container}>
        <title>Next.js Basic App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          fontFamily: "Roboto",
        }}
      >
        <Container size="xl" padding="xl" align="center">
          <Text size="xl" weight="bold" color="red">
            Welcome to Next.js!
          </Text>
          <Image src="/images/profile.jpg" width={200} height={200} />
          <Button variant="outline" color="red" mt="lg">
            {" "}
            Test Button{" "}
          </Button>
        </Container>
      </MantineProvider>
    </>
  );
}
