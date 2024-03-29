import React, { useRef, useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import ReCAPTCHA from "react-google-recaptcha"
import Head from "next/head"

function Contact() {
  const [state, handleSubmit] = useForm("xlekpynj")
  const [captcha, setCaptcha] = useState(false)
  const recaptchaRef = useRef<ReCAPTCHA | null>(null) // Create a ref for the ReCAPTCHA component

  const handleRecaptchaChange = (token: string | null) => {
    // handle recaptcha change event here if needed
    setCaptcha(true)
  }

  const SubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault() // prevent default form submission

    if (captcha) {
      const formElement = event.currentTarget as HTMLFormElement // cast event.currentTarget to HTMLFormElement
      const formData = new FormData(formElement) // create FormData object from form element
      const email = formData.get("email") // get email value from FormData
      const message = formData.get("message") // get message value from FormData
      const name = formData.get("name") // get message value from FormData

      try {
        await new Promise<void>((resolve) => {
          handleSubmit({ email, name, message }).then(() => resolve()) // include email and message in submissionData and resolve when handleSubmit is complete
        })

        alert("Form submitted successfully!")

        formElement.reset()
        setCaptcha(false)
        recaptchaRef.current?.reset()
      } catch (error) {
        alert("Form submission failed. Please try again later.")
      }
    } else {
      alert("Form submission failed. Please try again later.")
    }
  }

  return (
    <section className='flex flex-row justify-center'>
      <div
        id='contact'
        className='sm:mt-36 mt-6 pt-16 sm:border-accent sm:border-2 bg-slate-700 sm:h-full h-screen sm:pb-16 pb-8 rounded-md w-full sm:w-4/5 m:w-3/5 lg:w-4/6 xl:w-1/2 mx-2'
      >
        <h1 className='w-full text-accent text-center sm:font-semibold text-2xl sm:text-3xl pt-7 sm:pt-0'>
          Contact Us
        </h1>
        <Head>
          <title>Contact Us</title>
        </Head>
        <form
          onSubmit={SubmitHandler}
          action='https://formspree.io/f/xlekpynj'
          method='POST'
          className='max-w-lg mx-auto sm:mt-16 mt-10 px-2'
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
          <div className='mb-4'>
            <label htmlFor='name' className='block text-gray-300 font-bold mb-2'>
              Name
            </label>
            <input
              id='name'
              type='name'
              name='name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <ValidationError
              prefix='Name'
              field='name'
              errors={state.errors}
              className='text-red-500'
            />
          </div>
          <div className='sm:mb-6 mb-4'>
            <label htmlFor='message' className='block text-gray-300 font-bold mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='shadow appearance-none border rounded w-full px-3 sm:h-40 h-24 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
              className='text-red-500'
            />
          </div>
          <div className='flex sm:flex-row flex-col items-center justify-between sm:mx-8'>
            <button
              type='submit'
              disabled={state.submitting}
              className='py-2 sm:mt-0 mt-4 font-semibold sm:order-1 order-2 cursor-pointer px-4 text-sm sm:text-base rounded-lg text-slate-700 bg-primary hover:bg-accent active:bg-thirdinary'
            >
              Submit
            </button>{" "}
            <div className='flex justify-center items-center'>
              <ReCAPTCHA
                ref={recaptchaRef} // Pass the ref to the ReCAPTCHA component
                sitekey='6LfEu2ElAAAAAB1e1lmhQtSx0ZMkukfx1UGOY4FV'
                onChange={handleRecaptchaChange}
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
