import { useState, useEffect } from "react";

function useFetch(url) {
  const [item, setItem] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
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
          if (err.name === "AbortError") {
            console.log("Aborted");
          } else {
            setPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]);
  return { item, pending, error };
}

export default useFetch;
