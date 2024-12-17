import React from 'react'
import Header from "../components/Header/Header" ;
import Footer from "../components/Footer/Footer";
import ContactForm from '../components/ContactForm/ContactForm' ;
import ContactComponent from '../components/FirstComponentContactPage/ContactComponent';
import StillHaveQuestion from '../components/StillHaveQuestionSection/StillHaveQuestion';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

function ContactPage() {
  return (
    <div>
      <Header/>
      <ContactComponent/>
      <ContactForm/>
      <FrequentlyAskedQuestions/>
      <StillHaveQuestion/>
      <Footer/>
    </div>
  )
}

export default ContactPage
