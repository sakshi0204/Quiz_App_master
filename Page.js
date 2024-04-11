import React, { useState } from 'react'
import { QuestionData } from './QuestionData'
import QuizResult from './QuizResult';


function Page() {
    // take usestate 0 for idex-1
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);


    const changeQuestion = () => {
        // to increase our score
        updateScore();

        // to stop at end question
        if (currentQuestion < QuestionData.length-1) {
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }

    // to increase our score
    const updateScore = () => {
        if (clickedOption === QuestionData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }

    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0)
        setClickedOption(0)
        setScore(0)
    }

    return (
        <div>
            <p className="heading-txt">Quiz  App</p>
            <div className="container">
                {showResult ? (
                    <QuizResult score={score} totalScore={QuestionData.length} tryAgain={resetAll} />
                ) : (

                    <>
                        <div className="question">
                            {/* to fetch question from data */}
                            <span id="question-number">({currentQuestion+1}). </span>
                            <span id="question-txt">{QuestionData[currentQuestion].question}</span>

                        </div>
                        <div className="option-container">
                            {QuestionData[currentQuestion].options.map((option, i) => {
                                return (
                                    <button
                                        // className="option-btn"
                                        className={`
                                option-btn ${clickedOption === i + 1 ? "checked" : null
                                            }`}
                                        key={i}
                                        onClick={() => setClickedOption(i + 1)}
                                    >
                                        {option}
                                    </button>
                                )
                            })}

                            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                        </div>
                    </>

                )}
            </div>






        </div>
    )
}
export default Page