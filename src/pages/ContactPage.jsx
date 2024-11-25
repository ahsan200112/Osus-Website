import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm' ;
import ContactComponent from '../components/FirstComponentContactPage/ContactComponent';
import StillHaveQuestion from '../components/StillHaveQuestionSection/StillHaveQuestion';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions/FrequentlyAskedQuestions';

function ContactPage() {
  return (
    <div>
      <ContactComponent/>
      <ContactForm/>
      <FrequentlyAskedQuestions/>
      <StillHaveQuestion/>
    </div>
  )
}

export default ContactPage
