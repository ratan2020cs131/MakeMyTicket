'use client'
import React from 'react'
import Navbar from '../../src/Navbar'
import Footer from '../../src/Footer'
import Image from 'next/image'
import Link from 'next/link'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import loginImg from '../../public/images/login.jpg'
import '../page.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[500]
    }
  }
});

export default function(){
  return (
    <div>
      <Navbar />
      <div className='home1'>
        <Image
          className='homeImg'
          src={loginImg}></Image>
        <Box className='loginForm'
          sx={{
            width: 300,
            height: 350,
            background: 'linear-gradient(180deg, rgba(37,133,161,0.8) 8%, rgba(28,111,154,0.8) 20%, rgba(56,71,112,0.8) 72%)',
            borderRadius: 2
          }}>
          <ThemeProvider theme={theme}>
            <TextField id="outlined-basic" label="Email" variant="outlined"
              color='primary'
              sx={{
                position: 'absolute',
                top: 50,
                left: 37,
                input: { color: 'white' },
              }} />
            <TextField id="outlined-basic" label="Password" variant="outlined"
              color='primary'
              sx={{
                position: 'absolute',
                top: 120,
                left: 37,
                input: { color: 'white' },
              }} />
          </ThemeProvider>

          <Button variant="contained"
            color="success"
            sx={{
              display: 'inline-block',
              position: 'absolute',
              bottom: 110,
              left: 90,
              width: "120px",
            }}>Login</Button>
          <Typography variant='p'
            sx={{
              position: 'absolute',
              bottom: 20,
              left:85,
              textAlign: 'center',
            }}>
            <Link href='/' className='link'>Forgot Password?</Link>
            <Link href='/' className='link'>Create Account</Link>
          </Typography>
        </Box>
      </div>
      <Footer/>
    </div>
  )
}

