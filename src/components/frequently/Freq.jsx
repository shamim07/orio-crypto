import  { useState } from 'react';
import { useEffect } from "react";
import { FaPlus, FaTimes } from 'react-icons/fa';
import './frequently.css';
import AOS from "aos";
function Freq() {
    useEffect(() => {
        AOS.init();
    
    }, []);
  // Define state variables
  const [openQuestions, setOpenQuestions] = useState([]);

  // Function to handle button click and toggle paragraph
  const handleButtonClick = (questionId) => {
    setOpenQuestions((prevOpenQuestions) => {
      if (prevOpenQuestions.includes(questionId)) {
        // If the question is already open, close it
        return prevOpenQuestions.filter((id) => id !== questionId);
      } else {
        // If the question is closed, open it and close others
        return [questionId];
      }
    });
  };

  // Define your question data
  const questionsData = [
    { id: 1, question: 'What is Orion Crypto ?', content: 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumstnecaliquetid ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla. Elitadipiscingproin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio. Potentiмnibhnatoque amet amet, tincidunt ultricies et. Et nam rhoncus sit nullam diam tinciduntcondimentum nullam.' },
    { id: 2, question: 'What is the difference between the presale and public token sale ?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 3, question: 'What is £ORION$?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' }, 

    { id: 4, question: 'How Does £ORION$ work  ?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },

    { id: 5, question: 'How can I join the £ORION$ presale?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 6, question: 'Benefits of ORION ?', content: ' Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 7, question: 'When is the launch ?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 8, question: 'WHAT IS A REWARD TOKEN?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 9, question: 'What is the launch price ?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 10, question: 'WHAT ARE THE LEVELS OF BUY AND SELL TAX??', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 11, question: 'HOW LONG DO I NEED TO HOLD BEFORE I AM PAID IN REWARDS?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },
    { id: 12, question: 'HOW MUCH OF THE PROFITS GO TO THE ORION TEAM?', content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.' },

    // Add more questions as needed
  ];

  return (
    <div className="frequently">
      <div className="container">
        <div className="frequently-head"  data-aos="fade-up" data-aos-duration="1000">
          <h2>Frequently Asked Questions</h2>
        </div>

        {questionsData.map((questionData) => (
          <div key={questionData.id} className='frequestion'  data-aos="fade-up"  >

            <div className="ques" onClick={() => handleButtonClick(questionData.id)}>
              <div className="q" >{questionData.question}</div>

              <div className="plus"   data-aos="fade-up" >
                {openQuestions.includes(questionData.id) ? <FaTimes size='20px' /> : <FaPlus size='20px' />}
              </div>
            </div>

            <div  key={questionData.id}className={`con ${openQuestions.includes(questionData.id) ? 'open' : 'closed ' }`}>{questionData.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Freq;