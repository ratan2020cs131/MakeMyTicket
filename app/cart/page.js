'use client'
import React, { useState } from 'react'
import Navbar from '../../src/Navbar';
import Image from 'next/image'
import history from '../../public/images/history.jpg';
import Footer from '../../src/Footer'
import Button from '@mui/material/Button';
import '../page.css'

export default function () {
    const [cartNo, setCartNo] = useState(0);
    const addCart = () => {
        setCartNo(cartNo + 1);
    }
    const removeCart = () => {
        if(cartNo>0) {setCartNo(cartNo - 1);}
    }

    return (
        <div>
            <Navbar cartNo={cartNo} />
            <div className='home1'>
                <Image
                    className='accImg'
                    src={history}></Image>
                <div className='cartButton'>
                    <Button variant="contained" color="success"
                        onClick={addCart}
                    >Add to Cart</Button>
                    <Button variant="contained" color="success"
                        onClick={removeCart}
                    >Remove from Cart</Button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
