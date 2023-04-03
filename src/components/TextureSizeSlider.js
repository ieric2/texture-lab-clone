import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TextureSizeSlider = () => {
  const theme = useTheme();
  const [value, setValue] = useState(50);

  return (
    <Box style={{paddingTop: '20px'}}>
      <Typography color={theme.palette.text.secondary}>
        Texture size
      </Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => {setValue(newValue)}}
        style={{color: theme.palette.custom.gamePurple}}
      />
    </Box>
  )
}

export default TextureSizeSlider