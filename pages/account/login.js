import Link from "next/link";
import { useState } from "react";
import {
  MantineProvider,
  TextInput,
  Button,
  Input,
  Group,
  Paper,
  Text,
  Box,
  Container,
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
          Container: {
            defaultProps: {
              w: "100%",
              p: {
                xs: "lg",
                sm: "xl",
              },
             
            },
          },
          Text: {
            defaultProps: {
              size: "xl",
              weight: "bold",
              color: "black",
              td: "underline",
              mb: {
                xs: "lg",
              },
              mt: {
                xs: "xl",
              },
            },
          },
        },
      }}
    >
      <Box
      w={{ base: 400, sm: 600, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      px={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg="blue.7"
      c="#fff"
      ta="center"
      mx="auto"
    >
        <Paper shadow="sm" radius="lg" p="xl" mb="lg">
          <Text
            size="xl"
            weight="bold"
            color="black"
            td="underline"
            mb="lg"
            mt="lg"
          >
            Login
          </Text>

          <TextInput
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            mb="lg"
          />
          <TextInput
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            mb="lg"
          />
          <Button color="red" mt="lg" variant="filled" onClick={handleLogin}>
            Login
          </Button>
          <Group position="center" mt="lg">
            <Link href="/account/signup">Register</Link>
          </Group>
        </Paper>
      </Box>
    </MantineProvider>
  );
};

export default Login;
