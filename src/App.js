import React, { useState } from 'react'

const App = () => {

  const [currentQuestion, setcurrentQuestion] = useState(0);
  // we will toggle the show score
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // lets add some questions

  const allQuestions = [
    {
      text: 'Who is the CEO of Amazon?',
      options: [
        { answerText: 'Jeff', isCorrect: true },
        { answerText: 'Mark', isCorrect: false },
        { answerText: 'Elon', isCorrect: false },
      ],
    },
    {
      text: 'Who is the CEO of Facebook?',
      options: [
        { answerText: 'Jeff', isCorrect: false },
        { answerText: 'Mark', isCorrect: true },
        { answerText: 'Elon', isCorrect: false },
      ],
    },
    {
      text: 'Who is the CEO of Tesla?',
      options: [
        { answerText: 'Jeff', isCorrect: false },
        { answerText: 'Mark', isCorrect: false },
        { answerText: 'Elon', isCorrect: true },
      ],
    },
    {
      text: 'Who is the CEO of Google?',
      options: [
        { answerText: 'Jeff', isCorrect: false },
        { answerText: 'Mark', isCorrect: false },
        { answerText: 'Larry', isCorrect: true },
      ],
    },
    {
      text: 'Who is the CEO of Youtube?',
      options: [
        { answerText: 'Javed', isCorrect: true },
        { answerText: 'Mark', isCorrect: false },
        { answerText: 'Elon', isCorrect: false },
      ],
    },
  ]

  const handleAnswerOptions = (isCorrect) => {
    if (isCorrect) {
      setscore(score + 1);
    }

    const handleNextQuestion = currentQuestion + 1;
    if (handleNextQuestion < allQuestions.length) {
      setcurrentQuestion(handleNextQuestion);
    } else {
      setshowScore(true);
    }
  }

  return (
    <div className='flex w-full h-screen justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500'>
      <div className='bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl text-center'>

        {
          showScore ? (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                You scored {score} out of {allQuestions.length}
              </div>
              <br></br>
              <button className='m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500' onClick={()=> {window.location.reload()}}>Quiz again!</button>
            </>
          ) : (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                <div className='m-4'>
                  <span>Question {currentQuestion + 1}</span>/{allQuestions.length}
                </div>
                <div className='m-4'>
                  {allQuestions[currentQuestion].text}
                </div>

                <div className='w-full'>
                  {
                    allQuestions[currentQuestion].options.map((options) => (
                      <button className='m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-100 hover:shadow-xl transition-all duration-500 ease-in-out' onClick={()=>handleAnswerOptions(options.isCorrect)}>{options.answerText}</button>
                    ))
                  }
                  
                </div>

              </div>
            </>
          )
        }


      </div>
    </div>
  )
}

export default App