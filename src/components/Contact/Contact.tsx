import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import './Contact.css';
import '../shared/SectionHeading.css';

const fontFamily = "'Raleway', sans-serif";

const SERVICE_ID = 'service_fhtbgsf';
const TEMPLATE_ID = 'template_stl18cm';
const USER_ID = 'Jv9iYhCn7VR-tVg7l';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resumeChecked, setResumeChecked] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current!, { publicKey: USER_ID })
      .then(() => {
        setEmail('');
        setName('');
        setMessage('');
        setResumeChecked(false);
        setSuccessMsg('Thank you! Your message has been sent.');
        if (resumeChecked) {
          const newWindow = window.open('/vonHartitzsch_Trenton_Resume.pdf', '_blank', 'noopener,noreferrer');
          if (newWindow) {
            newWindow.blur();
            window.focus();
          }
        }
        // Optionally clear the message after a few seconds
        setTimeout(() => setSuccessMsg(''), 4000);
      })
      .catch(() => alert('Failed to send message.'));
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="section-heading centered"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ fontFamily }}
        >
          <span className="text-secondary">CONTACT ME</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="contact-container"
        >
          <div className="p-8 relative">
            <div className="bg-[#222222] p-6 rounded-xl shadow-lg border border-[#333333] mb-8">
              <form
                ref={formRef}
                style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', fontFamily }}
                onSubmit={handleSubmit}
              >
                <div
                  style={{
                    marginBottom: '1.5rem',
                    color: 'white',
                    fontFamily,
                    fontSize: '1.05rem',
                    textAlign: 'center',
                    marginTop: '-2rem',
                  }}
                >
                  If you have any questions or concerns, please don't hesitate to contact me. Insert your email address below to get my resume sent to you. I look forward to hearing from you!
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" className="block text-gray-300 mb-2" style={{ fontFamily }}>Your Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    style={{
                      backgroundColor: '#2a2a2a',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      color: 'white',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '1rem',
                      fontFamily
                    }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="email" className="block text-gray-300 mb-2" style={{ fontFamily }}>Your Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email"
                    style={{
                      backgroundColor: '#2a2a2a',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      color: 'white',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '1rem',
                      fontFamily
                    }}
                    required
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="message" className="block text-gray-300 mb-2" style={{ fontFamily }}>Your Message:</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Your message"
                    style={{
                      backgroundColor: '#2a2a2a',
                      padding: '0.75rem 1rem',
                      borderRadius: '0.5rem',
                      color: 'white',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      fontSize: '1rem',
                      resize: 'none',
                      fontFamily
                    }}
                  ></textarea>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontFamily,
                    marginTop: '1rem',
                    marginBottom: '2rem'
                  }}
                >
                  <input
                    type="checkbox"
                    id="resume"
                    checked={resumeChecked}
                    onChange={e => setResumeChecked(e.target.checked)}
                  />
                  <input
                    type="hidden"
                    name="resume"
                    value={resumeChecked ? "Yes" : "No"}
                  />
                  <label
                    htmlFor="resume"
                    style={{
                      color: '#FFA500',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      fontFamily
                    }}
                  >
                    Send me the resume
                  </label>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="send-button bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-medium rounded-full uppercase tracking-wider text-sm transition-all hover:shadow-xl mx-auto"
                    disabled={!email}
                    style={{
                      opacity: email ? 1 : 0.5,
                      cursor: email ? 'pointer' : 'not-allowed',
                      fontFamily,
                      marginBottom: '-2rem'
                    }}
                  >
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
                {successMsg && (
                  <div
                    style={{
                      marginTop: '1rem',
                      textAlign: 'center',
                      color: '#FFA500',
                      fontFamily
                    }}
                  >
                    {successMsg}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;