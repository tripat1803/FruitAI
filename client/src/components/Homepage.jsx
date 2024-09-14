import React from 'react';

import { Typography, Box, Paper} from '@mui/material';
import Grid from '@mui/material/Grid2'

const HomePage = () => {

  return (

    <Box sx={{ display: 'flex',fontFamily: 'dosis', alignItems: "center", justifyContent: 'center', flexDirection: 'column', minWidth:'100vw', minHeight:'100vh', marginLeft:'-8px', marginTop:'-8px', background: 'linear-gradient(to right, #DFBCF3, #7FE7EE)'}}>

      <Typography variant='h3' sx={{ p: 2, fontFamily:'inherit', color:'white'}}>
        <b>Fruit.Ai</b>
      </Typography>
      <Typography variant='h4' sx={{p: 4, fontFamily:'inherit', color:'white'}}>
        <b>"Be healthy!"</b>
      </Typography>
      <Grid container spacing={8}>
        <Grid size={6}>
          <Paper elevation={3}  sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: 'rgb(255,229,194)',
          color: 'purple',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2
        }}>

          <Typography variant='h5'><b>Chat.</b></Typography> 
          </Paper>
          <Paper elevation={3} sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: '#C2FFD0',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2

        }}>

<Typography variant='h5'><b>FAQ</b></Typography> 

          </Paper>
          <Paper elevation={3} sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: '#EFFFC2',
          color: '#3B5998',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2

        }}>

          <Typography variant='h5'><b>More</b></Typography>
          </Paper>
        </Grid>
        <Grid>
        <Paper elevation={3} sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: '#C2F0FF',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2

        }}>
          <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 64.1666L32.0833 55.4166H11.6667C10.0625 55.4166 8.68925 54.8455 7.54689 53.7031C6.40452 52.5607 5.83334 51.1875 5.83334 49.5833V11.6666C5.83334 10.0625 6.40452 8.68922 7.54689 7.54685C8.68925 6.40449 10.0625 5.83331 11.6667 5.83331H29.1667L31.7188 14.5833H58.3333C60.0347 14.5833 61.4323 15.1302 62.5261 16.2239C63.6198 17.3177 64.1667 18.7153 64.1667 20.4166V58.3333C64.1667 59.9375 63.6198 61.3107 62.5261 62.4531C61.4323 63.5955 60.0347 64.1666 58.3333 64.1666H35ZM20.8542 42.5833C24.2083 42.5833 26.967 41.5017 29.1302 39.3385C31.2934 37.1753 32.375 34.368 32.375 30.9166C32.375 30.5278 32.3629 30.1753 32.3386 29.8594C32.3142 29.5434 32.2535 29.2153 32.1563 28.875H20.6354V33.3958H27.125C26.7361 34.7569 25.9948 35.8142 24.9011 36.5677C23.8073 37.3212 22.4826 37.6979 20.9271 37.6979C19.0313 37.6979 17.4028 37.0173 16.0417 35.6562C14.6806 34.2951 14 32.618 14 30.625C14 28.6319 14.6806 26.9548 16.0417 25.5937C17.4028 24.2326 19.0313 23.5521 20.9271 23.5521C21.8021 23.5521 22.6285 23.71 23.4063 24.026C24.184 24.342 24.8889 24.816 25.5208 25.4479L29.0938 22.0208C28.0729 20.9514 26.8455 20.125 25.4115 19.5416C23.9774 18.9583 22.4583 18.6666 20.8542 18.6666C17.5972 18.6666 14.8142 19.8212 12.5052 22.1302C10.1962 24.4392 9.04168 27.2708 9.04168 30.625C9.04168 33.9791 10.1962 36.8107 12.5052 39.1198C14.8142 41.4288 17.5972 42.5833 20.8542 42.5833ZM40.3958 44.0416L42 42.5104C41.3195 41.684 40.6997 40.8819 40.1406 40.1041C39.5816 39.3264 39.0347 38.5 38.5 37.625L40.3958 44.0416ZM44.0417 40.3229C45.4028 38.7187 46.4358 37.1875 47.1406 35.7291C47.8455 34.2708 48.3195 33.1285 48.5625 32.3021H36.9688L37.8438 35.3646H40.7604C41.1493 36.0937 41.6111 36.8837 42.1458 37.7344C42.6806 38.585 43.3125 39.4479 44.0417 40.3229ZM37.9167 61.25H58.3333C59.2083 61.25 59.9132 60.9705 60.4479 60.4114C60.9826 59.8524 61.25 59.1597 61.25 58.3333V20.4166C61.25 19.5416 60.9826 18.8368 60.4479 18.3021C59.9132 17.7673 59.2083 17.5 58.3333 17.5H32.5938L36.0208 29.3125H41.7813V26.25H44.7708V29.3125H55.4167V32.3021H51.6979C51.2118 34.1493 50.4826 35.9479 49.5104 37.6979C48.5382 39.4479 47.3958 41.0764 46.0833 42.5833L54.0313 50.3854L51.9167 52.5L44.0417 44.625L41.4167 47.3229L43.75 55.4166L37.9167 61.25Z" fill="#007AFF"/>
</svg>

          </Paper>
        <Paper elevation={3} sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: '#E9C7F1',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2

        }}>
                    <Typography variant='h5'><b>About</b></Typography> 

          </Paper>
        <Paper elevation={3}  sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          bgcolor: 'blue',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          m: 2

        }}>
                    <Typography variant='h5'><b>More</b></Typography> 

          </Paper>
        
        </Grid>
      </Grid>
      {/* <nav>
        <Link to="/chat">Chat</Link>
        <Link to="/translator">Translator</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/about">About</Link>
      </nav> */}

    </Box>
  );
};

export default HomePage;
