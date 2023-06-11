import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function SelectedTask({ item }) {
  return (
    <Box className="selectedList">
      <Table>
        <caption>Transaction history</caption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Created At</Th>
            <Th>Updated At</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{item.id}</Td>
            <Td>{item.name}</Td>
            <Td>{item.description}</Td>
            <Td>{item.created_at}</Td>
            <Td>{item.updated_at}</Td>
            {/* <Td
              style={{ cursor: "pointer" }}
              onClick={() => deleteTransaction(description.id)}
            >
              X
            </Td> */}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default SelectedTask;
