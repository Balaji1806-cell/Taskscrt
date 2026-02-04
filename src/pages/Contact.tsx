import { useState } from "react"

interface FormData {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })

  const submitForm = () => {
    if (!form.name || !form.email || !form.message) {
      alert("All fields are required")
      return
    }
    alert("Message sent successfully")
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <img src="https://img.freepik.com/premium-photo/contact-us-customer-support-hotline-people-connect-businessman-touching-phone-application-check-email_36325-4250.jpg?semt=ais_hybrid&w=740&q=80" />
      <input
        placeholder="Name"
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <textarea
        placeholder="Message"
        onChange={e => setForm({ ...form, message: e.target.value })}
      />
      <button onClick={submitForm}>Submit</button>
    </div>
  )
}
