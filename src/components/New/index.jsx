import Atirgul from '../assets/images/Atirgul.jpg'
import Oqatirgul from '../assets/images/oq atirgul.jpg'
import Guldongul from '../assets/images/guldongul.jpg'
import ajoyibgul from '../assets/images/ajoyibgul.jpg'
import Arrows from '../assets/icons/Arrows.svg'
import { NavLink } from 'react-router-dom'
const index = () => {
  return (
    <section id='new'>
      <div className='container mx-auto'>
        <div className='wrapper h-[440px] mb-[93px]'>
          <div className='flex gap-[901px]'>
            <h1 className='text-[24px] font-medium font-[inter] text-black mb-[44px]'>
              New
            </h1>
            <img className=' -mt-8' src={Arrows} alt='arrows ' />
          </div>
          <div className='cards flex gap-[40px] '>
            <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 focus:text-[#42f5da] '>
              <NavLink to='/catalog'>
                <img className='cursor-pointer ' src={Atirgul} alt='Atirgul' />
              </NavLink>
              <div className='ml-[88px] pt-4 '>
                <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                  Red Tulips
                </h1>
                <div className='text flex gap-3'>
                  <p className='text-[14px] pl-1 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    46 $
                  </p>
                  <p className='text-[14px] pl-1 font-normal font-[inter] text-[#82828B] hover:text-[#42f5bc] cursor-pointer'>
                    60 $
                  </p>
                </div>
              </div>
            </div>

            <div className='new_cards h-[366px] rounded-md hover:shadow-lg hover:shadow-black/50 focus:text-[#42f5da]'>
              <NavLink to='/catalog'>
                <img
                  className='cursor-pointer'
                  src={Oqatirgul}
                  alt='Oqatirgul'
                />
              </NavLink>
              <div className='ml-[54px] pt-4 '>
                <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                  White roses, 7pc.
                </h1>
                <p className='text-[14px] pl-11 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                  44 $
                </p>
              </div>
            </div>

            <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 focus:text-[#42f5da]'>
              <NavLink to='/catalog'>
                <img
                  className='cursor-pointer'
                  src={Guldongul}
                  alt='guldongul'
                />
              </NavLink>
              <div className='ml-[50px] pt-4 '>
                <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                  Bouqueet “Dream”
                </h1>
                <div>
                  <p className='text-[14px] pl-12 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    53 $
                  </p>
                </div>
              </div>
            </div>

            <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 focus:text-[#42f5da]'>
              <NavLink to='./catalog'>
                <img
                  className='cursor-pointer'
                  src={ajoyibgul}
                  alt='ajoyibgul'
                />
              </NavLink>
              <div className='ml-[50px] pt-4 '>
                <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                  White lilies, 21 pc.
                </h1>
                <div>
                  <p className='text-[14px] pl-12 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    70 $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
