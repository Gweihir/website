import sgMail from "@sendgrid/mail"

interface EmailData {
  name: string
  email: string
  message: string
}

interface SendEmailData extends EmailData {
  to: string[]
}

const sendEmail = async ({ to, name, email, message }: SendEmailData) => {
  try {
    // add process.env.SENDGRID_API_KEY to setApiKey
    sgMail.setApiKey("")

    const msg = {
      to: to,
      from: email,
      subject: `New message from ${name}`,
      text: message,
    }

    await sgMail.send(msg)

    console.log("Email sent successfully")
  } catch (error) {
    console.error(error)
    throw new Error("Failed to send email")
  }
}

export default sendEmail
