import React, { useContext, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { themeContext } from '../../Context'
import ContactMe from '../../img/contact-me.png'

const Contact = () => {
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
            Get in Touch
          </span>
          <span className="c-title-text">Send me an Email!</span>
          <p
            className="c-title-text"
            style={{ color: darkMode ? 'white' : '' }}
          >
            I will reply as soon as possible
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Your Name"
            style={{
              background: darkMode ? 'black' : '',
              color: darkMode ? 'white' : '',
            }}
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Your Email"
            style={{
              background: darkMode ? 'black' : '',
              color: darkMode ? 'white' : '',
            }}
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            style={{
              background: darkMode ? 'black' : '',
              color: darkMode ? 'white' : '',
            }}
          />
          <input
            type="submit"
            value="Send"
            className="button c-submit-button"
          />
          <span>{done && 'Thanks for Contacting me'}</span>
        </form>
      </div>
    </div>
  )
}

export default Contact
