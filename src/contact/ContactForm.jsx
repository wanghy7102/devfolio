import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let templateParams = {
      email: email,
      name: name,
      message: message,
    };
    emailjs.send(
      "service_6urdlqw",
      "template_ovm27eq",
      templateParams,
      "emtCwHO16kNS49jde"
    );
  };

  return (
    <section className="single">
      <div className="wrap">
        <article className="single-post">
          <div className="contact-form">
            <form onSubmit={(e) => handleSubmit(e)} id="contact-form">
              <div className="contact-form__item">
                <label className="contact-form__label">Email Address *</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email address..."
                  className="contact-form__input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="contact-form__item">
                <label className="contact-form__label">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  className="contact-form__input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="contact-form__item">
                <label className="contact-form__label">Message *</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-form__textarea"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                className="contact-form__gotcha"
                val="hello"
              />

              <div className="contact-form__item">
                <input
                  type="submit"
                  value="Send Message"
                  className="button button--large"
                />
              </div>
            </form>
          </div>
        </article>
      </div>
    </section>
  );
};

export default ContactForm;
