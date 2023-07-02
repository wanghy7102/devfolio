const ContactForm = () => {
  return (
    <section className="single">
      <div className="wrap">
        <article className="single-post">
          <div className="contact-form">
            <form
              method="post"
              action="https://formspree.io/hello@jekyllthemes.io"
              id="contact-form"
            >
              <div className="contact-form__item">
                <label className="contact-form__label">Email Address *</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your email address..."
                  className="contact-form__input"
                />
              </div>

              <div className="contact-form__item">
                <label className="contact-form__label">Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  className="contact-form__input"
                />
              </div>

              <div className="contact-form__item">
                <label className="contact-form__label">Message *</label>
                <textarea
                  name="message"
                  placeholder="Your message..."
                  className="contact-form__textarea"
                ></textarea>
              </div>

              <input type="hidden" name="_next" value="/thanks" />
              <input
                type="hidden"
                name="_subject"
                value="Contact form submission"
              />
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                className="contact-form__gotcha"
                val=""
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
