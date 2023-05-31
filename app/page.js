import Navbar from '../src/Navbar'
import Footer from '../src/Footer'
import Image from 'next/image'
import wallpaper from '../public/images/wallpaper.jpg';
import './page.css'
export default function () {
  return (
    <>
      <Navbar />
      <div className='home1'>
        <Image
        className='homeImg'
        src={wallpaper}></Image>
      </div>
      <Footer/>
    </>
  )
}