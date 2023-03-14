import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/background.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook,FiInstagram,FiList} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration:2000})
  }, [])


  return (
    <section className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
            <div data-aos="fade-up" className="textDiv">

              <span  className="smallText">
                Our packages
              </span>

              <h1  className="hometitle">
                Search your Holiday
              </h1>

            </div>

            <div data-aos="fade-up" className="cardDiv grid">

              <div className="destinationInput">
                  <label htmlFor="city" className="city">Search your destination:</label>
                  <div className="input flex">
                    <input type="text" placeholder='Enter Name Here ...' />
                    <GrLocation className="icon" />
                  </div>
                </div>

                <div className="dateInput">
                  <label htmlFor="date" className="date">Select your date:</label>
                  <div className="input flex">
                    <input type="date" />
                  </div>
                </div>

                <div className="priceInput">
                  <div className="label_total flex">
                    <label htmlFor="price" className="date">Max price:</label>
                    <h3 className="total">$400</h3>
                  </div>
                  <div className="input flex">
                    <input type="range" max="5000" min="1000" />
                  </div>
                </div>

                <div className="searchOptions flex">
                    <HiFilter className="icon" />
                    <span>
                      MORE FILTERS
                    </span>
                </div>

            </div>

            <div data-aos="fade-up" className="homeFooterIcons flex">
                <div className="leftIcons">
                    <FiFacebook className="icon" />
                    <FiInstagram className="icon" />
                    <FaTripadvisor className="icon" />
                </div>
                <div className="rightIcons">
                    <FiList className="icon" />
                    <TbApps className="icon" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;