import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

const CompButton = () => {
    const [ number, setNumber ] = useState(0)
    return (
        <Box textAlign={'center'}>
            <Typography fontSize={'2rem'} paddingY="1rem">{number}</Typography>
            <Button variant='contained' onClick={()=>setNumber(number+1)}>increase +1</Button> &nbsp;
            <Button variant='contained' onClick={()=>setNumber(number-1)}>decrease -1</Button>
        </Box>
    )
}

export default CompButton