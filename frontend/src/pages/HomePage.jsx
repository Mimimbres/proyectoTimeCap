import React from "react";
import { Outlet } from "react-router-dom";
import { Typography, Container } from "@mui/material";

export const HomePage = () => {
  return (
    <Container>
      <Typography variant="h1" component="h1" gutterBottom>
        Bienvenido a TimeCapsule
      </Typography>
      <Typography variant="body1" gutterBottom>
        TimeCapsule es una plataforma dedicada a crear cápsulas de tiempo
        personalizadas. ¿Alguna vez has deseado enviar un mensaje a tu "yo" del
        futuro? Con TimeCapsule, ahora puedes hacerlo. Crea cápsulas de tiempo
        llenas de recuerdos, canciones, fotos o cartas, y déjalas cerradas
        hasta el momento perfecto en el futuro.
      </Typography>

      <Typography variant="body1" gutterBottom>
        Utiliza TimeCapsule para recordar momentos especiales, motivarte a ti
        mismo en el futuro o incluso dejar mensajes para tus seres queridos.
        La imaginación es el límite.
      </Typography>

      <Typography variant="body1" gutterBottom>
        ¡Comienza hoy mismo a crear tus propias cápsulas de tiempo y prepárate
        para sorprenderte a ti mismo en el futuro!
      </Typography>
      <Outlet />
    </Container>
  );
};

