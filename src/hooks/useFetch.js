import { useState } from "react";
import { useQuery } from "react-query";

export const useFetch = (url, name) => {
  const [page, setPage] = useState(1);
  const fetchingData = async () => {
    try {
      const response = await fetch(`${url}${page}`);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error.message);
    }
  };
  const { status, data } = useQuery([name, page], fetchingData);
  return { status, data, setPage, page };
};
