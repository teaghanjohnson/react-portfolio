import Loader from 'react-loaders';
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7tce3uv', 'template_dsmcbsg', form.current,
        'bF0VxIx7KTmQIIIXf'
      )
      .then(
        () => {
          console.log('Message sent successfully!');
        },
        (error) => {
          console.log('Message failed to send...', error.text);
        },
      );
  };

  return (
    <>
      <div className='container contact-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance oppurtunities and internships to further
            my experience. Feel free to contact me!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required>
                  </textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                  />
                </li>
              </ul>
            </form>

          </div>
        </div>
        <div className="info-map">
          Teaghan Johnson,
          <br />
          Canada,
          <br />
          100 Haddington St, <br />
          Caledonia, ON <br />
          <span>teaghanjohnsonn@gmail.com</span>

        </div>
        <div className="map-wrap">
          <MapContainer center={[43.064150, -79.952023]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[43.064150, -79.952023]}>
              <Popup> No this is not my exact adress :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}


export default Contact; 