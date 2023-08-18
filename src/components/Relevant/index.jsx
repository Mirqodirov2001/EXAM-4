import guldon from '../assets/images/guldon.jpg'
import guldon3 from '../assets/images/guldon3.jpg'
import guldon4 from '../assets/images/guldon4.jpg'
import guldon5 from '../assets/images/guldon5.jpg'
import Arrows from '../assets/icons/Arrows.svg'
import { NavLink } from 'react-router-dom'
const index = () => {
  return (
    <section id='relevant'>
      <div className='container'>
        <div className='h-[440px] mb-[100px]'>
          <div className='flex gap-[849px]'>
            <h1 className='text-[24px] font-medium font-[inter] text-black mb-[44px]'>
              Relevanse
            </h1>
            <img className=' -mt-8' src={Arrows} alt='arrows' />
          </div>
          <div className='wrapper '>
            <div className='cards flex gap-[40px] '>
              <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 '>
                <NavLink to='/catalog'>
                  <img className='cursor-pointer ' src={guldon} alt='guldon' />
                </NavLink>
                <div className='ml-[60px] pt-4 '>
                  <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    Bouquet “Maya”
                  </h1>
                  <div>
                    <p className='text-[14px] pl-8 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                      52.50 $
                    </p>
                  </div>
                </div>
              </div>

              <div className='new_cards h-[366px] rounded-md hover:shadow-lg hover:shadow-black/50'>
                <NavLink to='/catalog'>
                  <img className='cursor-pointer' src={guldon3} alt='guldon3' />
                </NavLink>
                <div className='ml-[54px] pt-4 '>
                  <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    Red tulips, 25 pc.
                  </h1>
                  <p className='text-[14px] pl-11 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    46 $
                  </p>
                </div>
              </div>

              <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50'>
                <NavLink to='/catalog'>
                  <img className='cursor-pointer' src={guldon4} alt='guldon4' />
                </NavLink>
                <div className='ml-[50px] pt-4 '>
                  <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    Pink roses, 15 pc.
                  </h1>
                  <div>
                    <p className='text-[14px] pl-12 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                      34 $
                    </p>
                  </div>
                </div>
              </div>

              <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50'>
                <NavLink to='/catalog'>
                  <img className='cursor-pointer' src={guldon5} alt='guldon5' />
                </NavLink>
                <div className='ml-[50px] pt-4 '>
                  <h1 className='text-[18px] font-medium font-[Inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                    Bouquet “Sunny”
                  </h1>
                  <div className='text ml-3 flex gap-3'>
                    <p className='text-[14px] pl-1 font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer'>
                      38.20 $
                    </p>
                    <p className='text-[14px] pl-1 font-normal font-[inter] text-[#82828B] hover:text-[#42f5bc] cursor-pointer'>
                      60 $
                    </p>
                  </div>
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
