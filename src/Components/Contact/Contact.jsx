import React, { useContext, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Context'
import ContactMe from '../../img/contact-me.png'

const Contact = () => {
  const { t } = useTranslation()
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  const form = useRef()
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_ACCESS_TOKEN,
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
          form.current.reset()
        },
        (error) => {
          console.log(error.text)
        },
      )
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="c-left">
        <img src={ContactMe} alt="contacto" />
      </div>
      {/* right side form */}
      <div className="c-right">
        <div className="c-title">
          {/* darkMode */}
          <span
            style={{ color: darkMode ? 'white' : '' }}
            className="c-title-text"
          >
            {t('contact.getInTouch')}
          </span>
          <span className="c-title-text">{t('contact.sendEmail')}</span>
          <p
            className="c-title-text"
            style={{ color: darkMode ? 'white' : '', marginTop: '1rem' }}
          >
            {t('contact.replySoon')}
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder={t('contact.placeholderName')}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder={t('contact.placeholderEmail')}
          />
          <textarea
            name="message"
            className="user"
            placeholder={t('contact.placeholderMessage')}
          />
          <input
            type="submit"
            value={t('contact.send')}
            className="button c-submit-button"
          />
          <span>{done && t('contact.thanks')}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
