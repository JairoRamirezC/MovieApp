import { useState } from 'react';
import type { SyntheticEvent } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const ErrorComponent = () => {
  const [open, setOpen] = useState(true);

  const handleClose = (event:SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
      event
    }
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      message="Error al cargar Resultado de Busqueda. Intenta de nuevo"
      action={action}
    />
  )
}