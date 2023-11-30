import axios from 'axios'
import React, { useState } from 'react'
import "./Contact.css"
import { FaRegUser, FaRegMap } from 'react-icons/fa'
import { RiLinkedinLine } from "react-icons/ri";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //linking url for table to google sheets
    axios.post('your-url-api-address', form).then((response) => {
      console.log(response);
      //clearing form fields
      setForm({ name: '', email: '', subject: '', message: '' });
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact me</h2>
      <span className="section-subtitle">
        I'm Here for Your Questions
      </span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegMap />
            </span>

            <h3 className="contact-card-title">Address</h3>
            <p className="contact-card-data">district Znojmo,<br />South Moravian Region,<br />Czech republic</p>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegUser />
            </span>

            <h3 className="contact-card-title">Graduate</h3>
            <p className="contact-card-data">Open for New<br />Opportunities</p>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon">
              <RiLinkedinLine />
            </span>

            <h3 className="contact-card-title">LinkedIn</h3>
            <span className="contact-card-data">
              Or contact me<br /><a className='contact-card-data' href="https://www.linkedin.com/in/mark%C3%A9ta-gr%C3%A1cov%C3%A1">on LinkedIn</a>
            </span>
          </div>

          {/* <div className="contact-card">
            <span className="contact-card-icon">
              <FaRegAddressBook />
            </span>

            <h3 className="contact-card-title">Phone</h3>
            <p className="contact-card-data">+4200000000</p>
          </div> */}
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group grid">
            <div className="contact-form-div">
              <label className="contact-form-tag text-cs">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                name='name'
                onChange={handleChange}
                value={form.name}
                className="contact-form-input" />
            </div>

            <div className="contact-form-div">
              <label for="email" className="contact-form-tag text-cs">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                name='email'
                onChange={handleChange}
                value={form.email}
                className="contact-form-input" />
            </div>
          </div>

          <div className="contact-form-div">
            <label className="contact-form-tag text-cs">
              Your Subject <b>*</b>
            </label>
            <input
              type="text"
              name='subject'
              onChange={handleChange}
              value={form.subject}
              className="contact-form-input" />
          </div>

          <div className="contact-form-div contact-form-area">
            <label className="contact-form-tag text-cs">
              Your Message <b>*</b>
            </label>
            <textarea
              name='message'
              onChange={handleChange}
              value={form.message}
              className='contact-form-input'></textarea>
          </div>

          <div className="contact-submit">
            <p>* Accept the terms and conditions.</p>
            <button className="button button-flex">
              Send Message
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" fill="var(--container-color)" /></svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact