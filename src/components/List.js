import React, { useState } from "react";
import { Box, Text, Checkbox, Button } from "@chakra-ui/react";
import SelectedTask from "./SelectedTask";
import UpdateTask from "./UpdateTask";

function List({ data, deleteItem, id, checkDone }) {

  const [updater, setUpdater] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  const updatePost = () => {
    setUpdater(!updater);
  };

  return (
    <Box className="List">
      <Text className="List-text" onClick={handleClick} fontSize="*5">
        {data.name}
      </Text>
      {updater && <UpdateTask id={id} />}
      {isSelected && <SelectedTask item={data} />}
      <Checkbox onChange={checkDone} />
      <Button
        className="List-button"
        onClick={updatePost}
        colorScheme="blue" 
      >
        Edit
      </Button>
      <Button
        className="List-button"
        onClick={deleteItem}
        colorScheme="red"
      >
        Delete
      </Button>

    </Box>
  );
}

export default List;
