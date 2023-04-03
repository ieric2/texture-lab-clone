import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useTheme, styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const mapTypes = ['Diffuse', 'Normal', 'Metallic', 'Roughness', 'Height', 'Ambient occlusion'];

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 300,
    color: theme.palette.custom.white,
    backgroundColor: theme.palette.custom.background,
    borderColor: theme.palette.custom.borderPurple,
    borderWidth: '2px',
    borderStyle: 'solid',
  },
}));

const DownloadMenu = ({textureName}) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        variant={'contained'}
        endIcon={open ? <KeyboardArrowUpIcon style={{color: theme.palette.custom.pink}}/> : <KeyboardArrowDownIcon style={{color: theme.palette.custom.pink}}/>}
        onClick={handleClick}
        disableElevation
        style={{
          width: '100%',
          color: theme.palette.custom.white,
          backgroundColor: theme.palette.custom.background,
          borderColor: theme.palette.button.primary,
          borderStyle: 'solid',
          borderWidth: '1px'
        }}
      >
        Download
      </Button>
      <StyledMenu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        style={{
          width: '100%',
          color: theme.palette.custom.purple,
          
        }}
        color={theme.palette.custom.purple}
      >
        {mapTypes.map((mapType, i) => (
            [
              ( i != 0 && <Divider color={theme.palette.custom.borderPurple}/>),
              <MenuItem key={i} href={`texture-maps/${textureName}/${mapType}.png`} component={"a"} download={`${textureName}_${mapType}.png`}>
                {mapType + ' map'}
              </MenuItem>,
            ]
        ))}
      </StyledMenu>
    </Box>
  )
}

export default DownloadMenu