import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string, options: AxiosRequestConfig) => {
  const [data, setData] = useState<any | null>(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios({ url, ...options })
      .then((response) => {
        if (!response.status) {
          throw Error("Couldn't fetch data");
        }
        console.log(response);
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err: any) => {
        console.log(err);
        setIsPending(false);
        setError(err);
        setData(null);
      });
    console.log(data);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
