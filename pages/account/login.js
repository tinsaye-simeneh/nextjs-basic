import Link from "next/link";
import { useState } from "react";
import {
  MantineProvider,
  Flex,
  TextInput,
  Button,
  Input,
  Group,
  Paper,
  Text,
  Box,
  Grid,
  Container,
  Image,
} from "@mantine/core";
import { createClient } from "@supabase/supabase-js";
import { createApi } from "@reduxjs/toolkit/query";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const supabase = createClient(
    "https://qzjslkpjkpsfzopbtshj.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6anNsa3Bqa3BzZnpvcGJ0c2hqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NjYxNjYsImV4cCI6MTk5NDQ0MjE2Nn0.J_9hk9n81eJEDkCUV5BegTM18w4nI1EY-k74kY2GISk"
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Roboto",
        components: {
          TextInput: {
            defaultProps: {
              radius: "sm",
              w: {
                base: "100%",
                sm: "100%",
                lg: "100%",
              },
            },
          },
          Button: {
            defaultProps: {
              radius: "sm",
              w: {
                base: "100%",
                sm: "100%",
                lg: "100%",
              },
            },
          },
          Box: {
            defaultProps: {
              radius: "sm",
              w: {
                base: "100%",
                sm: "100%",
                lg: "100%",
              },
            },
          },
        },
      }}
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap={{ base: "sm", sm: "lg" }}
        justify={{ sm: "center" }}
        align={{ sm: "center" }}
        w={{
          base: "100%",
          sm: "100%",
          lg: "90%",
        }}
      >
        <Box>
          <Image src="/Images/Login.svg" pt={60} fit="cover" />
        </Box>
        <Box bg="white" px={{ base: "10%", sm: "10%", lg: "0%" }}>
          <Text
            size="xl"
            weight="bold"
            color="black"
            td="underline"
            my="10%"
            mx="auto"
            align="center"
          >
            Login
          </Text>

          <TextInput
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            mx="auto"
            mb="lg"
          />
          <TextInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            my="5%"
            mx="auto"
          />
          <Group position="center" mt="lg" color="black">
            <Button
              href="/account/dashboard"
              color="orange"
              mt="lg"
              mx="auto"
              align="center"
              w={500}
              variant="filled"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Group>
          <Group position="center" mt="lg" color="black">
            Don't have an account?
            <Link href="/account/signup">Register</Link>
          </Group>
        </Box>
      </Flex>
    </MantineProvider>
  );
};

export default Login;
