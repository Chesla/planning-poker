import { Box, Button } from '@mui/material';
import React from 'react';
import  AppHeader from './AppHeader';


const Home = (props) => {
    return (
        <Box p={3}>
        <div className="app-welcome-message">
        WM PLANNING POKER
        </div>
        <div className="app-body">
        <div>
        <Button variant="outlined">Create A Planning Poker</Button>
        </div>
        <div>
        <Button variant="outlined">Join A Planning Poker</Button>
        </div>
        </div>
        
        </Box>
        
    );
};

export default Home;
