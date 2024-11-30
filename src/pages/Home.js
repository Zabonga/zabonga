import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Bem-vindo à Nossa Aplicação
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/800x600?technology"
              alt="tecnologia"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Tecnologia
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore as últimas novidades em tecnologia e inovação.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/800x600?coding"
              alt="programação"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Programação
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Aprenda as melhores práticas de desenvolvimento.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image="https://source.unsplash.com/random/800x600?innovation"
              alt="inovação"
            />
            <CardContent>
              <Typography gutterBottom variant="h5">
                Inovação
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Descubra as tendências que estão moldando o futuro.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home; 