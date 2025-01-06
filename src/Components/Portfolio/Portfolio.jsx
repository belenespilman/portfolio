import React, { useContext, useEffect, useState } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
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

  const [isAnimating, setIsAnimating] = useState(true)

  const handleSlideChange = (swiper) => {
    setIsAnimating(!swiper.isEnd) // Detener animación si estás en el último slide
  }

  useEffect(() => {
    const nextArrow = document.querySelector('.swiper-button-next')
    if (nextArrow) {
      if (isAnimating) {
        nextArrow.style.animation = 'moveArrow 1.2s ease-in-out infinite'
      } else {
        nextArrow.style.animation = 'none'
      }
    }
  }, [isAnimating])
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>My Portfolio</span>
      <p
        className="p-swipe-cta"
        style={{ color: darkMode ? 'var(--gray)' : '' }}
      >
        Swipe right to see more!
      </p>

      {/* slider */}
      <Swiper
        spaceBetween={isMobile ? 50 : 30}
        slidesPerView={isMobile ? 1 : 3}
        grabCursor={true}
        className="portfolio-slider"
        navigation={true}
        modules={[Navigation]}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <a
            className="swiper-a"
            href="https://react-nextjs-travel-app-landing.vercel.app/"
            target={'_blank'}
          >
            <img className="swiper-a" src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="swiper-a"
            href="https://notes-app-frontend-liard-three.vercel.app/"
            target={'_blank'}
          >
            <img src={Ecommerce} alt="FullStack Notes App - React & NestJS" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="swiper-a"
            href="https://belenespilman.github.io/todo-app/"
            target={'_blank'}
          >
            <img src={MusicApp} alt="ToDO APP" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="swiper-a"
            href="https://belenespilman.github.io/vite-react-disney-clone/"
            target={'_blank'}
          >
            <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            className="swiper-a"
            href="https://e-commerce-react-tailwind.vercel.app/"
            target={'_blank'}
          >
            <img src={Shopi} alt="Shopi, ReactJS & Vite e-commerce" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
