import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Dummy = () => {
  return (
      <div>
      <Box sx={
        {
          maxWidth: 500,
          m: 10,
          border:"1px solid black"
        }
      }>
        <Typography variant="h2" component="h1" gutterBottom noWrap>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quidem error minima?
          </Typography >
        </Box>
    </div>
  )
}

export default Dummy