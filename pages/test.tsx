import React, { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import ReCAPTCHA from "react-google-recaptcha"
import Head from "next/head"

const TestSiteKey = process.env.CAP_SITE_TEST_KEY

function ContactForm() {
  const [isHuman, setIsHuman] = useState<boolean | null>(null)
  const [state, handleSubmitForm] = useForm("xlekpynj")

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  const submitForm = async (formData: FormData) => {
    try {
      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        handleSubmitForm(formData) // submit form data to Formspree
      } else {
        throw new Error("There was an error submitting the form.")
      }
    } catch (error) {
      console.error(error)
      alert("There was an error submitting the form. Please try again later.")
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Check whether the user has completed the reCAPTCHA verification
    if (isHuman) {
      // Get the form data
      const formData = new FormData(event.currentTarget)

      // Add the reCAPTCHA response to the form data
      formData.append("g-recaptcha-response", isHuman.toString())

      // Submit the form data to the server
      await submitForm(formData)
    } else {
      alert("Please complete the reCAPTCHA verification before submitting the form.")
    }
  }

  const handleRecaptchaChange = () => {
    setIsHuman(true)
  }

  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div>
        <ReCAPTCHA
          sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
          onChange={handleRecaptchaChange}
        />
      </div>
      <form
        onSubmit={handleSubmit}
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
