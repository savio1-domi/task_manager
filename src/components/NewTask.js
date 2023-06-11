import React, { useState } from "react";
import { Box, Heading, Input, Button, ChakraProvider, ColorModeScript } from "@chakra-ui/react";

function NewTask() {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the task or handle form submission
    // ...

    // Clear the input field after submission
    setTask("");
  };

  return (
    <Box>
      <Heading as="h2" size="md" mb={4}>
        New Task
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          mb={4}
        />
        <Button type="submit" colorScheme="blue">
          Add Task
        </Button>
      </form>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <NewTask />
    </ChakraProvider>
  );
}

export default App;
