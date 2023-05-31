'use client'
import Navbar from '../../src/Navbar'
import Image from 'next/image'
import account from '../../public/images/account.jpg'
import Footer from '../../src/Footer'
import '../page.css'

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='home1'>
                <Image
                    className='accImg'
                    src={account}></Image>
            </div>
            <Footer/>
        </div>
    )
}

export default page