import React, { useState, useEffect } from "react";
import { Box, Spinner, Alert, AlertIcon } from "@chakra-ui/react";

function Fetch({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((data) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
        setIsLoading(false);
      });
  }, [url]);

  if (isLoading) {
    return (
      <Box textAlign="center" p={4}>
        <Spinner size="lg" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" p={4}>
        <Alert status="error">
          <AlertIcon />
          Error occurred while fetching data.
        </Alert>
      </Box>
    );
  }

  return (
    <div>
      {/* Render your data here */}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Fetch;
