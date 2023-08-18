import { NavLink } from 'react-router-dom'
import location from '../components/assets/icons/Group.svg'
import arava from '../components/assets/icons/aravacha.svg'
import search from '../components/assets/icons/search.svg'
import icon from '../components/assets/icons/icon.svg'
import icon1 from '../components/assets/icons/button icon.svg'
import Atirgul from '../components/assets/images/Atirgul.jpg'
import Oqatirgul from '../components/assets/images/oq atirgul.jpg'
import Guldongul from '../components/assets/images/guldongul.jpg'
import ajoyibgul from '../components/assets/images/ajoyibgul.jpg'
import Arrows from '../components/assets/icons/Arrows.svg'
import guldon from '../components/assets/images/guldon.jpg'
import guldon3 from '../components/assets/images/guldon3.jpg'
import guldon4 from '../components/assets/images/guldon4.jpg'
import guldon5 from '../components/assets/images/guldon5.jpg'
import icon3 from '../components/assets/icons/icon-1.svg'
import icon2 from '../components/assets/icons/icon-2.svg'
import Block from '../components/assets/images/Block.jpg'
import butticon from '../components/assets/icons/button icon.svg'
import './style.scss'

const Plants = () => {
  return (
    <>
      <header className='border-2 fixed w-full bg-white'>
        <div className='container mx-auto'>
          <div className=' pt-[16px] mb-[27px]'>
            <div className='wrapper flex justify-between'>
              <img
                className=' duration-500 hover:scale-150 cursor-pointer'
                src={location}
                alt='location'
              />
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

      <section id='new'>
        <div className='container mx-auto'>
          <div className='pt-[170px]'>
            <div className='gap-2'>
              <ul className='flex gap-2'>
                <NavLink to='/'>
                  <li className='text-[12px] text-black font-[inter] font-medium'>
                    Home
                  </li>
                </NavLink>
                <li className='text-[12px] text-black font-[inter] font-medium'>
                  /
                </li>
                <NavLink to='/plants'>
                  <li className='text-[12px] text-black font-[inter] font-medium mb-[36px]'>
                    Plants
                  </li>
                </NavLink>
              </ul>

              <h1 className='text-[32px] text-black font-medium font-[inter] mb-[40px]'>
                All Plants
              </h1>
              <div className='mb-[200px]'>
                <div className='flex gap-[80px]'>
                  <div>
                    <select className='text-[14px] text-black font-[inter] gap-[80px]  hover:text-cyan-500 cursor-pointer'>
                      <option value='text'>Sort by</option>
                      <option value='text'>Sort by</option>
                      <option value='text'>Sort by</option>
                      <option value='text'>Sort by</option>
                    </select>
                  </div>

                  <div>
                    <select className='text-[14px] text-black font-[inter] gap-[80px]  hover:text-cyan-500 cursor-pointer'>
                      <option value='text'>Color</option>
                      <option value='text'>Color</option>
                      <option value='text'>Color</option>
                      <option value='text'>Color</option>
                    </select>
                  </div>

                  <div>
                    <select className='text-[14px] text-black font-[inter] gap-[80px]  hover:text-cyan-500 cursor-pointer'>
                      <option value='text'>Price</option>
                      <option value='text'>Price</option>
                      <option value='text'>Price</option>
                      <option value='text'>Price</option>
                    </select>
                  </div>

                  <div>
                    <select className='text-[14px] text-black font-[inter] gap-[80px]  hover:text-cyan-500 cursor-pointer'>
                      <option value='text'>Flower type </option>
                      <option value='text'>Flower type </option>
                      <option value='text'>Flower type </option>
                      <option value='text'>Flower type </option>
                    </select>
                  </div>

                  <div>
                    <select className='text-[14px] text-black font-[inter] gap-2 mb-[30px]  hover:text-cyan-500 cursor-pointer'>
                      <option value='text'>Occasion</option>
                      <option value='text'>Occasion</option>
                      <option value='text'>Occasion</option>
                      <option value='text'>Occasion</option>
                    </select>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className='wrapper -mt-[160px] h-[440px] mb-[93px]'>
              <div className='cards flex gap-[40px] '>
                <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 focus:text-[#42f5da] '>
                  <NavLink to='/catalog'>
                    <img
                      className='cursor-pointer '
                      src={Atirgul}
                      alt='Atirgul'
                    />
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
        </div>
      </section>

      <section id='relevant'>
        <div className='container'>
          <div className='h-[440px] mb-[100px] -mt-[120px]'>
            <div className='wrapper '>
              <div className='cards flex gap-[40px] '>
                <div className='new_cards rounded-md hover:shadow-lg hover:shadow-black/50 '>
                  <NavLink to='/catalog'>
                    <img
                      className='cursor-pointer '
                      src={guldon}
                      alt='guldon'
                    />
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
                    <img
                      className='cursor-pointer'
                      src={guldon3}
                      alt='guldon3'
                    />
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
                    <img
                      className='cursor-pointer'
                      src={guldon4}
                      alt='guldon4'
                    />
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
                    <img
                      className='cursor-pointer'
                      src={guldon5}
                      alt='guldon5'
                    />
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
              <div className=' text-center'>
                <button className='mt-[40px] w-[223px] h-[46px] bg-black  text-white text-[14px] font-medium font-[inter] hover:bg-cyan-500 cursor-pointer mb-[100px]'>
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='footer h-[400px]  border-2 bg-[#F9F9FB]'>
        <div className='container'>
          <div className='wrapper'>
            <div className='mold flex justify-between pt-[58px] pb-[60px]'>
              <div>
                <h1 className='text-[16px] font-medium font-[inter] text-black pb-[18px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-150'>
                  Title
                </h1>
                <p className='text-[12px] font-medium font-[inter] text-black pb-[18px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-150'>
                  +998991234567
                </p>
                <div className='flex gap-5'>
                  <img
                    className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer'
                    src={icon}
                    alt='icon'
                  />
                  <img
                    className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer'
                    src={icon3}
                    alt='icon1'
                  />
                  <img
                    className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer'
                    src={icon2}
                    alt='icon2'
                  />
                </div>
              </div>

              <ul>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Help
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Contact us
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Delivery information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Payment information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Customer service
                </li>
                <li className='text-[14px] font-medium font-[inter] text-black  hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  FAQ
                </li>
              </ul>

              <ul>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Help
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Contact us
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Delivery information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Payment information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Customer service
                </li>
              </ul>

              <ul>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Help
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Contact us
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Delivery information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Payment information
                </li>
                <li className='text-[16px] font-medium font-[inter] text-black pb-[12px] hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  Customer service
                </li>
                <li className='text-[14px] font-medium font-[inter] text-black hover:text-[#42f5bc] cursor-pointer duration-500 hover:scale-110'>
                  FAQ
                </li>
              </ul>
            </div>

            <hr />
            <div className='mt-[20px]'>
              <p className='text-[12px] font-normal font-[inter] text-[#AFB1BD] hover:text-[#42f5bc] cursor-pointer'>
                © Copyright, SERIUS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Plants
