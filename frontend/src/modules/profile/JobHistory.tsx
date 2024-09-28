import { FC, useRef } from "react"
import Container from "../../components/Container"
import SectionTitle from "../../components/SectionTitle"
import { useInView } from "framer-motion";
import sdLogo from '../../assets/split_dragon_logo.jpeg';
import intrepidLogo from '../../assets/flywheel_digital_logo.jpeg';
import goForthLogo from '../../assets/go_forth_pest_control_logo.jpeg';
import eCreationsLogo from '../../assets/e-creation.jpeg';
import m3dLogo from '../../assets/m3d-logo.png';
import amkorLogo from '../../assets/amkor.jpeg';
import stacksLogo from '../../assets/stacks.png';

interface JobItemHandlerProps {
    companyIcon?: any;
    jobDate: string;
    position: string;
    company: string;
    location: string;
    content: any;
}


const JobItemHandler : FC<JobItemHandlerProps> = ({companyIcon,jobDate, position, company, location, content}) => {
    const refer = useRef(null)
    const isInView = useInView(refer, {once: true})


    return (
        <div
            ref={refer}
            style={{
                transform: isInView ? "none" : "translatey(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
            className="w-full p-2 md:p-4 lg:p-6 xl:p-10 flex flex-wrap text-color-d"
        >
            <div className="hidden lg:block w-1/5 text-center relative">
                <strong className="text-lg absolute top-1/2 left-0 w-full px-8 ">
                    {jobDate}
                </strong>
            </div>
            <div className="w-full lg:w-4/5">
                <div className="text-lg lg:text-xl flex">
                    <img src={companyIcon} alt={companyIcon} className="h-[50px] mr-5 mt-5 rounded-md"/>
                    <div className="flex flex-wrap gap-y-1">
                        <div className="w-full"><strong className="text-color-c">{position}</strong></div>
                        <div className="w-full"><span>{company} – {location}</span></div>
                        <div className="block lg:hidden text-sm w-full">
                            {jobDate}
                        </div>
                    </div>
                </div>
                <div className="text-base lg:text-lg opacity-80 mt-8">
                    {content.map( (i:any) => {
                        return(
                            <div key={i["title"]}>
                                <strong>{i["title"]}:</strong><span className="opacity-80"> {i["description"]}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

const JobHistory = () => {
    return (
        <div className="bg-a w-full py-5 md:py-8 lg:py-12 xl:py-16" >
            <SectionTitle title="Job History" textColor="text-color-d "/>
            <Container>
                <JobItemHandler
                    companyIcon={sdLogo}
                    jobDate='May 2020 - September 2024'
                    position='Data Intelligence and Creative Manager'
                    company='SplitDragon'
                    location='Hong Kong SAR'
                    content={[
                        {
                            title: "Lead and Inspire",
                            description: "Lead and support the data team, helping to drive the company’s growth."
                        },
                        {
                            title: "Team Development",
                            description: "Conduct training sessions and host weekly team meetings to ensure everyone is aligned and progressing."
                        },
                        {
                            title: "Data Engineering",
                            description: "Build and maintain data pipelines using Google Cloud Platform to provide clean, well-structured data for our teams."
                        },
                        {
                            title: "Performance Monitoring",
                            description: "Monitor the quality and performance of our data to keep it reliable and useful."
                        },
                        {
                            title: "Automation and Efficiency",
                            description: "Develop RPA bots and software using Python to automate repetitive tasks, freeing up time for more valuable work."
                        },
                        {
                            title: "Data Visualization",
                            description: "Create insightful data visualizations and analyses with Data Studio to guide decision-making."
                        },
                        {
                            title: "SEO Enhancement",
                            description: "Improve the SEO of our products on platforms like Lazada and Shopee by analyzing search keyword performance."
                        },
                        {
                            title: "AI-Driven Content Optimization",
                            description: "Craft compelling prompts to enhance our clients’ titles and descriptions, leveraging the power of Artificial Intelligence to create new ones."
                        },
                        {
                            title: "Graphic Team Management",
                            description: "Manage our graphic team to deliver outstanding marketing and online marketplace graphics."
                        },
                    ]}
                />
                <JobItemHandler
                    companyIcon={goForthLogo}
                    jobDate='September 2019 - September 2020'
                    position='Graphic Designer'
                    company='Go Fort Pest Control'
                    location='North Carolina, USA'
                    content={[
                        {
                            title: "Design Social Media Content",
                            description: "Develop visually appealing marketing images for social media campaigns, aligning with our brand’s message and aesthetic to drive engagement and grow our online presence."
                        },
                        {
                            title: "Character & Illustration Development",
                            description: "Create unique characters and illustrations that support our company’s storyline, ensuring cohesive and creative visuals for infographics and promotional materials."
                        },
                        {
                            title: "Animated Video Production",
                            description: "Design and produce short animated videos for seasonal campaigns, highlighting our services and special promotions in a fun, captivating way that grabs attention and converts viewers into customers"
                        },
                    ]}
                />
                
                <JobItemHandler
                    companyIcon={intrepidLogo}
                    jobDate='November 2018 - August 2019'
                    position='Live Stream Manager'
                    company='Intrepid South East Asia'
                    location='Makati City, Philippines'
                    content={[
                        {
                            title: "Live Streaming Management",
                            description: "Oversee and manage live streaming sessions on Lazada’s in-app platform and Facebook Live."
                        },
                        {
                            title: "Production Optimization",
                            description: "Set up and optimize production equipment for seamless streaming experiences."
                        },
                        {
                            title: "Reporting & Coordination",
                            description: "Coordinate and manage reports, handling all streaming-related requests."
                        },
                        {
                            title: "Creative Design",
                            description: "Design and create eye-catching 2D animated banners and popups to enhance the viewer experience."
                        },
                        {
                            title: "Marketing Materials",
                            description: "Develop marketing materials, including banners for Lazada’s shop-in-shop, to drive engagement and sales."
                        },
                        {
                            title: "Photography & Editing",
                            description: "Conduct photoshoots and perform image editing to ensure high-quality visual content."
                        },
                        {
                            title: "Sound & Video Editing",
                            description: "Handle sound and video editing to produce polished, professional livestreams.Conduct photoshoots and perform image editing to ensure high-quality visual content."
                        },
                    ]}
                />
                <JobItemHandler
                    companyIcon={eCreationsLogo}
                    jobDate='June 2018 - November 2018'
                    position='Graphic Artist'
                    company='E-Creations Inc.'
                    location='Manila, Philippines'
                    content={[
                        {
                            title: "Content Creation",
                            description: "Develop image descriptions using provided word descriptions and images."
                        },
                        {
                            title: "Design Production",
                            description: "Create banners, tarpaulins, logos, and product headers."
                        },
                        {
                            title: "Photography & Editing",
                            description: "Perform photoshoots and handle image editing to enhance visual content."
                        },
                        {
                            title: "Cross-functional Support",
                            description: "Assist with data analysis, applicant exams, and technical support within the company."
                        },
                        {
                            title: "Quality Assurance",
                            description: "Conduct QA on image editing and web page uploads."
                        },
                        {
                            title: "Multimedia Editing",
                            description: "Handle sound and video editing tasks."
                        },
                        {
                            title: "Web Management",
                            description: "Upload images and content to the Hataw webpage."
                        },
                    ]}
                />
                <JobItemHandler
                    companyIcon={stacksLogo}
                    jobDate='September 2016 - February 2018'
                    position='Frontend Developer'
                    company='Stacks Solution Inc.'
                    location='Taguig City, Philippines'
                    content={[
                        {
                            title: "Collaboration & Development",
                            description: "Work closely with designers to build and optimize applications and their features."
                        },
                        {
                            title: "Web Animation",
                            description: "Enhance web dynamics and animation using CSS and JavaScript."
                        },
                        {
                            title: "UI/UX Design",
                            description: "Assist the design team in creating and improving UI designs with Adobe Photoshop and Illustrator."
                        },
                        {
                            title: "Backend Development",
                            description: "Help develop backend microservices using Django and Python."
                        },
                    ]}
                />
                <JobItemHandler
                    companyIcon={m3dLogo}
                    jobDate='November 2015 - June 2016'
                    position='Senior Graphic Artist'
                    company='M3D Construction Format'
                    location='Makati City, Philippines'
                    content={[
                        {
                            title: "Team Leadership",
                            description: "Supervise, train, and lead a strong team to produce high-quality design outputs."
                        },
                        {
                            title: "2D and 3D Design",
                            description: "Handle 3D architectural and product designs. Also create and modify design based on client’s requirements."
                        },
                        {
                            title: "Supervision",
                            description: "Oversee artists and printing operators to ensure production quality."
                        },
                        {
                            title: "Reporting",
                            description: "Prepare daily and monthly productivity reports, as well as weekly inventory and purchasing reports."
                        },
                    ]}
                />
                <JobItemHandler
                    companyIcon={amkorLogo}
                    jobDate='July 2013 - December 2014'
                    position='Logistic Assistant'
                    company='Amkor Technologies, Inc.'
                    location='Laguna, Philippines'
                    content={[
                        {
                            title: "Shipment Scheduling",
                            description: "Coordinate and schedule shipments for dispatch."
                        },
                        {
                            title: "Document Preparation",
                            description: "Create commercial invoices and packing lists, ensuring all documents are ready for dispatch."
                        },
                        {
                            title: "Quality Check",
                            description: "Verify shipments by checking boxes against packing lists."
                        },
                        {
                            title: "Monitoring & Reporting",
                            description: "Update shipment monitoring and reporting to maintain accurate tracking."
                        },
                    ]}
                />
                
                <JobItemHandler
                    companyIcon={m3dLogo}
                    jobDate='January 2012 - July 2012'
                    position='Graphic Artist'
                    company='M3D Construction Format'
                    location='Makati City, Philippines'
                    content={[
                        {
                            title: "2D Design",
                            description: "Create Design for physical media banners. Also modify clients final artworks for printing use."
                        },
                        {
                            title: "3D Design",
                            description: "Handle 3D architectural and product designs."
                        },
                        {
                            title: "Machine Operation",
                            description: "Manage and operation large format printers. "
                        },
                        {
                            title: "Reporting",
                            description: "Prepare daily and monthly productivity reports, as well as weekly inventory and purchasing reports."
                        },
                    ]}
                />
            </Container>

        </div>
    )
}

export default JobHistory