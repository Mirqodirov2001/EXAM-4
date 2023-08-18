import icon from '../assets/icons/icon.svg'
import icon1 from '../assets/icons/icon-1.svg'
import icon2 from '../assets/icons/icon-2.svg'

const index = () => {
  return (
    <>
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
                  <img className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer' src={icon} alt='icon' />
                  <img className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer' src={icon1} alt='icon1' />
                  <img className='duration-500 hover:scale-150 hover:text-[#42f5bc] cursor-pointer' src={icon2} alt='icon2' />
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

export default index
