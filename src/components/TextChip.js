import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


const TextChip = ({text, selectChip}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={selectChip}
      style={{
        color: theme.palette.custom.purple,
        backgroundColor: theme.palette.custom.darkPurple,
        borderColor: theme.palette.custom.borderPurple,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '8px',
        textTransform: 'none',
        padding: '8px, 12px, 8px, 12px',
        minWidth: 'fit-content',
        marginRight: '8px'
      }}
    >
      {text}
    </Button>
  )
}

export default TextChip