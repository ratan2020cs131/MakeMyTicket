'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link'
import './global.css';
import logo from '../public/images/ticket.png';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HistoryIcon from '@mui/icons-material/History';
import Person2Icon from '@mui/icons-material/Person2';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 6,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <logo className='flow logo'>
        <Image
          className='logoImg'
          src={logo}
          alt='logo'
          height="50"
          width="50"></Image>
        <h3>MakeMyTicket</h3>
      </logo>
      <label className="hamburger">
        <input type="checkbox"></input>
      </label>
      <div className='menu'>
        <Link href='/' className='menuLink'>
          <Tooltip title="Home">
            <HomeIcon sx={{ color: "white" }} className='menuIco' />
          </Tooltip>
        </Link>
        <Link href='/cart' className='menuLink'>
          <Tooltip title="Cart">
            <StyledBadge badgeContent={props.cartNo} color="secondary">
              <ShoppingCartIcon sx={{ color: "white" }} className='menuIco' />
            </StyledBadge>
          </Tooltip>
        </Link>
        <Link href='/account' className='menuLink'>
          <Tooltip title="Account">
            <Person2Icon sx={{ color: "white" }} className='menuIco' />
          </Tooltip>
        </Link>
        <Link href='/login' className='menuLink'>
          <Button sx={{
            color: "black",
            display: "flex",
            gap: 1,
            alignItems: "flex-start",
            backgroundColor: "white",
            fontWeight: 600,
            width: '100%',
          }}>
            Login
            <ExitToAppIcon sx={{ color: "black" }} />
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
