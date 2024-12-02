import React from "react";
import "./ContactForm.css"; // Custom CSS file
import { useTranslation } from 'react-i18next';  

const ContactForm = () => {
    const { t } = useTranslation();  // Initialize translation
    return (
        <section className="contact-section py-6 custom-spacing2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 text-center para-container">
                        {/* Paragraph */}
                        <p className="contact-paragraph">
                          {t('Have questions about our POS systems or need assistance? Our team is ready to help you streamline your business operations. Reach out to us through the form below or via one of our contact methods.')}
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-12 col-md-12 col-sm-12 form-container">
                        <form>
                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name">{t('Name')}</label>
                                <input type="text" id="name" className="form-control" placeholder={t('Enter your name')} />
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email">{t('Email')}</label>
                                <input type="email" id="email" className="form-control" placeholder={t('Enter your email')}/>
                            </div>

                            {/* Phone Number Field */}
                            <div className="form-group">
                                <label htmlFor="phone">{t('Phone Number')}</label>
                                <div className="input-group">
                                    <input type="tel" id="phone" className="form-control" placeholder={t('Enter your phone number')} />
                                </div>
                            </div>

                            {/* Comment Box */}
                            <div className="form-group">
                                <label htmlFor="comment">{t('How Can We Help?')}</label>
                                <textarea id="comment" className="form-control" placeholder={t('Tell us a little about the project.')} rows="4"></textarea>
                            </div>

                            {/* Services Heading */}
                            <div className="form-group">
                                <h5 className="services-heading">{t('Services')}</h5>
                            </div>

                            {/* Services Section with Checkboxes */}
                            <div className="row service-text">
                                {/* Left Column */}
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service1" />
                                        <label className="form-check-label" htmlFor="service1">{t('Integrated Sales')}</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service2" />
                                        <label className="form-check-label" htmlFor="service2">{t('Management System')}</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service3" />
                                        <label className="form-check-label" htmlFor="service3">{t('Seamless Payment')}</label>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service4" />
                                        <label className="form-check-label" htmlFor="service4">{t('Support E-Invoicing')}</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service5" />
                                        <label className="form-check-label" htmlFor="service5">{t('Service-B-Bussiness')}</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="service6" />
                                        <label className="form-check-label" htmlFor="service6">{t('Retail Stores')}</label>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="form-group">
                                <button type="submit" className="btn submit-btn w-100">{t('Submit')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
