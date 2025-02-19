import { useContext, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser'
import { AppContext } from '../../../context/AppContext';
import pb from '../../../assets/papaB-2.png'
import Socmed from '../../components/Socmed'

const ContactContent = () => {

    const defaultForm = {
        name: "",
        email: "",
        whatsapp: "",
        viber: "",
        service: "",
        message: ""
    }
    const [formData, setFormData] = useState(defaultForm)
    const appContext = useContext(AppContext);
    useEffect(() => appContext.setAppData({ currentPage: 'contact'}) ,[]);


    const submitForm = (e: any) => {
        e.preventDefault()
        //validation
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


    return (
        <div className="flex flex-wrap xl:flex-nowrap text-color-d p-3">
            <div className="w-full xl:w-1/2 h-auto pr-10" id="contact-form">
                <div className="text-2xl xl:text-4xl text-color-c mb-3">
                    <strong>Let’s start a project together</strong>
                </div>
                <div className="w-full mb-3 text-sm xl:text-base">
                    If you need a passionate professional to transform your data into actionable insights, develop powerful web applications, or create designs that resonate with your audience, I’m here to help. Let’s collaborate and build something remarkable!
                </div>
                <div className="w-full flex flex-col gap-y-5 text-sm xl:text-base" id="form">
                    <form className='px-auto xl:px-3 lg:px-0 flex flex-col gap-y-3'>
                        <div>
                            <div>What is your Name<span className='text-red-500'>*</span></div>
                            <input type="text" name="name" className="w-full p-2 my-2 bg-color-a2 focus:bg-color-a2 border-b border-white focus:outline-none text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, name: e.target.value}))}/>
                        </div>
                        <div>
                            <div>What is your Email Address<span className='text-red-500'>*</span></div>
                            <input type="email" name="email" className="w-full p-2 my-2 bg-color-a2 focus:bg-color-a2 border-b border-white focus:outline-none invalid:bg-red-500 text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, email: e.target.value}))}/>
                        </div>
                        <div>
                            <div>What is your Whatsapp Number<span className='text-orange-300'> (optional)</span></div>
                            <input type="number" name="whatsapp" className="w-full p-2 my-2 bg-color-a2 focus:bg-color-a2 border-b border-white focus:outline-none text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, whatsapp: e.target.value}))}/>
                        </div>
                        <div>
                            <div>What is your Viber Number<span className='text-orange-300'> (optional)</span></div>
                            <input type="number" name="viber" className="w-full p-2 my-2 bg-color-a2 focus:bg-color-a2 border-b border-white focus:outline-none text-sm md:text-base lg:text-lg" onChange={e => setFormData( t => ({...t, viber: e.target.value}))}/>
                        </div>
                        <div className="my-3 text-sm md:text-base lg:text-lg">
                            <div>What type of service are you interested in?<span className='text-red-500'>*</span></div>
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
                        <div>
                            <div>Your Message<span className='text-red-500'>*</span></div>
                            <textarea rows={6} className="w-full rounded-md p-2 mb-2 bg-transparent border-white border-2 border-opacity-20 text-sm md:text-base lg:text-lg mt-2" name="message"  onChange={e => setFormData( t => ({...t, message: e.target.value}))}/>
                        </div>
                        {
                            (formData.name != '' && formData.email != '' && formData.service != '' && formData.message != '') &&
                            <div className="flex w-full my-2">
                                <input type="submit" value="Send Message" className="bg-c text-color-a text-center w-full lg:w-1/3 py-3 rounded-lg ml-auto" onClick={submitForm}/>
                            </div>
                        }
                    </form>
                </div>
            </div>
            <div className="w-full xl:w-1/2 mb-32 h-auto">
                <div className="flex flex-col gap-y-5  text-sm xl:text-base">
                    <div className="w-full flex justify-center items-center mt-20" id="my-image">
                        <div className="rounded-full bg-white w-[150px] h-[150px] overflow-hidden">
                            <img src={pb} alt="my-image"/>
                        </div>
                    </div>
                    <div id="contact-details" className='flex flex-col justify-center items-center gap-y-3'>
                        <div>You can email or call me at</div>
                        <div className='text-color-c'><strong>EMAIL</strong></div>
                        <div>carloangelo.ch@gmail.com</div>
                        <div className='text-color-c'><strong>PHONE/WHATSAPP/VIBER</strong></div>
                        <div>(+63) 977 317-3871</div>
                        <div className='flex gap-x-3'><Socmed/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactContent