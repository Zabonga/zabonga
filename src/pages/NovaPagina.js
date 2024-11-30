import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function NovaPagina() {
  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4">Minha Nova Página</Typography>
        <Typography paragraph>
          Conteúdo da nova página aqui...
        </Typography>
      </Box>
    </Container>
  );
}

export default NovaPagina; 