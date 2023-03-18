import next from "next";
import { useState } from "react";
import { MantineProvider, Flex, Paper, Button, TextInput } from "@mantine/core";
import supabase from "../../utilities/supabaseClient";

const Lessons = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const AddLesson = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("lessons")
      .insert([{ title: title, description: description }]);
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        fontFamily: "Roboto",
      }}
    >
      <Flex direction="column" align="center" justify="center">
        <Paper shadow="md" padding="lg" radius="md">
          <h1>Lessons</h1>
        </Paper>
        <TextInput
          label="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextInput
          label="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button onClick={AddLesson}>Add</Button>
      </Flex>
    </MantineProvider>
  );
};

export default Lessons;
