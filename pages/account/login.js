import Link from "next/link";
import { MantineProvider, Text, Button, Container, Input, Group } from "@mantine/core";
import { createClient } from '@supabase/supabase-js'

const Login = () => {
  const supabase = createClient('https://nextlogin.supabase.co', 'public-anon-key')

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Roboto",
      }}
    >
      <Container size="md" padding="xl" align="center">
        <Text size="xl" weight="bold" color="green">
          Login
        </Text>
        <Input placeholder="Email"/>
        <Input placeholder="Password" />
        <Button color="red" mt="lg" variant="filled">
          Login
        </Button>
        <Group position="center">
          <Link href="/account/register">Register</Link>
        </Group>
      </Container>
    </MantineProvider>
  );
};

export default Login;
