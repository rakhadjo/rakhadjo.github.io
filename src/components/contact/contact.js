import React from "react"

const Contact = () => {
  return (
    <section id="contact">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {"Wanna get in touch? Awesome!"}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:rakhadjo@gmail.com`}
            >
              {"Let's Talk"}
            </a>
          </div>{" "}
    </section>
  )
}

export default Contact
