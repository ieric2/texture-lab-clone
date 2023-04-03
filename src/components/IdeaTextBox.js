import React from 'react';

import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

const IdeaTextBox = ({ ideaText, setIdeaText}) => {
  const theme = useTheme();

  return (
    <TextField
      variant={'outlined'}
      label={ideaText == '' ? 'Describe your idea here' : ''}
      multiline
      rows={3}
      value={ideaText}
      onChange={(e) => {setIdeaText(e.target.value)}}
      style={{
        color: theme.palette.custom.white,
        backgroundColor: theme.palette.custom.backgroundColor,
        width: '100%',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: theme.palette.custom.borderPurple,
        borderRadius: '12px',
      }}
    />
  )
}


export default IdeaTextBox;