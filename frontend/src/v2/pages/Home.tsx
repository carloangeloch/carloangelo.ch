import { useContext, useEffect } from "react"
import { AppContext } from "../../context/AppContext"
import Header from '../components/Header'
import Socmed from '../components/Socmed';
import ImageLazyLoad from "../../utils/ImageLazyLoad";
import { dropboxConverter } from "../../utils/dropboxConverter";
import { textTyping } from "../../utils/textTyping";

const Home = () => {
    const appContext = useContext(AppContext)
    const roles = ["Web Designer and Developer", "Ecommerce Creative Marketer", "Data Intelligence Manager"]

    useEffect(() => appContext.setAppData({ currentPage: 'v2-home'}) ,[])
    
    return (
        <div>

            <div className="w-full bg-color-a2 font-title flex flex-wrap h-screen">
                <div className="w-full xl:w-1/3 h-1/2 md:h-1/4 lg:h-1/3 xl:h-full relative text-color-d">
                    <div className="h-auto xl:h-1/2">
                        <div className="flex p-3 xl:pl-20 xl:pt-20 w-full">
                            <Header/>
                        </div>
                    </div>
                    <div className="w-full h-full xl:h-1/2 relative xl:absolute bottom-0 text-center xl:text-left flex flex-col justify-center items-center">
                        <div className="relative w-full h-auto xl:h-full">
                            <div className="w-full relative xl:absolute bottom-0 p-0 xl:pb-20 px-5 md:px-20 flex flex-col justify-center items-center xl:justify-normal xl:items-start">
                                <div className="text-4xl text-color-c mb-3"><strong>Hi! I'm Carlo.</strong></div>
                                <div className="text-xl text-color-c flex"><strong>I am a {textTyping(roles)}</strong></div>
                                <div className="text-sm md:text-base xl:text-xl">Whether I’m building outstanding applications, crafting compelling designs, or brainstorming data-driven insights ideas, I pour my passion into everything I do.</div>
                                <div className="flex gap-x-3 mt-7 md:mt-3">
                                    <Socmed/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/3 h-1/2 md:h-3/4 lg:h-2/3 xl:h-full relative">
                    <div className="flex h-full p-5 xl:pr-20">
                        <img src={dropboxConverter('https://www.dropbox.com/scl/fi/cpq372ielpgcvgihxhnd4/ch-light.svg?rlkey=4tpubcoc6ygmjebarem38wig3&st=oqg01wig&dl=0')} alt="ch-logo" className="mx-auto opacity-20"/>
                    </div>
                    <div className="absolute z-10 top-0 w-full h-full flex justify-center">
                        <ImageLazyLoad imageSrc={['https://www.dropbox.com/scl/fi/x3lf6upig5xo7pxcdpfuf/papaB-40.png?rlkey=7dq27us7j0ia86it10ix30ryg&st=ewooqobp&dl=0',
                            'https://www.dropbox.com/scl/fi/kdr8vblykbn25qleqxwnt/papaB-70.png?rlkey=jsg2dsswkn7rf5dhtm9i4ty97&st=0djli7wh&dl=0',
                            'https://www.dropbox.com/scl/fi/hccgvb8f9nzuthgc6mvfs/papaB-100.png?rlkey=9ak2wa9qk95k24il8c3swm861&st=qi0e3ezj&dl=0'
                        ]}  altname="my-image" styles="h-full object-cover" />
                    </div>
                </div>
            </div>
            {/* <div className="bg-d">
                Eu occaecat aute incididunt veniam commodo cillum nulla exercitation ad mollit incididunt eu. Id excepteur incididunt nulla non. Id cillum nisi magna irure sint amet ullamco deserunt do Lorem elit sit fugiat proident. Occaecat eiusmod do et ex voluptate magna reprehenderit irure qui ex laborum amet. Elit culpa occaecat nisi sit cupidatat consectetur.
                Dolor ullamco esse commodo deserunt fugiat nostrud quis. Amet mollit nulla esse esse culpa cupidatat culpa minim laborum. Enim sit ipsum esse nulla ullamco nulla proident voluptate dolor. Excepteur labore Lorem cupidatat amet cupidatat nostrud dolor ea amet consectetur ex consequat cillum.
                Elit commodo laboris commodo incididunt non velit. Esse esse duis fugiat nulla ut non ad sit. Sint voluptate est Lorem sunt quis tempor magna incididunt. Cupidatat dolor tempor dolor elit amet ut consectetur tempor do aliquip reprehenderit quis aute aliquip. Occaecat sunt non non ea aliqua culpa duis dolor dolore.
                Veniam sint velit enim aliquip. Sunt cupidatat irure consectetur pariatur. Voluptate occaecat proident do elit irure aliqua proident nulla est. Commodo eiusmod occaecat duis minim fugiat adipisicing proident elit Lorem in. Dolore ullamco et mollit esse anim mollit ad excepteur duis velit. Minim veniam velit pariatur ipsum ea aliqua exercitation ullamco et in id.
                Proident est elit nostrud ea minim tempor deserunt. Tempor incididunt excepteur in ea et occaecat Lorem ut. Consectetur id labore ipsum reprehenderit et Lorem reprehenderit minim ut. Laborum irure dolor aliqua ut id adipisicing ex labore dolor magna. Proident proident qui voluptate reprehenderit ipsum non cupidatat adipisicing officia dolor culpa consectetur. Elit velit ipsum incididunt adipisicing ipsum culpa. Culpa incididunt aliquip non anim ea enim.
                Consequat minim culpa in elit occaecat cillum et sint pariatur ad anim. Ex cupidatat in pariatur nisi cupidatat proident exercitation aute consectetur deserunt consectetur. Tempor id enim aute consequat cupidatat ea. Quis non consequat irure qui mollit nostrud mollit cillum exercitation. Duis duis ea duis labore exercitation sunt Lorem do. Sunt velit excepteur duis cupidatat excepteur. Nulla cupidatat ut deserunt labore id anim cupidatat nostrud.
                <br/>
                                Eu occaecat aute incididunt veniam commodo cillum nulla exercitation ad mollit incididunt eu. Id excepteur incididunt nulla non. Id cillum nisi magna irure sint amet ullamco deserunt do Lorem elit sit fugiat proident. Occaecat eiusmod do et ex voluptate magna reprehenderit irure qui ex laborum amet. Elit culpa occaecat nisi sit cupidatat consectetur.
                Dolor ullamco esse commodo deserunt fugiat nostrud quis. Amet mollit nulla esse esse culpa cupidatat culpa minim laborum. Enim sit ipsum esse nulla ullamco nulla proident voluptate dolor. Excepteur labore Lorem cupidatat amet cupidatat nostrud dolor ea amet consectetur ex consequat cillum.
                Elit commodo laboris commodo incididunt non velit. Esse esse duis fugiat nulla ut non ad sit. Sint voluptate est Lorem sunt quis tempor magna incididunt. Cupidatat dolor tempor dolor elit amet ut consectetur tempor do aliquip reprehenderit quis aute aliquip. Occaecat sunt non non ea aliqua culpa duis dolor dolore.
                Veniam sint velit enim aliquip. Sunt cupidatat irure consectetur pariatur. Voluptate occaecat proident do elit irure aliqua proident nulla est. Commodo eiusmod occaecat duis minim fugiat adipisicing proident elit Lorem in. Dolore ullamco et mollit esse anim mollit ad excepteur duis velit. Minim veniam velit pariatur ipsum ea aliqua exercitation ullamco et in id.
                Proident est elit nostrud ea minim tempor deserunt. Tempor incididunt excepteur in ea et occaecat Lorem ut. Consectetur id labore ipsum reprehenderit et Lorem reprehenderit minim ut. Laborum irure dolor aliqua ut id adipisicing ex labore dolor magna. Proident proident qui voluptate reprehenderit ipsum non cupidatat adipisicing officia dolor culpa consectetur. Elit velit ipsum incididunt adipisicing ipsum culpa. Culpa incididunt aliquip non anim ea enim.
                Consequat minim culpa in elit occaecat cillum et sint pariatur ad anim. Ex cupidatat in pariatur nisi cupidatat proident exercitation aute consectetur deserunt consectetur. Tempor id enim aute consequat cupidatat ea. Quis non consequat irure qui mollit nostrud mollit cillum exercitation. Duis duis ea duis labore exercitation sunt Lorem do. Sunt velit excepteur duis cupidatat excepteur. Nulla cupidatat ut deserunt labore id anim cupidatat nostrud.
                <br/>
                                Eu occaecat aute incididunt veniam commodo cillum nulla exercitation ad mollit incididunt eu. Id excepteur incididunt nulla non. Id cillum nisi magna irure sint amet ullamco deserunt do Lorem elit sit fugiat proident. Occaecat eiusmod do et ex voluptate magna reprehenderit irure qui ex laborum amet. Elit culpa occaecat nisi sit cupidatat consectetur.

                Dolor ullamco esse commodo deserunt fugiat nostrud quis. Amet mollit nulla esse esse culpa cupidatat culpa minim laborum. Enim sit ipsum esse nulla ullamco nulla proident voluptate dolor. Excepteur labore Lorem cupidatat amet cupidatat nostrud dolor ea amet consectetur ex consequat cillum.

                Elit commodo laboris commodo incididunt non velit. Esse esse duis fugiat nulla ut non ad sit. Sint voluptate est Lorem sunt quis tempor magna incididunt. Cupidatat dolor tempor dolor elit amet ut consectetur tempor do aliquip reprehenderit quis aute aliquip. Occaecat sunt non non ea aliqua culpa duis dolor dolore.

                Veniam sint velit enim aliquip. Sunt cupidatat irure consectetur pariatur. Voluptate occaecat proident do elit irure aliqua proident nulla est. Commodo eiusmod occaecat duis minim fugiat adipisicing proident elit Lorem in. Dolore ullamco et mollit esse anim mollit ad excepteur duis velit. Minim veniam velit pariatur ipsum ea aliqua exercitation ullamco et in id.

                Proident est elit nostrud ea minim tempor deserunt. Tempor incididunt excepteur in ea et occaecat Lorem ut. Consectetur id labore ipsum reprehenderit et Lorem reprehenderit minim ut. Laborum irure dolor aliqua ut id adipisicing ex labore dolor magna. Proident proident qui voluptate reprehenderit ipsum non cupidatat adipisicing officia dolor culpa consectetur. Elit velit ipsum incididunt adipisicing ipsum culpa. Culpa incididunt aliquip non anim ea enim.

                Consequat minim culpa in elit occaecat cillum et sint pariatur ad anim. Ex cupidatat in pariatur nisi cupidatat proident exercitation aute consectetur deserunt consectetur. Tempor id enim aute consequat cupidatat ea. Quis non consequat irure qui mollit nostrud mollit cillum exercitation. Duis duis ea duis labore exercitation sunt Lorem do. Sunt velit excepteur duis cupidatat excepteur. Nulla cupidatat ut deserunt labore id anim cupidatat nostrud.
                <br/>
            </div> */}
        </div>
    )
}

export default Home