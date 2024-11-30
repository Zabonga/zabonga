import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, Button, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

function ListarTarefa() {
  const [tarefas, setTarefas] = useState([]);
  const navigate = useNavigate();

  // Carregar tarefas do localStorage quando o componente montar
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    }
  }, []);

  // Função para deletar uma tarefa
  const handleDelete = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
  };

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {tarefas.length === 0 ? (
        <Grid item xs={12}>
          <Typography variant="h6" align="center" color="textSecondary">
            Nenhuma tarefa encontrada. Crie uma nova tarefa!
          </Typography>
        </Grid>
      ) : (
        tarefas.map(tarefa => (
          <Grid item xs={12} sm={6} md={4} key={tarefa.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {tarefa.titulo}
                </Typography>
                <Typography color="textSecondary" paragraph>
                  {tarefa.descricao}
                </Typography>
                <Grid container spacing={1}>
                  <Grid item>
                    <Button 
                      variant="contained" 
                      onClick={() => navigate(`/tarefa/editar/${tarefa.id}`)}
                    >
                      Editar
                    </Button>
                  </Grid>
                  <Grid item>
                    <IconButton 
                      color="error" 
                      onClick={() => handleDelete(tarefa.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default ListarTarefa; 