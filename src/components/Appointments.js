import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Grid } from '@mui/material';
import { Assessment, CalendarMonth, CalendarMonthOutlined, Favorite, FmdGood, LocalActivity, SentimentDissatisfied, SentimentVerySatisfied, SimCardAlert } from '@mui/icons-material';
import { display } from '@mui/system';

export const Appointments = () => {

    const dateTime = new Date()
    const time = dateTime.toTimeString().slice(0,5)
    const date = dateTime.toLocaleDateString()

    const [users, setUsers] = useState()

    const fetchUser = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <Box sx={{ boxSizing: "border-box", padding: { xs: '1rem', md: "2rem", xl: "3rem" }, minWidth: '350px' }}>
            <Grid container sx={{ boxShadow: 'rgba(204, 102, 255, 0.2) 0px 8px 24px', borderRadius: "6px" }} columns={12}>
                <Grid item xs={3.5} sm={4} md={3} borderRight="2px solid purple">
                    <Box sx={{ padding: { xs: '1rem', md: '2rem 5rem' }, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <Typography fontWeight="700" fontSize={{ xs: "1.5rem", md: "2rem" }} color="gray"> {time}</Typography>
                        <Box>
                            <Typography fontWeight="700" fontSize={{ xs: "1rem", md: "1.5rem" }} color="gray"> Today</Typography>
                            <Typography fontWeight="700" fontSize={{ xs: "1rem", md: "1.5rem" }} color="gray">
                                 {date.slice(2,4)}.{date.slice(0,1)}.{date.slice(7,)}
                                 </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8.5} sm={8} md={9}>
                    <Box sx={{ boxSizing: "border-box", padding: { xs: '0 1rem 1rem 0', md: '2rem 5rem' }, display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
                        <Box>
                            {users
                                ?
                                <ul>
                                    {users.map(user =>
                                        <li key={user.id}> <Typography fontWeight="600" fontSize={{ xs: "1rem" }} color="gray" whiteSpace={"nowrap"} >{user.username}</Typography> </li>
                                    )}
                                </ul>
                                :
                                <Typography fontWeight="600" fontSize="1.5rem" color="gray" whiteSpace={"nowrap"}>No Users</Typography>
                            }
                        </Box>
                        <Box textAlign={"end"}>
                            <Button variant='contained' size='large' sx={{ bgcolor: "purple", borderRadius: "32px", paddingX: "2rem", textTransform:"none" }}>Amet</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={3} paddingTop={{xs:"3rem",md:"5rem"}} >
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <CalendarMonthOutlined fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <Assessment fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <SentimentVerySatisfied fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <SentimentDissatisfied fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <FmdGood fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{ display: "flex", boxShadow: 'rgba(204, 102, 255, 0.5) 0px 1px 2px 0px, rgba(204, 102, 255, 0.15) 0px 2px 6px 2px', alignItems: "center", justifyContent: "center", 
                        width: {xs:"75px", sm:"100px", xl:"150px"}, height: {xs:"75px", sm:"100px" , xl:"150px"}, borderRadius: "50%", cursor: "pointer" }}>
                        <Favorite fontSize='large' style={{ color: 'purple' }} />
                    </Box>
                </Grid>
                
            </Grid>
            
        </Box>
    )
}
