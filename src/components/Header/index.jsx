import { NavLink } from 'react-router-dom'
import Intro from '../Intro'
import location from '../assets/icons/Group.svg'
import arava from '../assets/icons/aravacha.svg'
import search from '../assets/icons/search.svg'


const Header = () => {
  return (
    <>
      <header className='border-2 fixed w-full bg-white'>
        <div className='container mx-auto'>
          <div className=' pt-[16px] mb-[27px]'>
            <div className='wrapper flex justify-between'>
              <img className=' duration-500 hover:scale-150 cursor-pointer' src={location} alt='location' />
              <div className='flex gap-5'>
                <img
                  className=' cursor-pointer duration-500 hover:scale-150 '
                  src={arava}
                  alt='arava'
                />
                <img
                  className=' cursor-pointer duration-500 hover:scale-150 '
                  src={search}
                  alt='search'
                />
              </div>
            </div>
          </div>
          <ul className='item flex gap-[67px] justify-center mb-[27px]'>
            <NavLink
              to='/'
              className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da] hover:text-[#00ff99]  active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110 '
            >
              Home
            </NavLink>

            <NavLink
              to='/flowers'
              className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da]  hover:text-[#00ff99] active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110 '
            >
              Flowers
            </NavLink>
            <NavLink
              to='/plants'
              className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da]  hover:text-[#00ff99] active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110 '
            >
              Plants
            </NavLink>
            <ul className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da]  hover:text-[#00ff99] active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110 '>
              Gifts
            </ul>
            <ul className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da] hover:text-[#00ff99] active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110 '>
              Discounts
            </ul>
            <ul className=' item-link text-[16px] font-normal font-[inter] focus:text-[#42f5da]  hover:text-[#00ff99] active:text-[#e642f5] cursor-pointer duration-500 hover:scale-110'>
              About us
            </ul>
          </ul>
        </div>
      </header>
      <Intro />
    </>
  )
}

export default Header;
