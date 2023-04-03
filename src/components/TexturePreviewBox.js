import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

const TexturePreviewBox = ({texture, selectTexture, selected}) => {
  const theme = useTheme();

  return (
      <Grid item xs={4} style={{ 
        backgroundClip: 'content-box',
        backgroundColor: 'black',
        textAlign: 'center',
        borderColor: theme.palette.custom.pink,
        borderWidth: selected ? '1px' : '0px',
        borderStyle: 'solid',
        padding: '10px',
        minWidth: 'fit-content',
        minHeight: 'fit-content',
      }}>
        <IconButton onClick={selectTexture}>
          <img src={texture} width={'100px'}/>
        </IconButton>
      </Grid>
  )
}

export default TexturePreviewBox;