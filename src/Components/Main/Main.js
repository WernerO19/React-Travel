import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {BsClipboardCheck} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [  {    "id": 1,    "imgSrc": "https://wildlandtrekking.com/content/uploads/2020/09/ROCKY-MOUNTAINS.jpg",    "destTitle": "Rocky Mountains",    "location": "Colorado, USA",    "grade": 'Cultural immersion',    "fees": 1500,    "description": "Join us on a breathtaking journey through the stunning Rocky Mountains of Colorado. This adventure will take you through winding trails, over snowcapped peaks, and to some of the most picturesque views in the world."  },  {    "id": 2,    "imgSrc": "https://a.cdn-hotels.com/gdcs/production109/d34/0e2d7854-11df-4ca9-8018-211e8ae372e5.jpg",    "destTitle": "Escape to Bali",    "location": "Bali, Indonesia",    "grade": 'Adventure',    "fees": 2500,    "description": "Escape to the paradise island of Bali, where you'll experience stunning beaches, crystal-clear waters, and vibrant culture. From yoga retreats to surfing adventures, there's something for everyone on this incredible journey."  },  {    "id": 3,    "imgSrc": "https://www.roadscholar.org/imagevault/publishedmedia/unwqffi3h9rn7o7w3263/collections-italy-hoz.jpg",    "destTitle": "European Adventure",    "location": "Multiple Countries",    "grade": 'Luxury',    "fees": 4000,    "description": "Embark on the ultimate European adventure, where you'll travel through multiple countries and experience the rich history and diverse cultures of Europe. From the romantic streets of Paris to the charming canals of Venice, this journey will leave you in awe."  },  {    "id": 4,    "imgSrc": "https://www.pandotrip.com/wp-content/uploads/2018/09/Seigantoji-Pagoda-and-Nachi-Falls-in-Nacho-Japan.jpg",    "destTitle": "Wonders of Japan",    "location": "Japan",    "grade": 'Backpacking',    "fees": 3000,    "description": "Travel to the land of the rising sun and discover the wonders of Japan. From the bustling streets of Tokyo to the serene temples of Kyoto, this journey will take you through a fascinating culture and breathtaking landscapes."  }];


const Main = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  return (
    <section className="main container section">

      <div className="secTile">
        <div className="title" data-aos="fade-up">
          Most visited destinations
        </div>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description}) =>{
            return(
              <div data-aos="fade-up" key={id} className="singleDestination">


                <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardinfo">
                    <h4 className="destTitle">
                      {destTitle}
                    </h4>
                    <span className="contonent flex">
                      <HiOutlineLocationMarker className="icon" />
                      <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span className='text'> {grade} <small> +1 </small> </span>
                      </div>
                      <div className="price">
                        <h5>${fees}</h5>
                      </div>
                    </div>

                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">
                      DETAILS <BsClipboardCheck className="icon" />
                    </button>
              
                </div>
              </div>
            )
          })
        }
      </div>

    </section>
  )
}

export default Main;