import React from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import { useCapsules } from "../hooks/useCapsules";
import { useParams } from "react-router-dom";

export const GetCapsule = () => {
  const { id } = useParams();
  const { getCapsule } = useCapsules();
  const { capsule, isLoading } = getCapsule(id);

  if (isLoading) {
    return <CircularProgress />;
  }

  // Formatear la fecha de creación
  const createdAtFormatted = new Date(capsule.createdAt).toLocaleString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <Card variant="outlined" sx={{ borderRadius: 4, width: '25%' }}>
          <CardContent>
            <Typography variant="h5" component="h1" gutterBottom>
              Nombre de la cápsula: {capsule.capsuleName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fecha de creación: {createdAtFormatted}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fecha de cierre: {capsule.closeTime}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Canciones🎶:
            </Typography>
            <ul>
              {capsule.songs && capsule.songs.map((song, index) => (
                <li key={index}>
                  <Typography variant="body2">{song}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


