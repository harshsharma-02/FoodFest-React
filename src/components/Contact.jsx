import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [isSending, setIsSending] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSending) return
    setIsSending(true)

    const { name, email, phone, message } = formData

    emailjs
      .send(
        'service_drbh15l',
        'template_xd05hfd',
        { name, email, phone, message },
        'cTCbGIy9UtZ3PcsLo'
      )
      .then(
        () => {
          alert('Email has been sent!')
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          })
          setIsSending(false)
        },
        (error) => {
          console.error('EmailJS error:', error)
          alert('Something went wrong while sending the email. Please try again.')
          setIsSending(false)
        }
      )
  }

  return (
    <section id="contact">
      <h1 className="h-primary center">Contact Us</h1>
      <div id="contact-box">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Mobile:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter Your Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Description:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group" style={{ textAlign: 'center' }}>
            <button type="submit" className="btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Happy Eating!'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

