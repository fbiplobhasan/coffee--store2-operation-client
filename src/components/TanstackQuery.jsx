import { useQuery } from "@tanstack/react-query";

const TanstackQuery = () => {
  const {
    isPending,
    error,
    isError,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {},
  });

  if (isPending) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return <div></div>;
};

export default TanstackQuery;
