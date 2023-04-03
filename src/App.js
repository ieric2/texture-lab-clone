import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import TexturePickerPanel from './components/TexturePickerPanel';
import TextureCreatorPanel from './components/TextureCreatorPanel';
import TextureViewerPanel from './components/TextureViewerPanel';

import iceTexture from './assets/texture-previews/ice.png';
import pavingStoneTexture from './assets/texture-previews/paving-stone.png';

// TODO: Un-hard code this list.
const texturePreviews = [{name:'ice', texture: iceTexture}, {name: 'paving-stone', texture: pavingStoneTexture}, {name: 'paving-stone', texture: pavingStoneTexture}, {name: 'paving-stone', texture: pavingStoneTexture}, {name: 'paving-stone', texture: pavingStoneTexture}, {name: 'paving-stone', texture: pavingStoneTexture}];

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [sampleTextureIndex, setSampleTextureIndex] = useState(0);
  const [mobileTabIndex, setMobileTabIndex] = useState(0);


  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, paddingY: 4 }}>
        {!isMobile 
        ?
        <Grid container direction={'row'} alignItems='flex-start' spacing={6}>
          <Grid item xs={12} md={6}>
            <Grid container direction='column' alignItems='center' rowSpacing={5}>
              <Grid item style={{ width: '100%' }}>     
                <TextureCreatorPanel/>
              </Grid>
              <Grid item style={{ width: '100%'}}>
                <TextureViewerPanel selectedTexture={texturePreviews[sampleTextureIndex].name}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <TexturePickerPanel sampleTextureIndex={sampleTextureIndex} setSampleTextureIndex={setSampleTextureIndex} texturePreviews={texturePreviews} isMobile={isMobile}/>
          </Grid>
        </Grid>
        :
        <Grid container direction={'column'} alignItems='flex-start' spacing={6}>
          <Grid item xs={12}>
            <Tabs onChange={(e, newValue) => {setMobileTabIndex(newValue)}} value={mobileTabIndex}>
              <Tab label="Free Textures"/>
              <Tab label="Create Custom Texture"/>
            </Tabs>
          </Grid> 
          { mobileTabIndex == 0 &&
            <Grid item style={{ width: '100%'}} xs={12}>
              <TexturePickerPanel sampleTextureIndex={sampleTextureIndex} setSampleTextureIndex={setSampleTextureIndex} texturePreviews={texturePreviews} isMobile={isMobile}/>
            </Grid>
          }
          { mobileTabIndex == 1 &&
            <Grid item style={{ width: '100%'}} xs={12}>
              <TextureCreatorPanel/>
            </Grid>
          }
          <Grid item style={{ width: '100%'}}>
            <TextureViewerPanel selectedTexture={texturePreviews[sampleTextureIndex].name}/>
          </Grid>
        </Grid>
        }
      </Box>
    </Container>
  );
}

export default App;
