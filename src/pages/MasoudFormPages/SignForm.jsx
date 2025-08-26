import React, { useState } from 'react'
import FormCard from './FormCard'

const SignForm = () => {

  const [isShowSignup, setIsShowSignup] = useState(false)

  const handleShowSignup = () => {
    setIsShowSignup(true)
  }

  const handleShowLogin = () => {
    setIsShowSignup(false)
  }
  
  return (
    <div className='font-vazir w-full h-screen flex justify-center items-center bg-[var(--primary-color)] text-[var(--secondary-color)]'>

             {isShowSignup ? (
              <FormCard>
              <img src="public/signup.jpg" className='absolute top-0 left-0 w-full md:scale-x-[0.57] md:scale-y-[0.68] h-full scale-[0.7] grayscale opacity-[0.02] z-1 rounded-4xl object-cover' alt="" />
              <h1 className='text-4xl'>فرم ثبت نام</h1>
              <div className='flex flex-col gap-4 text-center my-6'>
                  <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='نام' />
                  <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='نام خانوادگی' />
                  <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='ایمیل' />
                  <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='شماره تلفن' />
              </div>
              
              <button className='z-10 w-[16rem] cursor-pointer text-black bg-[var(--quaternary-color)] font-bold hover:scale-105 transition-all duration-300 p-2 rounded-lg'>تکمیل ثبت نام</button>
              <button onClick={handleShowLogin} className='z-10 cursor-pointer text-[var(--tertiary-color)] font-bold transition-all duration-300 p-2 rounded-lg'>قبلا ثبت نام کرده ام</button>
          </FormCard>
             ) : (
              <FormCard>
            <img src="public/signup.jpg" className='absolute top-0 left-0 w-full md:scale-x-[0.57] md:scale-y-[0.68] h-full scale-[0.7] grayscale opacity-[0.02] z-1 rounded-4xl object-cover' alt="" />
            <h1 className='text-4xl'>ورود کاربر</h1>
            <div className='flex flex-col gap-4 text-center my-6'>
                <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='ایمیل' />
                <input className='z-10 text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='شماره تلفن' />
            </div>
            
            <button className='z-10 w-[16rem] cursor-pointer text-black bg-[var(--quaternary-color)] font-bold hover:scale-105 transition-all duration-300 p-2 rounded-lg'>ورود به حساب</button>
            <button onClick={handleShowSignup} className='z-10 cursor-pointer text-[var(--tertiary-color)] font-bold transition-all duration-300 p-2 rounded-lg'>هنوز ثبت نام نکرده اید؟ کلیک کنید</button>
        </FormCard>
             )}
    </div>
  )
}

export default SignForm