import React, { useState } from "react";
import "./FrequentlyAskedQuestions.css"; // Updated CSS file

const faqData = [
  {
    question: "Does your POS system include inventory management?",
    answer:
      "Our POS systems are ideal for retail stores, restaurants, cafes, and service-based businesses of all sizes. They can be customized to suit your specific industry needs.",
  },
  {
    question: "Does your POS system include inventory management?",
    answer:
      "Our POS systems are ideal for retail stores, restaurants, cafes, and service-based businesses of all sizes. They can be customized to suit your specific industry needs.",
  },
  {
    question: "Does your POS system include inventory management?",
    answer:
      "Our POS systems are ideal for retail stores, restaurants, cafes, and service-based businesses of all sizes. They can be customized to suit your specific industry needs.",
  },
  {
    question: "Does your POS system include inventory management?",
    answer:
      "Our POS systems are ideal for retail stores, restaurants, cafes, and service-based businesses of all sizes. They can be customized to suit your specific industry needs.",
  },
  {
    question: "Does your POS system include inventory management?",
    answer:
      "Our POS systems are ideal for retail stores, restaurants, cafes, and service-based businesses of all sizes. They can be customized to suit your specific industry needs.",
  },
];

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently asked questions</h2>
      <p className="faq-subheading">Everything you need to know about POS System</p>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${index === activeIndex ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">
                {index === activeIndex ? "−" : "+"}
              </span>
            </div>
            {index === activeIndex && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
