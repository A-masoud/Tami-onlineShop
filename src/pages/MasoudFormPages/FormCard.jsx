import React from 'react'

const FormCard = ({children}) => {
  return (
    <div className='flex flex-col shadow-lg shadow-amber-800 bg-gradient-to-b from-[var(--primary-color-light)] to-[var(--primary-color)] w-[22rem] h-[26rem] md:w-3xl items-center justify-center rounded-4xl py-10'>
        {children}
    </div> 
  )
}

export default FormCard