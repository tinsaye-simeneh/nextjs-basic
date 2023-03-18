import Link from "next/link";
import { useState, useEffect } from "react";
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
import supabase from "../../utilities/supabaseClient";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };

  useEffect(() => {
    const userData = async () => {
      const { data, error } = await supabase.auth.getUser();
      console.log(data);
  };
    userData();
  }, []);

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
