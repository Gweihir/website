import { useState } from "react"
import AWS from "aws-sdk"

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-west-1",
})

const ses = new AWS.SES()

const ContactForm = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setIsLoading(true)

    try {
      const params = {
        Destination: {
          ToAddresses: ["reedkeenan@gmail.com"], // Replace with your email address
        },
        Message: {
          Body: {
            Text: {
              Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            },
          },
          Subject: {
            Data: "New message from your website",
          },
        },
        Source: "reedkeenan@gmail.com", // Replace with your verified email address
      }

      const response = await ses.sendEmail(params).promise()

      if (response) {
        setIsSuccess(true)
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setIsError(true)
      }
    } catch (error) {
      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto'>
      <div className='flex flex-col mb-4'>
        <label htmlFor='name' className='mb-2 text-gray-300'>
          Name:
        </label>
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border border-gray-300 p-2 rounded-lg'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor='email' className='mb-2 text-gray-300'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border border-gray-300 p-2 rounded-lg'
        />
      </div>

      <div className='flex flex-col mb-4'>
        <label htmlFor='message' className='mb-2 text-gray-300'>
          Message:
        </label>
        <textarea
          id='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='border border-gray-300 p-2 rounded-lg'
        />
      </div>

      {isLoading ? (
        <p>Sending message...</p>
      ) : isSuccess ? (
        <p>Message sent successfully!</p>
      ) : isError ? (
        <p>Failed to send message.</p>
      ) : (
        <button
          type='submit'
          className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
        >
          Send Message
        </button>
      )}
    </form>
  )
}
export default ContactForm
