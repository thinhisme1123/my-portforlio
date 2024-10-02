import React, { useState } from 'react';
import '../../style/body/Contact.css';
import '../../style/all/All.css';
import SectionTitle from '../parts/SectionTitle';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonLink from '../parts/Buttons';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import the CSS for react-toastify

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://portfolio-backend-drab.vercel.app/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email sent successfully!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setFormData({ name: '', email: '', message: '' }); // Reset form after submission
            } else {
                toast.error('Failed to send email. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Failed to send email. Please try again later.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <>
            <div className="contact-seciton-container">
                <ToastContainer toastClassName="custom-toast"/> {/* This renders the toast messages */}
                <SectionTitle name="Contact" />
                <div className="contact-infor-container">
                    <div className="contact-infor-item">
                        <div className="contact-item-icon">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <div className="contact-item-text">
                            <h5>Call Me</h5>
                            <p>0962-450-187</p>
                        </div>
                    </div>
                    <div className="contact-infor-item">
                        <div className="contact-item-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="contact-item-text">
                            <h5>E-mail</h5>
                            <p>trphgiathinh@gmail.com</p>
                        </div>
                    </div>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="contact-form-item">
                            <input
                                name="name"
                                placeholder="Name"
                                className="contact-form-input"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-item">
                            <input
                                name="email"
                                placeholder="Email"
                                className="contact-form-input"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-item">
                            <textarea
                                rows={8}
                                name="message"
                                className="contact-form-input"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="contact-form-btn">
                            <button className="button-link" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
