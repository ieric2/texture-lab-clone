import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';

import TextChip from './TextChip';
import CreateButton from './CreateButton';
import IdeaTextBox from './IdeaTextBox';

import orangePotion from '../assets/orange-potion.svg';

// TODO: Un-hard code this list.
const examplePrompts = ['Loreum ipsum', 'The quick brown fox jumped over the lazy brown', 'Loreum ipsum', 'Loreum ipsum']

const TextureCreatorPanel = () => {
  const theme = useTheme();
  const [ideaText, setIdeaText] = useState('');
  const [promptIndex, setPromptIndex] = useState(0);
  const create = () => {
    // TODO: implement create function
  }
  return (
    <Grid container
      direction='column'
      alignItems='left'
      textAlign='center'
      rowSpacing={3}
      style={{
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.custom.borderPurple,
        borderRadius: '16px',
        padding: '20px',
      }}>
      <Grid item>
        <Grid container direction={'row'} spacing={1} alignItems={'center'} justifyContent={'center'}>
          <Grid item>
            <img src={orangePotion}/>
          </Grid>
          <Grid item>
            <Typography>
              TEXTURE: PICK A VIBE STYLE FIRST
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <IdeaTextBox ideaText={ideaText} setIdeaText={setIdeaText}/>
      </Grid>
      <Grid item style={{width: '100%'}}>
        <Tabs variant='scrollable' value={promptIndex} indicatorColor={''}>
        {examplePrompts.map((examplePrompt, i) => 
            <TextChip key={i} text={examplePrompt} selectChip={() => {
              setPromptIndex(i);
              setIdeaText(examplePrompt)
            }}/>
        )}
        </Tabs>
      </Grid>
      <Grid item>
        <CreateButton ideaText={ideaText} create={create}/>
      </Grid>
    </Grid>
  )
}

export default TextureCreatorPanel