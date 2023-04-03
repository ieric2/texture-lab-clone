import React from 'react';
import { useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';

import TextureSizeSlider from './TextureSizeSlider';
import DownloadMenu from './DownloadMenu';
import VariateButton from './VariateButton';
import Sphere from '../rendering/Sphere';

const TextureViewerPanel = ({selectedTexture}) => {
  const theme = useTheme();
  const variate = () => {
    // TODO: implement variate function
  }

  return (
    <Grid container direction='column' rowSpacing={3} style={{
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.palette.custom.borderPurple,
      borderRadius: '16px',
      padding: '20px',
    }}>
      <Grid item >
        <Sphere textureName={selectedTexture}/>
      </Grid>
      <Grid item>
        <TextureSizeSlider/>
      </Grid>
      <Grid item>
        <VariateButton variate={variate}/>
      </Grid>
      <Grid item>
        <DownloadMenu textureName={selectedTexture}/>
      </Grid>
    </Grid>
  )
}

export default TextureViewerPanel