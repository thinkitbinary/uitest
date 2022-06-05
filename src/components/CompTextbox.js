import React, { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material';

const CompTextbox = () => {
    const [ text, setText ] = useState()
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <Box textAlign={'center'}>
            <Typography fontSize={'2rem'} paddingY="1rem">{text}</Typography>
            <TextField  id="outlined-basic" label="Textbox" variant="outlined" onChange={handleChange} />
        </Box>
    )
}

export default CompTextbox