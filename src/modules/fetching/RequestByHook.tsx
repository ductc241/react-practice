import { isAxiosError } from "axios";
import useFetch from "../../hooks/useFetch";

const RequestByHook = () => {
  const { data: postList, error, loading } = useFetch<any[]>("/postss?_page=1");

  if (error) {
    if (!isAxiosError(error)) {
      return <p>Error</p>;
    }

    return <p>{error.message}</p>;
  }

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      {postList && postList.length === 0 && <p>No Data</p>}

      {postList && postList.length > 0 && <p>{JSON.stringify(postList)}</p>}
    </>
  );
};

export default RequestByHook;
