import Head from "next/head";
import {
  MantineProvider,
  Button,
  Container,
  Text,
  Image,
  Group,
} from "@mantine/core";

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
        }}
      >
        <Group position="center">
          <Container size="xl" padding="xl" align="center">
            <Text size="xl" weight="bold" color="red">
              Welcome to Next.js!
            </Text>
            <Image src="/images/profile.jpg" width={200} height={200} />
            <Button color="red" mt="lg" variant="filled">
              {" "}
              Test Button{" "}
            </Button>
          </Container>
        </Group>
      </MantineProvider>
    </>
  );
}
