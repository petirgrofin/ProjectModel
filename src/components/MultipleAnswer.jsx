import React from 'react'
import { useState } from 'react'

const MultipleAnswerOption = ({id, option, setSelectedId, isSelected, isCorrect, isIncorrect, isDisabled}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div onMouseEnter={() => {setIsHovered(!isDisabled)}} onMouseLeave={() => {setIsHovered(false)}} onClick={() => {if (!isDisabled){setSelectedId(id)}}}
    className={`option-container 
    ${isSelected ? 'selected' : ''} 
    ${isCorrect ? 'correct' : ''}
    ${isIncorrect ? 'incorrect' : ''}
    ${isDisabled ? 'disabled' : ''}
    ${isHovered && !isSelected ? 'hovered' : ''}`}>{option}</div>
  )
}

const MultipleAnswer = ({info, options, correctAnswerIndex, explanation}) => {

  const [selectedId, setSelectedId] = useState(-1);
  const [wasAnswered, setWasAnswered] = useState(false);
  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);
  const [wasWhyClicked, setWasWhyClicked] = useState(false);
  return (
    <div className='multiple-answer-container'>
      <div className='question-container'>
        <p>{info}</p>
        {options.map((option, i) => (
          <MultipleAnswerOption 
          id={i} 
          isSelected={selectedId == i} 
          isCorrect={selectedId == i && wasAnswered && answerIsCorrect} 
          isIncorrect={selectedId == i && wasAnswered && !answerIsCorrect} 
          isDisabled={selectedId != i && wasAnswered}
          setSelectedId={setSelectedId} 
          option={option}></MultipleAnswerOption>
        ))}
        <div className='buttons-container'>
          <button onClick={() => {
            if (selectedId != -1){
              setWasAnswered(true);
              setAnswerIsCorrect(selectedId == correctAnswerIndex)
            }
          }} className='check-button'>Revisar
          </button>
          <button onClick={() => {setWasWhyClicked(!wasWhyClicked)}} className={`why-button ${wasAnswered ? '' : 'hidden'}`}>
            ¿Por qué?
          </button>
        </div>
      </div>
      <div className={`explanation-container ${wasWhyClicked ? 'slide-down' : ''}`}>
        <p className='explanation-text'>
          {explanation}
        </p>
      </div>
    </div>
  )
}

export default MultipleAnswer
