import { Outlet } from "react-router-dom";
import { useCapsules } from "../hooks/useCapsules";

export const HomePage = () => {
  const { getAllCapsules } = useCapsules();
  const {data, isLoading} = getAllCapsules();

  isLoading && <h1>Loading...</h1>
  return (
    <div>
      <h1>HomePage</h1>
        <p>{JSON.stringify(data)}</p>
      <Outlet />
    </div>
  );
};
