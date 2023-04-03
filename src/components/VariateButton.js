import React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const VariateButton = ({variate}) => {
  const theme = useTheme();

  return (
    <Button
      variant={'contained'}
      onClick={variate}
      style={{
        width: '100%',
        color: theme.palette.button.text,
        backgroundColor: theme.palette.button.primary,
        borderColor: theme.palette.button.outline,
        borderStyle: 'solid',
        borderWidth: '1px'
      }}
    >
      Variate
    </Button>
  )
}

export default VariateButton