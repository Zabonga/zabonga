import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function CriarTarefa() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Recuperar tarefas existentes
    const tarefasExistentes = JSON.parse(localStorage.getItem('tarefas') || '[]');
    
    // Criar nova tarefa
    const novaTarefa = {
      id: Date.now(), // Usar timestamp como ID
      titulo,
      descricao
    };
    
    // Adicionar nova tarefa à lista
    const novasTarefas = [...tarefasExistentes, novaTarefa];
    
    // Salvar no localStorage
    localStorage.setItem('tarefas', JSON.stringify(novasTarefas));
    
    // Redirecionar para a lista
    navigate('/tarefa');
  };

  return (
    <Grid container justifyContent="center" sx={{ padding: 2 }}>
      <Grid item xs={12} sm={8} md={6}>
        <Card>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ mt: 2 }}
              >
                Criar Tarefa
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CriarTarefa; 