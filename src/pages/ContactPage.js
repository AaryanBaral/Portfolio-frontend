import React from "react";
import "../styles/ContactPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactPage() {
  const [input, setInput] = React.useState({
  });

  const handleClick = (e) => {
    const { value, name } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const [submitting, setIsSubmitting] = React.useState(false);
  const submitClick = async (e) => {
    e.preventDefault()
    setIsSubmitting(()=> true);
    try {
        const res = await axios.post(
          `http://localhost:9001/api/v3/contact`,
          {
            full_name: input.full_name,
            contact: input.contact,
            email_address: input.email_address,
            message: input.message,
          }
        );
        if (res.status === 200) {
          toast.success("Successfully send");
          e.target.reset();
        }
      setIsSubmitting(()=> false);
    } catch (err) {
      toast.error("something Went wrong");
      setIsSubmitting(()=> false);

    }
  };


  return (
    <div className="h1">
    <h1>Contact Me</h1>
      <div className="contact-main">
        <div className="contact-links">
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-envelope" /></div>
            <div className="text">aryanbaral1100@gmail.com</div>
          </div>
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-phone-volume"  /></div>
            <div className="text">+977-9840251517</div>
          </div>
          <div className="contact-link">
            <div className="icon"><FontAwesomeIcon className="icon" icon="fa-solid fa-location-dot" /></div>
            <div className="text">Kapan marga, Bansbari, Kathmandu</div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={submitClick}>
            <div className="form-group">
              <input type="text" id="name" name= "full_name"className="form-control" placeholder="Enter your full name."  onChange={handleClick}/>
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email_address" className="form-control"placeholder="Enter your email address" onChange={handleClick}/>
            </div>
            <div className="form-group">
              <input type="tel" id="contact" name="contact" className="form-control"placeholder="Enter your contact number" onChange={handleClick}/>
            </div>
            <div className="form-group">
              <textarea id="message" className="form-control" name="message"  placeholder="Enter your message." onChange={handleClick}/>
            </div>
            <button type="submit" className="submit-btn btn" disabled={submitting}>
              Submit Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
