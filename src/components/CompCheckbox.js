import { Box, Checkbox, Typography } from '@mui/material';
import React, { useState } from 'react'

const CompCheckbox = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <Box textAlign={'center'}>
            <Typography fontSize={'2rem'} paddingY="1rem">{ checked ? "Checked" : "Unchecked" }</Typography>
            <Checkbox
                size='large'
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
        </Box>
    )
}

export default CompCheckbox