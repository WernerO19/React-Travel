import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/bgv.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {FaTripadvisor,FaTwitter,FaYoutube} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section className="footer" >
        <div className="videoDiv">
          <video src={video2} loop autoPlay muted type='video/mp4'></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
              <div data-aos="fade-up" className="text">
                <small>KEEP IN TOUCH</small>
                <h2>Travel with us</h2>
              </div>
              <div data-aos="fade-up" className="inputDiv flex">
              <input data-aos="fade-up" type="text" placeholder='Enter Email Adress' />
              <button data-aos="fade-up" className="btn flex" type='submit'>Send <FiSend className="icon" /></button>
            </div>
          </div>

          <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDivfooter">
                <a href="#" className='logo flex'>
                  <MdOutlineTravelExplore className='iconnew' />
                  Travel.
                </a>
              </div>
              <div className="footerParagraph">
               We understand that planning a trip can be overwhelming, which is why we are committed to making the process as easy and stress-free as possible. From selecting the perfect destination to arranging transportation and accommodations, we handle every aspect of your trip so you can focus on enjoying your adventure.
              </div>
              <div className="footerSocials flex">
                <FaTwitter className="icon" />
                <FaYoutube className="icon" />
                <AiFillInstagram className="icon" />
                <FaTripadvisor className="icon" />
              </div>
            </div>
           
            <div className="footerLinks grid">

               {/* Group One */}
                <div className="linkGroup">
                  <span className="grouptitle">
                    OUR AGENCY
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Services
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Insurance
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Agency
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Tourism
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Payments
                  </li>

                </div>

                 {/* Group Two */}
                 <div className="linkGroup">
                  <span className="grouptitle">
                    PARTNERS
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Bookings
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Rent Cars
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Hostel World
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Trivago
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Trip Adviser
                  </li>

                </div>

                {/* Group Three */}
                <div className="linkGroup">
                  <span className="grouptitle">
                    LAST MINUTE
                  </span>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    London
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    California
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Indonesia
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Brazil
                  </li>

                  <li className="footerList flex">
                    <FiChevronRight className="icon" />
                    Hong Kong
                  </li>

                </div>
                
            </div>

            <div className="footerDiv flex">
                <small>REACT TRAVEL. WEBSITE</small>
                <small>COPYRIGHTS RESERVED - WERNER 2023</small>
            </div>

        </div>
        </div>

        
    </section>
  )
}

export default Footer;