import React, { useState } from 'react'
import FormCard from './FormCard'

const SignForm = () => {

  const [isShowSignup, setIsShowSignup] = useState(false)
  
  // State برای فرم ورود
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPhone, setLoginPhone] = useState('')
  
  // State برای فرم ثبت‌نام
  const [signupName, setSignupName] = useState('')
  const [signupLastName, setSignupLastName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPhone, setSignupPhone] = useState('')

  const handleShowSignup = () => {
    console.log('Switching to signup form')
    setIsShowSignup(true)
  }

  const handleShowLogin = () => {
    console.log('Switching to login form')
    setIsShowSignup(false)
  }

  const handleLoginSubmit = () => {
    if (!loginEmail || !loginPhone) {
      alert('لطفا همه فیلدها را پر کنید')
      return
    }
    console.log('فرم ورود ارسال شد:', { email: loginEmail, phone: loginPhone })
  }

  const handleSignupSubmit = () => {
    if (!signupName || !signupLastName || !signupEmail || !signupPhone) {
      alert('لطفا همه فیلدها را پر کنید')
      return
    }
    console.log('فرم ثبت‌نام ارسال شد:', { 
      name: signupName, 
      lastName: signupLastName, 
      email: signupEmail, 
      phone: signupPhone 
    })
  }
  
  const loginForm = (
    <div>
      <img src="public/signup.jpg" className='grayscale opacity-[0.02]' alt="" />
      <h1 className='text-4xl relative z-10'>ورود کاربر</h1>
      <div className='flex flex-col gap-4 text-center my-6 relative z-10'>
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='ایمیل' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='شماره تلفن' value={loginPhone} onChange={(e) => setLoginPhone(e.target.value)} />
      </div>
      
      <button onClick={handleLoginSubmit} className='w-[16rem] cursor-pointer text-black bg-[var(--quaternary-color)] font-bold hover:scale-105 transition-all duration-300 p-2 rounded-lg relative z-20'>ورود به حساب</button>
      <button onClick={handleShowSignup} className='cursor-pointer text-[var(--tertiary-color)] font-bold transition-all duration-300 p-2 relative z-20 hover:bg-opacity-20 px-4 py-2 rounded-lg'>هنوز ثبت نام نکرده اید؟ کلیک کنید</button>
    </div>
  )

  const signupForm = (
    <div>
      <img src="public/signup.jpg" className='grayscale opacity-[0.02]' alt="" />
      <h1 className='text-4xl relative z-10'>فرم ثبت نام</h1>
      <div className='flex flex-col gap-4 text-center my-6 relative z-10'>
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='نام' value={signupName} onChange={(e) => setSignupName(e.target.value)} />
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='نام خانوادگی' value={signupLastName} onChange={(e) => setSignupLastName(e.target.value)} />
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='ایمیل' value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} />
          <input className='text-center shadow-sm focus:outline-none shadow-amber-950 p-1 rounded-2xl' type="text" placeholder='شماره تلفن' value={signupPhone} onChange={(e) => setSignupPhone(e.target.value)} />
      </div>
      
      <button onClick={handleSignupSubmit} className='w-[16rem] cursor-pointer text-black bg-[var(--quaternary-color)] font-bold hover:scale-105 transition-all duration-300 p-2 rounded-lg relative z-20'>تکمیل ثبت نام</button>
      <button onClick={handleShowLogin} className='cursor-pointer text-[var(--tertiary-color)] font-bold transition-all duration-300 p-2  relative z-20 hover:bg-opacity-20 px-4 py-2 rounded-lg'>قبلا ثبت نام کرده ام</button>
    </div>
  )

  return (
    <div className='font-vazir w-full h-screen flex justify-center items-center bg-[var(--primary-color)] text-[var(--secondary-color)]'>
      <FormCard 
        isFlipped={isShowSignup}
        frontContent={loginForm}
        backContent={signupForm}
      />
    </div>
  )
}

export default SignForm