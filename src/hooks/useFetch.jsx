// import { useState, useEffect } from "react";
// import { fetchDataFromApi } from "../utils/api";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading("Loading...");
//     setData(null);
//     setError(null);

//     fetchDataFromApi(url)
//       .then((response) => {
//         setLoading(false);
//         setData(response);
//       })
//       .catch((err) => {
//         setLoading(false);
//         setError("Error!");
//       });
//   }, [url]);
//   return { data, loading, error };
// };

// export default useFetch;
import { useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);

    fetchDataFromApi(url)
      .then((response) => {
        setLoading(false);
        setData(response);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || "Error!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
