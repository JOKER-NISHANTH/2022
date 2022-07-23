import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const Dummy = () => {
  return (
      <div>
      <Box sx={
        {
          m: 10,
          width: 300,
          height: 300,
          backgroundColor: "blue",
          "&:hover": {
            backgroundColor: "skyblue",
          }
        }
      }>

        </Box>
    </div>
  )
}

export default Dummy