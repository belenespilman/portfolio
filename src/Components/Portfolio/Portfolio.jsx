import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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
import NestAPI from '../../img/nestapi.png'

import { motion } from 'framer-motion'

const Portfolio = () => {
  const { t } = useTranslation()
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const projects = [
    {
      img: NestAPI,
      link: 'https://ecommerce-api-dev.onrender.com/docs',
      title: 'NestJS E-commerce API',
    },
    {
      img: Sidebar,
      link: 'https://react-nextjs-travel-app-landing.vercel.app/',
      title: 'Travel App Landing',
    },
    {
      img: Ecommerce,
      link: 'https://notes-app-frontend-liard-three.vercel.app/',
      title: 'FullStack Notes App',
    },
    {
      img: MusicApp,
      link: 'https://belenespilman.github.io/todo-app/',
      title: 'Todo App',
    },
    {
      img: HOC,
      link: 'https://belenespilman.github.io/vite-react-disney-clone/',
      title: 'Disney Clone',
    },
    {
      img: Shopi,
      link: 'https://e-commerce-react-tailwind.vercel.app/',
      title: 'Shopi E-commerce',
    },
  ]

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>
        {t('portfolio.recent')}
      </span>
      <span>{t('portfolio.my')}</span>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <a href={project.link} target="_blank" rel="noreferrer">
              <div className="p-card-image">
                <img src={project.img} alt={project.title} />
                <div className="p-card-overlay">
                  <span>{project.title}</span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
