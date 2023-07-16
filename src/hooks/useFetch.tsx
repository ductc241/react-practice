import { useEffect, useState } from "react";
import instance from "../axios/instance";

interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

function useFetch<T = unknown>(url: string): State<T> {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await instance.get<T>(url);

        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error as Error);
      }
    })();
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
