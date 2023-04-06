import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import ReCAPTCHA from "react-google-recaptcha"
import Head from "next/head"

function ContactForm() {
  const [state, handleSubmit] = useForm("xlekpynj")
  const [captcha, setCaptcha] = useState(false)

  const handleRecaptchaChange = (token: string | null) => {
    // handle recaptcha change event here if needed
    setCaptcha(true)
    console.log(token)
  }

  const onSubmit = (error: string) => {
    alert("Form submission failed. Please try again later.")
  }

  const SubmitHandler = () => {
    handleSubmit
    alert("Form submitted successfully!")
  }

  // Is there any hook that waits till the action is completed then does another thing

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div>
        <ReCAPTCHA
          sitekey='6LfEu2ElAAAAAB1e1lmhQtSx0ZMkukfx1UGOY4FV'
          onChange={handleRecaptchaChange}
        />
      </div>
      <form
        onSubmit={() => (captcha ? SubmitHandler : onSubmit)}
        action='https://formspree.io/f/xlekpynj'
        method='POST'
        className='max-w-lg mx-auto'
      >
        <div className='mb-4'>
          <label htmlFor='email' className='block text-gray-300 font-bold mb-2'>
            Email Address
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='text-red-500'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='message' className='block text-gray-300 font-bold mb-2'>
            Message
          </label>
          <textarea
            id='message'
            name='message'
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
            className='text-red-500'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            type='submit'
            disabled={state.submitting}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
