import React, { Component } from 'react';
import '../main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faShieldAlt, faGlobe } from '@fortawesome/free-solid-svg-icons';
// import {faTwitter, faFacebookF, faLinkedinIn, faTelegram, faMediumM} from '@fortawesome/free-brands-svg-icons';
// import gym1 from '../image/gym1.jpeg';
// import fitnessLogo from '../image/fitnessLogo.jpg';
// import workFit from  '../image/workFit.jpg';


class HomeFit extends Component {
    render() { 
        return ( 
            <React.Fragment>
                {/* <img src={workFit} alt="workFit-image" /> */}
                <div className="cover-img">
                    <div className="cover-info bg-white rounded-lg p-6 w-1/3 absolute mb-2">
                        <h3 className="pb-2 text-2xl">Work Out to Stay Fit</h3>
                        <p className="font-light">Here on Fithub, you get to work with fitness trainer remotely and enjoy our inHouse fitness equippment.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">SIGN UP TO STAY FIT</button>
                    </div>
                </div>

                {/* <h3 className="mt-8 text-center text-4xl">HOW FitHUB STANDS OUT FROM THE PACK</h3>
                    <p className="my-4 text-center text-xl">FitHUB seeks to distinguish itself from other ftiness platform around the globe.</p>
                        <div className="grid grid-cols-3 gap-8 my-8 mx-8 icon-container">
                                <div className="text-center px-12">
                                <FontAwesomeIcon icon={faUsers} size="7x" color="#4299e1" />
                                <h4 className="pt-2 text-xl">PROFESSIONAL</h4>
                                <p className="pt-1">World Class trading engine for a fast and robust trading experience</p>
                                </div>

                                <div className="text-center px-12" >
                                <FontAwesomeIcon icon={faShieldAlt} size="7x" color="#4299e1" />
                                <h4 className="pt-2 text-xl">SECURE</h4>
                                <p className="pt-1">Enhanced security through a wide array of options to protect digital assets</p>
                                </div>

                                <div className="text-center px-12">
                                <FontAwesomeIcon icon={faGlobe} size="7x" color="#4299e1" />
                                <h4 className="pt-2 text-xl">GLOBAL</h4>
                                <p className="pt-1">ProBit seeks to distinguish itself from other exchanges proliferating the market.</p>
                                </div>
                         </div>

                    <div className="flex items-center mt-24 mb-8 pl-6 about-container">
                         <div>
                             <div className="about-profile w-2/3 bg-blue-500 py-6 px-12 rounded-tr-full rounded-bl-full h-56">
                             <h4 className="text-2xl pb-8">About FitHUB</h4>
                             <p className="pl-10">Here at FitHUB, we provide streamlined communication, an online and onsite focused workout plan including remote check-ins.</p>
                             </div>
                         </div>                        
                        <img src={gym1} alt="Gym" className="w-1/2 gym-profile" />
                    </div>

                    <div className="bg-blue-500 mt-24">
                        <h3 className="text-center text-3xl uppercase tracking-wide py-12">Official Media</h3>
                            <div className="flex justify-center text-center py-8">
                                <div className="px-8">
                                    <FontAwesomeIcon icon={faTwitter} size="3x" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                                    <p className="py-4 uppercase">Twitter</p>
                                </div>
                                <div className="px-8">
                                    <FontAwesomeIcon icon={faFacebookF} size="3x" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                                    <p className="py-4 uppercase">Facebook</p>
                                </div>
                                <div className="px-8">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                                    <p className="py-4 uppercase">Linkedln</p>
                                </div>
                                <div className="px-8">
                                    <FontAwesomeIcon icon={faTelegram} size="3x" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                                    <p className="py-4 uppercase">Telegram</p>
                                </div>
                                <div className="px-8">
                                    <FontAwesomeIcon icon={faMediumM} size="3x" className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer" />
                                    <p className="py-4 uppercase">Medium</p>
                                </div>
                            </div>
                    </div>

                    <div className="my-16 text-center">
                        <h4 className="text-3xl font-serif py-4">DO YOU HAVE ANY QUESTIONS OR INQUIRIES?</h4>
                        <p className="pb-1">Is there anything you want to ask about FitHUB?</p>
                        <p className="pb-1">For questions, inquiries, concerns or suggestions,</p>
                        <p className="pb-6">please feel free to send us a message through the contact form below.</p>

                        <button class="bg-blue-500 hover:bg-blue-700 w-2/12 uppercase text-white font-bold py-4 focus:outline-none px-4 rounded">
                            Contact us
                        </button>
                    </div>

                    <footer className="flex justify-center items-center">
                     <img src={fitnessLogo} className="rounded h-8 mx-2" alt="Fitness-Logo" />
                     <p>Copyright &copy; 2020. All right reserved!</p>
                    </footer> */}
                          
            </React.Fragment>
         );
    }
}
 
export default HomeFit;