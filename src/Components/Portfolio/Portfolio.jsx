import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import { themeContext } from '../../Context'
import Shopi from '../../img/shopi.png' 

const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const isMobile = window.innerWidth <= 480
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>My Portfolio</span>
      <p className='p-swipe-cta' style={{color: darkMode ? "var(--gray)" : ""}}>Swipe right to see more!</p>

      {/* slider */}
      <Swiper
        spaceBetween={isMobile ? 50 : 30}
        slidesPerView={isMobile ? 1 : 3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://react-nextjs-travel-app-landing.vercel.app/"
            target={'_blank'}
            
          >
            <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://notes-app-frontend-liard-three.vercel.app/"
            target={'_blank'}
            
          >
            <img src={Ecommerce} alt="FullStack Notes App - React & NestJS" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://belenespilman.github.io/todo-app/"
          target={'_blank'}>
            <img src={MusicApp} alt="ToDO APP" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://belenespilman.github.io/vite-react-disney-clone/"
            target={'_blank'}
          >
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://e-commerce-react-tailwind.vercel.app/"
            target={'_blank'}
          >
            <img src={Shopi} alt="Shopi, ReactJS & Vite e-commerce"
             />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
