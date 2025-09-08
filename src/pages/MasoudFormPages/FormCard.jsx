import React from 'react'
import './SignFormanime.css'

const FormCard = ({children, isFlipped = false, frontContent, backContent}) => {
  return (
    <div className='flip-container enter-animation rounded-2xl'>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''} shadow-lg rounded-2xl shadow-orange-600`}>
        <div className='flip-card-front'>
          {frontContent || children}
        </div>
        <div className='flip-card-back'>
          {backContent || children}
        </div>
      </div>
    </div> 
  )
}

export default FormCard