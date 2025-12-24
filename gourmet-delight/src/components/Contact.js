import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation request submitted! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2 className="section-title">Visit Us</h2>
            <div className="info-item">
              <h3>Location</h3>
              <p>123 Culinary Avenue<br />Food District, FD 10001</p>
            </div>
            <div className="info-item">
              <h3>Hours</h3>
              <p>Monday - Thursday: 5pm - 10pm<br />
                 Friday - Saturday: 5pm - 11pm<br />
                 Sunday: 4pm - 9pm</p>
            </div>
            <div className="info-item">
              <h3>Contact</h3>
              <p>Phone: (123) 456-7890<br />
                 Email: info@gourmetdelight.com</p>
            </div>
          </div>
          
          <div className="contact-form">
            <h2 className="section-title">Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Time</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6+ Guests</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Special Requests or Notes"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">Book Table</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;