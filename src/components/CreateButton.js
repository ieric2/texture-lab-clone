import React from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';


const CreateButton = ({ideaText, create}) => {
  const theme = useTheme();

  const disabled = ideaText == '';

  return (
    <Button
      variant={'contained'}
      onClick={create}
      style={{
        width: '100%',
        color: disabled ? theme.palette.custom.borderPurple : theme.palette.button.text,
        backgroundColor: disabled ? theme.palette.custom.background : theme.palette.button.primary,
        borderColor: disabled ? theme.palette.custom.borderPurple : theme.palette.button.outline,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '8px',
      }}
      disabled={disabled}
    >
      Create
    </Button>
  )
}

export default CreateButton;