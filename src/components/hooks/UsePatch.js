import { useState, useEffect } from "react";
function usePatch(url) {
  const [error, setError] = useState(null);
  const [patchResponse, setPatchResponse] = useState(null);

  const patch = (body) => {
    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        setPatchResponse(data);
      })
      .catch((err) => {
        console.error(err.message);
        setError(err);
      });
  };

  useEffect(() => {
    setPatchResponse(null);
    setError(null);
  }, [url]);

  return { error, patchResponse, patch };
}

export default usePatch;
