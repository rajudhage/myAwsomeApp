import { useEffect, useState } from "react";

export const useFetch = (urls: string | string[]) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const urlList = Array.isArray(urls) ? urls : [urls];

    Promise.all(urlList.map((url) => fetch(url).then((res) => res.json())))
      .then((results) => {
        setData(results);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [urls]);

  return { data, loading, error };
};
