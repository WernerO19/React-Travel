import React, {useEffect,useState} from 'react'
import './home.css'
import video from '../../Assets/background.mp4'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook,FiInstagram,FiList} from 'react-icons/fi'
import {FaTripadvisor} from 'react-icons/fa'
import {TbApps} from 'react-icons/tb'
import Data from '../Main/Main';

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {
  const Data = [  {    "id": 1,    "imgSrc": "https://www.thewanderinglens.com/wp-content/uploads/2016/09/LMB_6724.jpg",    "destTitle": "Exploring the Rocky Mountains",    "location": "Colorado, USA",    "grade": 'Cultural immersion',    "fees": 1500,    "description": "Join us on a breathtaking journey through the stunning Rocky Mountains of Colorado. This adventure will take you through winding trails, over snowcapped peaks, and to some of the most picturesque views in the world."  },  {    "id": 2,    "imgSrc": "https://www.thewanderinglens.com/wp-content/uploads/2016/09/LMB_6724.jpg",    "destTitle": "A Tropical Escape to Bali",    "location": "Bali, Indonesia",    "grade": 'Adventure',    "fees": 2500,    "description": "Escape to the paradise island of Bali, where you'll experience stunning beaches, crystal-clear waters, and vibrant culture. From yoga retreats to surfing adventures, there's something for everyone on this incredible journey."  },  {    "id": 3,    "imgSrc": "https://www.thewanderinglens.com/wp-content/uploads/2016/09/LMB_6724.jpg",    "destTitle": "The Ultimate European Adventure",    "location": "Multiple Countries",    "grade": 'Luxury',    "fees": 4000,    "description": "Embark on the ultimate European adventure, where you'll travel through multiple countries and experience the rich history and diverse cultures of Europe. From the romantic streets of Paris to the charming canals of Venice, this journey will leave you in awe."  },  {    "id": 4,    "imgSrc": "https://www.thewanderinglens.com/wp-content/uploads/2016/09/LMB_6724.jpg",    "destTitle": "Discovering the Wonders of Japan",    "location": "Japan",    "grade": 'Backpacking',    "fees": 3000,    "description": "Travel to the land of the rising sun and discover the wonders of Japan. From the bustling streets of Tokyo to the serene temples of Kyoto, this journey will take you through a fascinating culture and breathtaking landscapes."  }];
  const [value, setValue] = useState(0);
  const [ active, setActive ] = useState('searchOptions flex');
  const [ showFilters, setShowFilters ] = useState('hidden');

  function searchOptionsActive() {
      setActive(active === 'searchOptions flex' ? 'searchOptionsActive flex' : 'searchOptions flex');
      setShowFilters(showFilters === 'hidden' ? '' : 'hidden');
  }

  function handleOnChange(event) {
    setValue(event.target.value);
  }

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
                    {/* <input type="text" placeholder='Enter Name Here ...' /> */}
                    <select className='select' name="location">
                        {
                          Data.map(({id,location}) =>{
                            return(
                              <option key={id} value={location}>{location}</option>
                            )
                          })
                        }
                    </select>
                    <GrLocation className="icon" />
                  </div>
                </div>

                <div className="dateInput">
                  <label htmlFor="date" className="date">Select your start date:</label>
                  <div className="input flex">
                    <input type="date" />
                  </div>
                </div>

                <div className="priceInput">
                  <div className="label_total flex">
                    <label htmlFor="price" className="date">Max price:</label>
                    <h3 className="total">${value}</h3>
                  </div>
                  <div className="input flex">
                    <input type="range" max="5000" min="0" value={value} onChange={handleOnChange} />
                  </div>
                </div>

                <div className={'destinationInput '+showFilters}>
                  <label htmlFor="city" className="city">Select your grade:</label>
                  <div className="input flex">
                    <select className='select' name="grade">
                      {
                         Data.map(({id,grade}) =>{
                          return(
                            <option key={id} value={grade}>{grade}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>

                <div className={'dateInput '+showFilters}>
                  <label htmlFor="date" className="date">Select your end date:</label>
                  <div className="input flex">
                    <input type="date" />
                  </div>
                </div>

                <div className={active} onClick={searchOptionsActive}>
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