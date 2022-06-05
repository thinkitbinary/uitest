import { Box, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const CompCalender = () => {
    const [text, setText] = useState()
    const handleChange = (event) => {
        setText(event.target.value);
    };
    return (
        <Box textAlign={'center'}>
            <Typography fontSize={'2rem'} paddingY="1rem">{text}</Typography>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={handleChange}
            />
        </Box>
    )
}

export default CompCalender