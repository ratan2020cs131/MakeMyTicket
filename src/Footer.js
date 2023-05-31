'use client'
import Image from 'next/image'
import Link from 'next/link'
import linkedin from '../public/images/linkedin.png'
import gmail from '../public/images/gmail.png'
import github from '../public/images/github.png'
import instagram from '../public/images/instagram.png'
import Typography from '@mui/material/Typography';
import './global.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sociaLink">
                <Link href='https://www.linkedin.com/in/ratan-deep-singh-50322b211/' target='_blank' width='60px'>
                    <Image
                        className='socialImg'
                        src={linkedin}
                    ></Image>
                </Link>
                <Link href='mailto:ratandeep.blr.12@gmail.com' width='60px'>
                    <Image
                        className='socialImg'
                        src={gmail}
                    ></Image>
                </Link>
                <Link href='https://github.com/ratan2020cs131' target='_blank' width='60px'>
                    <Image
                        className='socialImg'
                        src={github}
                    ></Image>
                </Link>
                <Link href='https://www.instagram.com/ratan.deep.23/' target='_blank'>
                    <Image
                        className='socialImg'
                        src={instagram}
                    ></Image>
                </Link>
            </div>
            <div className='aboutLink'>
                <span>
                    <div><Link href='#' className='links'>About</Link></div>
                    <div><Link href='#' className='links'>Services</Link></div>
                    <div><Link href='#' className='links'>Address</Link></div>
                    <div><Link href='#' className='links'>Learn More</Link></div>
                </span>
                <span>Ratan Deep Singh</span>
            </div>
        </footer>
    )
}

export default Footer;