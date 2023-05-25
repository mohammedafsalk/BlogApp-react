import { useState, useEffect } from "react";

function useFetch(url) {
  const [item, setItem] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching Not Completed.Some Error Occurred");
          }
          return res.json();
        })
        .then((data) => {
          setItem(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 2000);
  }, [url]);
  return { item, pending, error };
}

export default useFetch;
