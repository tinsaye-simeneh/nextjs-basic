import {
  Anchor,
  Box,
  Button,
  Center,
  Flex,
  LoadingOverlay,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import Link from "next/link";
import { useState } from "react";
import supabase from "../../utilities/supabaseClient";

function ForgotPassword() {
  const [mode, setMode] = useState("mobile");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const form = useForm({
    initialValues: {
      email: "",
      phone: "",
      termsOfService: true,
    },
    // validationRules: {
    //   email: (value) => [
    //     {
    //       message: "Email is required",
    //       check: isNotEmpty(value),
    //     },
    //     {
    //       message: "Email is not valid",
    //       check: isEmail(value),
    //     },
    //   ],
    //   phone: (value) => [
    //     {
    //       message: "Phone is required",
    //       check: isNotEmpty(value),
    //     },
    //     {
    //       message: "Phone must be at least 10 characters long",
    //       check: hasLength(value, 10),
    //     },
    //   ],
    // },
  });

  const handleSubmit = async (values: any) => {
    setLoading(true);
    setError(undefined);

    const { error } = await supabase.auth.resetPasswordForEmail(values.email);

    if (error) {
      setError(error.message);
    } else {
      setMode("email");
    }

    setLoading(false);
  };

  return (
    <Stack spacing="xs">
      <Stack spacing={0}>
        <Title order={1} size="h3" mb={0}>
          Forgot password?
        </Title>
        <Text c="dimmed" fz="sm">
          Enter your phone or email to get reset link
        </Text>
      </Stack>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <LoadingOverlay visible={loading} />

        <TextInput
          mt="md"
          required
          placeholder="Your active phone or email"
          label="Phone or Email"
          {...form.getInputProps("email")}
        />

        {error && (
          <Text color="red" size="sm" mt="sm">
            {error}
          </Text>
        )}

        <Flex>
          <Link href="/auth/login" passHref>
            <Anchor color="dimmed" size="sm">
              <Center inline>
                <Box ml={5}>Back to login page</Box>
              </Center>
            </Anchor>
          </Link>
          <Button color="primary" type="submit">
            Reset password
          </Button>
        </Flex>
      </form>
    </Stack>
  );
}

export default ForgotPassword;
