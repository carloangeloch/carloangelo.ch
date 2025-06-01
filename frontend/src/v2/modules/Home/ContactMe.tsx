import Button from '../../components/Button'

const ContactMe = () => {
  return (
    <div
        id="contact-me"
        className="w-full p-10 flex flex-col items-center gap-y-8"
      >
        <div className="w-full text-center flex flex-col gap-y-4 p-8 text-color-d">
          <strong className="text-4xl">Let's Work Together</strong>
          <p>
            Have a project in mind? I'm available for freelance work and
            collaborations.
          </p>
        </div>
        <Button content="Get in touch" isArrow={true} url="/contact" />
      </div>
  )
}

export default ContactMe