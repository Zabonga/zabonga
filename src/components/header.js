import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gerenciador de Tarefas
        </Typography>
        <Button 
          color="inherit" 
          onClick={() => navigate('/tarefa/criar')}
        >
          Criar Tarefa
        </Button>
        <Button 
          color="inherit" 
          onClick={() => navigate('/tarefa')}
        >
          Listar Tarefas
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;