import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import TextChip from './TextChip';
import TexturePreviewBox from './TexturePreviewBox';

import redPotion from '../assets/red-potion.svg';

// TODO: Un-hard code this list.
const textureTags = ['All', 'Building', 'Rock', 'Wood', 'Sand', 'Vegetable', 'Metal', 'Grass', 'Fruits', 'Sky', 'Ice', 'Food', 'Miscs']

const TexturePickerPanel = ({sampleTextureIndex, setSampleTextureIndex, texturePreviews, isMobile}) => {
  const theme = useTheme();
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);

  return (
    <Grid container direction='column' alignItems='center' justifyContent={'flex-start'} rowSpacing={3}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.custom.borderPurple,
        borderRadius: '16px',
        padding: '20px'}}
    >
      <Grid item>
        <Grid container direction={'column'}>
          <Grid item>
            <Grid container direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
              <Grid item>
                <img src={redPotion}/>
              </Grid>
              <Grid item>
                <Typography>
                READY TO USE FREE TEXTURE
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography color={theme.palette.text.secondary}>
              click to select the texture and make variations
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{width: '100%'}}>
        <Tabs variant='scrollable' value={selectedTagIndex}>
          {textureTags.map((textureTag, index) => 
            <TextChip key={index} text={textureTag} selectChip={() => {setSelectedTagIndex(index)}}/>
          )}
        </Tabs>
      </Grid>
      <Grid item style={{width: '100%'}}>
        {isMobile
        ?
          <Tabs variant='scrollable' indicatorColor={''} value={sampleTextureIndex}>
            {texturePreviews.map((texturePreview, index) =>
              <TexturePreviewBox key={index} texture={texturePreview.texture} selectTexture={() => setSampleTextureIndex(index)}/>
            )}
          </Tabs>
        :
          <Grid container direction={'row'} spacing={2}>
            {texturePreviews.map((texturePreview, index) => 
              <Grid item xs={4} key={index}>
                <TexturePreviewBox key={index} texture={texturePreview.texture} selectTexture={() => setSampleTextureIndex(index)}/>
              </Grid>
            )}
          </Grid>
        }
      </Grid>
    </Grid>
  )
}

export default TexturePickerPanel