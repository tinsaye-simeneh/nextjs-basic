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
        <Group position="center">
          <Container size="xl" padding="xl" align="center">
            <Text size="xl" weight="bold" color="red">
              Welcome to Next.js!
            </Text>
            <Group position="center">
              <Button color="blue" mt="lg" variant="filled">
                <Link
                  color="red"
                  mt="lg"
                  variant="filled"
                  href="/account/login"
                >
                  {" "}
                  Login{" "}
                </Link>
              </Button>
            </Group>
            <Group position="center">
              <Button
                color="green"
                mt="lg"
                variant="filled"
              >
                 <Link
                  color="white"
                  mt="lg"
                  variant="filled"
                  href="/account/signup"
                >
                {" "}
                Register{" "}
                </Link>
              </Button>
            </Group>
          </Container>
        </Group>
      </MantineProvider>
    </>
  );
}
