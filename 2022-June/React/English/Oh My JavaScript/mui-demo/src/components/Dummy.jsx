import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const Dummy = () => {
  return (
    <Box sx={{ ml: 5 }}>
      <Stack
        direction="Row"
        divider={<Divider orientation='vertical' flexItem />}
        orientation="horizontal"
        spacing={2}
      >
          <div>HEllo</div>
          <div>World</div>
      </Stack>
    </Box>
  )
}

export default Dummy