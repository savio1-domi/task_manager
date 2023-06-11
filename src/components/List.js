import React, { useState } from "react";
import { Box, Text, Checkbox } from "@chakra-ui/react";
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
    <Box className="List" display="flex" flexDirection="row" gap="8px">
      <Text onClick={handleClick}>{data.name}</Text>
      <Checkbox onChange={checkDone} />
      <svg
        onClick={updatePost}
        style={{
          margin: "0 10px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-pencil-square"
        viewBox="0 0 16 16"
      >
        {/* Pencil SVG path */}
      </svg>
      <svg
        onClick={deleteItem}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="red"
        className="bi bi-trash3-fill"
        viewBox="0 0 16 16"
      >
        {/* Trash SVG path */}
      </svg>
      {updater ? <UpdateTask id={id} /> : ""}
      <div>{isSelected ? <SelectedTask item={data} /> : ""}</div>
    </Box>
  );
}

export default List;
