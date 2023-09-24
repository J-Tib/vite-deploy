
import { useState } from 'react'

export default function ContactPage() {
    const [ContactData, setContactData] = useState(() => ({
        name: '',
        email: '',
        phone: '',
        subject: '',
        comment: '',
    }))
    console.log(ContactData)

    const dataChange = (event: any) =>  {
        const { name, value } = event.target
        setContactData(prevContactData => ({
            ...prevContactData,
            [name]: value
        }))
    }

    const handleClick = (event: any) => {
        event.preventDefault()
        const textareaElements = document.getElementsByTagName('textarea')
        const inputTag = document.getElementsByTagName('input')

        for (let index = 0; index < inputTag.length; index++) {
            inputTag[index].value = '';
        }
        for (let i = 0; i < textareaElements.length; i++) {
            textareaElements[i].value = '';
        }
    }

  return (
    <section className="contact" id="Contact">
        <div className="contact--form">
            <div className="title--contact">
                <h1>Contact <span>Me!</span></h1>
            </div>
            <div className="table--form">
                <input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Full Name"
                onChange={dataChange}
                value={ContactData.name}
                />
                <input 
                type="email" 
                name="email" 
                id="email" 
                placeholder="Email Address"
                onChange={dataChange}
                value={ContactData.email}
                />
                <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Mobile Number" 
                pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={dataChange}
                value={ContactData.phone} required
                />
                <input 
                type="text" 
                name="subject" 
                id="subject" 
                placeholder="Email Subject" 
                onChange={dataChange}
                value={ContactData.subject}
                />
                <textarea 
                className="comment" 
                name="comment"
                placeholder="Your Message"
                onChange={dataChange}
                value={ContactData.comment}
                >
                </textarea>
            </div>
            <button 
            id="submit"
            onClick={handleClick}
            >Send Message</button>
        </div>
    </section>
  )
}
