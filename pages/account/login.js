import Link from "next/link";
import { useState } from "react";
import {
  MantineProvider,
  Text,
  Button,
  Container,
  Input,
  Group,
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
    const {data, error} = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Roboto",
        components: {
          Text: {
            defaultProps: { color: 'red' },
          },
        },
      }}
    >
      <Container size="md" padding="xl" align="center" bg="red">
        <Text size="xl" weight="bold">
          Login
        </Text>
        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="red" mt="lg" variant="filled"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Group position="center">
          <Link href="/account/signup">Register</Link>
        </Group>
      </Container>
    </MantineProvider>
  );
};

export default Login;
