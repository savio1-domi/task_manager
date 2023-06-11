import { Box, Heading, Button, Checkbox } from "@chakra-ui/react";
import FetchHook from "./hooks/Fetch.js";
import NewTask from "./NewTask.js";
import React, { useState } from "react";
import List from "./List.js";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState(false);
  const [completedFilter, setCompletedFilter] = useState(false);
  const { data, isLoading, error, setData } = FetchHook(
    "http://localhost:9292/all"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const deletePost = (id) => {
    fetch(`https://localhost:9292/delete/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
    setData(data.filter((item) => item.id !== id));
  };

  const toggleCompleted = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const filteredData = completedFilter ? data?.filter((item) => item.completed) : data;

  return (
    <Box className="listSection" marginBottom="3rem" display="flex" flexDirection="column">
      <Heading as="h2" size="lg">Welcome to Task Manager</Heading>
      <Heading as="h4" size="md">This is a platform where you can write tasks you plan to do</Heading>
      <img src={require("../assets/task-img.png")} alt="task_img" />
      <Button className="logOutBtn" style={{ float: "left" }} onClick={() => navigate("/")}>
        Log Out
      </Button>

      <p style={{ marginLeft: "-9rem" }}>Click here to add task 👇</p>
      <Button
        backgroundColor="transparent"
        color="black"
        onClick={() => setNewTask(!newTask)}
      >
        Add Task
      </Button>
      {newTask ? <NewTask /> : ""}
      <Box display="flex" flexDirection="column" margin="0 10px">
        <Box>
          <Checkbox
            id="completedFilter"
            name="completedFilter"
            isChecked={completedFilter}
            onChange={(e) => setCompletedFilter(e.target.checked)}
          >
            Show completed tasks only
          </Checkbox>
        </Box>

        {data && (
          <Box className="itemList">
            {filteredData.map((item) => (
              <List
                data={item}
                key={item.id}
                id={item.id}
                checkDone={() => toggleCompleted(item.id)}
                deleteItem={() => deletePost(item.id)}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default Home;
