import React from 'react';
import { CircularProgress, Button, Card, CardContent, Typography } from '@mui/material';
import { useParams, useNavigate } from "react-router-dom";
import { useCapsules } from "../hooks/useCapsules";

export const GetCapsule = () => {
  const { id } = useParams();
  const { getCapsule, deleteCapsule } = useCapsules();
  const { capsule, isLoading } = getCapsule(id);
  const navigate = useNavigate();
  const { mutate: deleteCap } = deleteCapsule(id); 
  const handleDelete = ( ) => {
    deleteCap();
    navigate('/capsules')
    }

 

  if (isLoading) {
    return <CircularProgress />;
  }

  // Format the creation date
  const createdAtFormatted = new Date(capsule.createdAt).toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <div style={{ margin: '20px' }}> 
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <Card variant="outlined" sx={{ borderRadius: 4, width: '25%' }}>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Capsule Name: {capsule.capsuleName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Creation Date: {createdAtFormatted}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Closing Date: {capsule.closeTime}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Songs🎶:
              </Typography>
              <ul>
                {capsule.songs && capsule.songs.map((song, index) => (
                  <li key={index}>
                    <Typography variant="body2">{song}</Typography>
                  </li>
                ))}
              </ul>
              <Button variant="contained" color="primary" onClick={() => navigate(`/update/${id}`)}>Update</Button>
              <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
