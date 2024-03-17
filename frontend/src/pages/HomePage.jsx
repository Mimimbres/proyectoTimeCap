import { Outlet, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const {getAllCapsules} = getAllCapsules();
  console.log(getAllCapsules);
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Homepage
      </Typography>

      <Typography variant="body1">
        Welcome to the homepage! This template provides a simple container 
        and header. You can build out additional sections and content from here.
      </Typography>
      <Outlet />
    </Container>
  );
};

