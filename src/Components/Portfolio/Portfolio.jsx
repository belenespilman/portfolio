import React, { useContext } from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import { themeContext } from '../../Context'

const Portfolio = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>My Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
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
            href="https://github.com/belenespilman/e-commerce-html-css-js"
            target={'_blank'}
          >
            <img src={Ecommerce} alt="HTML, CSS y JavaScript E-Commerce" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://belenespilman.github.io/todo-app/" target={'_blank'}>
            <img src={MusicApp} alt="" />
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
      </Swiper>
    </div>
  )
}

export default Portfolio
