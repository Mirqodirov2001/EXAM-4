import { NavLink } from 'react-router-dom'
import icon from '../assets/icons/button icon.svg'
import icon1 from '../assets/icons/buttonicon2.svg'

import './style.scss'
const index = () => {
  return (
    <>
    <section id='intro'>
      <div className='container'>
        <div className='pt-[170px]'>
          <div className=' card  h-[220px] rounded-md mb-[40px] hover:shadow-lg hover:shadow-black/50'>
            <div className='ml-[80px]'>
              <h1 className=' pt-[25px] text-[28px] font-medium font-[inter] text-black mb-[10px]  hover:text-[#42f5bc] cursor-pointer '>
                40% OFF
              </h1>
              <h2 className='text-[17px] font-medium font-[inter] text-black mb-6 hover:text-[#42f5bc] cursor-pointer'>
                Best deals this week. Fresh flowers, plants and gifts
              </h2>

              <div className=' flex  w-[138px] h-[50px] bg-black rounded-md items-center cursor-pointer hover:bg-cyan-600 active:bg-green-600'>
                <div className='flex ml-[16px] gap-3'>
                  <button className='text-white text-[14px] font-medium font-[inter] hover:text-[#42f5bc] cursor-pointer'>
                    Shop now
                  </button>
                  <img className='w-6 h-6 ' src={icon} alt='icon' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex gap-[40px]'>
            <div className=' card1 w-[540px] h-[221px] rounded-md hover:shadow-lg hover:shadow-black/50'>
              <div className='ml-[80px]'>
                <h1 className='text-[28px] font-medium font-[inter] text-black mb-[10px] hover:text-[#42f5bc] cursor-pointer mt-[25px]'>
                  Nice little gifts
                </h1>
                <h2 className='text-[17px] font-medium font-[inter] text-black mb-6 hover:text-[#42f5bc] cursor-pointer'>
                  for loved ones
                </h2>

                <div>
                  <div className='flex gap-3'>
                    <button className='text-black text-[14px] font-medium font-[inter] hover:text-[#42f5bc] cursor-pointer'>
                     View now
                    </button>
                    <img className=' text-black' src={icon1} alt='icon' />
                  </div>
                </div>
              </div>
            </div>
            <div className=' card2  w-[540px] h-[221px] rounded-md mb-[47px] hover:shadow-lg hover:shadow-black/50'>
              <div className='ml-[80px]'>
                <h1 className='text-[28px] font-medium font-[inter] text-black mb-[10px] hover:text-[#42f5bc] cursor-pointer mt-[25px]'>
                  40% OFF
                </h1>
                <h2 className='text-[17px] font-medium font-[inter] text-black mb-6 hover:text-[#42f5bc] cursor-pointer'>
                  Best deals this week. Fresh flowers, plants and gifts
                </h2>

                <div>
                <div className='flex gap-3'>
                    <button className='text-black text-[14px] font-medium font-[inter]  hover:text-[#42f5bc] cursor-pointer'>
                     View now
                    </button>
                    <img className=' text-black' src={icon1} alt='icon' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default index
