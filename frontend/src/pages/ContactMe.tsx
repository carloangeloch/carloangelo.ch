import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import emailjs from '@emailjs/browser'

const ContactMe = () => {


    const defaultForm = {
        name: "",
        email: "",
        whatsapp: "",
        viber: "",
        service: "",
        message: ""
    }
    const [formData, setFormData] = useState(defaultForm)
    const [ noName, setNoName ] = useState(false)
    const [ noEmail, setNoEmail ] = useState(false)
    const [ noService, setNoService ] = useState(false)
    const [ noMessage, setNoMessage ] = useState(false)
    const appContext = useContext(AppContext);
    useEffect(() => appContext.setAppData({ currentPage: 'contact'}) ,[]);

    const clearValidation = () => {
        setNoName(false)
        setNoEmail(false)
        setNoService(false)
        setNoMessage(false)
    }

    const submitForm = (e: any) => {
        clearValidation()
        e.preventDefault()
        //validation
        formData.name === '' && setNoName(true)
        formData.email === '' && setNoEmail(true)
        formData.service === '' && setNoService(true)
        formData.message === '' && setNoMessage(true)

        if( !noName && !noEmail && !noService && !noMessage) { 
            emailjs.send(import.meta.env.VITE_EMAILJSKEY,import.meta.env.VITE_EMAILJSTEMPLATE,formData,{publicKey:import.meta.env.VITE_EMAILJSPUBLICKEY}).then(
                response => {
                    alert('Message sent!')
                    console.log('Success', response.text, response.status)
                },
                error => {
                    alert('Something went wrong! Please try again later.')
                    console.log('Failed', error)
                }
            )
        }
    }

    useEffect( () => {
        const tout = setTimeout(() => {
            clearValidation()
        }, 4000)

        return () => clearTimeout(tout)
    })
    
    return ( 
        <div className="py-16 bg-a">

            <SectionTitle title="Let’s Collaborate!" textColor='text-color-d'/>
            <div className='bg-d'>
                <Container>
                    <div className="text-base md:text-lg lg:text-xl w-full xl:w-[1000px] mx-auto text-center pt-5 pb-10 px-1">
                        <div className='my-10'>
                        If you need a passionate professional to transform your data into actionable insights, develop powerful web applications, or create designs that resonate with your audience, I’m here to help. Let’s collaborate and build something remarkable!
                        </div>
                        <div className="flex flex-wrap w-full text-left pt-5 px-0 lg:px-5 lg:pt-14 gap-y-8 lg:gap-0">
                            <div className="w-full lg:w-1/2 text-center lg:text-left">
                                <div className="text-lg md:text-xl lg:text-2xl text-color-a my-5">
                                    <strong>You can find me at</strong>
                                </div>
                                <div className="text-sm md:text-base lg:text-lg my-5">
                                    <strong className="opacity-50">EMAIL</strong><br/>
                                    <span>carloangelo.ch@gmail.com</span>
                                </div>
                                <div className="text-sm md:text-base lg:text-lg">
                                    <strong className="opacity-50">PHONE NUMBER</strong><br/>
                                    <span>(+63) 977-317-3871</span>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="text-lg md:text-xl lg:text-2xl text-color-a my-5  text-center lg:text-left">
                                    <strong>Let's get in touch</strong>
                                </div>
                                <form className='px-3 lg:px-0'>
                                    <input type="text" name="name" placeholder="Your Name" className="w-full rounded-md p-2 mb-2 border-color-a border-2 border-opacity-20 text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, name: e.target.value}))}/>
                                    <input type="text" name="email" placeholder="Your Email" className="w-full rounded-md p-2 mb-2 border-color-a border-2 border-opacity-20 text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, email: e.target.value}))}/>
                                    <input type="text" name="whatsapp" placeholder="Whatsapp Number (optional)" className="w-full rounded-md p-2 mb-2 border-color-a border-2 border-opacity-20 text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, whatsapp: e.target.value}))}/>
                                    <input type="text" name="viber" placeholder="Viber Number (optional)" className="w-full rounded-md p-2 mb-2 border-color-a border-2 border-opacity-20 text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, viber: e.target.value}))}/>
                                    <div className="my-3 text-color-a text-sm md:text-base lg:text-lg">
                                        <strong className="opacity-50">What type of service are you interested in?</strong>
                                        <div className="text-sm md:text-base lg:text-lg">
                                            <input type="radio" name="service" value="web" className="m-3"  onChange={e => setFormData( t => ({...t, service: e.target.value}))}/>
                                            Web Development
                                        </div>
                                        <div className="text-sm md:text-base lg:text-lg">
                                            <input type="radio" name="service" value="graphics" className="m-3"  onChange={e => setFormData( t => ({...t, service: e.target.value}))}/>
                                            Graphic Design
                                        </div>
                                        <div className="text-sm md:text-base lg:text-lg">
                                            <input type="radio" name="service" value="data" className="m-3"  onChange={e => setFormData( t => ({...t, service: e.target.value}))}/>
                                            Data Intelligence
                                        </div>
                                    </div>
                                    <textarea placeholder="Your Message" rows={6} className="w-full rounded-md p-2 mb-2 border-color-a border-2 border-opacity-20 text-sm md:text-base lg:text-lg" name="message"  onChange={e => setFormData( t => ({...t, message: e.target.value}))}/>
                                    {noName && <div className='bg-red-500 text-white p-1 text-sm lg:text-base'>Please add your name.</div>}
                                    {noEmail && <div className='bg-red-500 text-white p-1 text-sm lg:text-base'>Please add your email address.</div>}
                                    {noService && <div className='bg-red-500 text-white p-1 text-sm lg:text-base'>Please add your selected service.</div>}
                                    {noMessage && <div className='bg-red-500 text-white p-1 text-sm lg:text-base'>Please add your message.</div>}
                                    <div className="flex w-full my-2">
                                        <input type="submit" value="Send Message" className="bg-c text-color-a text-center w-full lg:w-1/3 py-3 rounded-lg ml-auto" onClick={submitForm}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default ContactMe