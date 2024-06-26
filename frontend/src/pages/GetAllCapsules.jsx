import { Link } from 'react-router-dom';
import { useCapsules } from '../hooks/useCapsules';
import { useAuth } from '../hooks/useAuth';
import { CircularProgress, Card, CardContent, Typography, Grid } from "@mui/material";

export const GetAllCapsules = () => {
  const auth = useAuth();
  const { getAllCapsules } = useCapsules();
  const { capsules, isLoading } = getAllCapsules(auth.currentUser.id);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <div style={{ margin: '20px' }}> 
      <Grid container spacing={3}>
        {capsules.map((capsule) => (
          <Grid item xs={12} sm={6} md={4} key={capsule.id}>
            <Link to={`/capsule/${capsule.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {capsule.capsuleName} 
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

