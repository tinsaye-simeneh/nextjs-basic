import next from "next";
import { useState } from "react";
import { MantineProvider, Flex, Paper, Button, TextInput } from "@mantine/core";
import supabase from "../../utilities/supabaseClient";

const Lessoncrud = () => {
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [id, setId] = useState("");

    const AddLesson = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("lessons")
            .insert([{ title: title, description: description }]);
        };

    const UpdateLesson = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("lessons")
            .update({ title: title, description: description })
            .eq("id", id);
    };

    const DeleteLesson = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase
            .from("lessons")
            .delete()
            .eq("id", id);
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
                    }
                    }
                />
                <TextInput
                    label="Description"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }
                    }
                />
                <TextInput
                    label="Id"
                    onChange={(e) => {
                        setId(e.target.value);
                    }
                    }
                />
                <Button onClick={AddLesson}>Add</Button>
                <Button onClick={UpdateLesson}>Update</Button>
                <Button onClick={DeleteLesson}>Delete</Button>
            </Flex>
        </MantineProvider>
    );
};

export default Lessoncrud;


