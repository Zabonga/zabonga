import React, { useState, useEffect } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function EditarTarefa() {
  const [tarefa, setTarefa] = useState({
    titulo: '',
    descricao: ''
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // Carregar tarefas do localStorage
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const tarefaEncontrada = tarefas.find(t => t.id === parseInt(id));
    
    if (tarefaEncontrada) {
      setTarefa(tarefaEncontrada);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Atualizar tarefa no localStorage
    const tarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');
    const tarefasAtualizadas = tarefas.map(t => 
      t.id === parseInt(id) ? { ...tarefa, id: parseInt(id) } : t
    );
    
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas));
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
                value={tarefa.titulo}
                onChange={(e) => setTarefa({ ...tarefa, titulo: e.target.value })}
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Descrição"
                value={tarefa.descricao}
                onChange={(e) => setTarefa({ ...tarefa, descricao: e.target.value })}
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                sx={{ mt: 2, mr: 1 }}
              >
                Salvar
              </Button>
              <Button 
                variant="outlined"
                onClick={() => navigate('/tarefa')}
                sx={{ mt: 2 }}
              >
                Cancelar
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default EditarTarefa; 