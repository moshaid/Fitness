import React, { Component } from 'react';
import '../main.css';
import fitnessLogo from '../image/fitnessLogo.jpg';

class NavBar extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() { 
        return ( 
            <React.Fragment>
                <header className="p-2 md:flex md:justify-between items-center fixed w-full">
                    <div className="flex items-center justify-between md:w-7/12">
                            <a href="#" className="flex items-center md:pl-2 sm:p-0">
                                <img src={fitnessLogo} className="rounded h-10 mx-2" alt="Fitness-Logo" />
                                <h2 className="font-bold">FitHUB</h2>
                            </a>

                            <div className="pr-4 md:hidden">
                                <a href="#" className="text-white">LOGIN</a>
                                <button className="mx-2 py-1 px-2  bg-blue-500 hover:bg-blue-700 text-white rounded-full" >SIGN UP</button>
                            </div>

                            <nav className="md:flex hidden pr-2">
                                <a href="#" className="block text-white font-semibold px-4">About</a>
                                <a href="#" className="block text-white font-semibold px-4">Store</a>
                                <a href="#" className="block text-white font-semibold px-4">Contact</a>
                            </nav>

                        <div className="md:hidden">
                            <button type="button" className="focus:outline-none hover:text-white focus:text-white" onClick={this.toggle}>
                                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                {/* <path "isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/> */}
                                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {this.state.on && (
                        <nav >
                            <a href="#" className="block text-white font-semibold">About</a>
                            <a href="#" className="block text-white font-semibold">Store</a>
                            <a href="#" className="block text-white font-semibold">Contact</a>
                        </nav>
                    )}

                        <nav className="hamburger hidden pr-2">
                            <a href="#" className="text-white">LOGIN</a>
                            <button className="mx-2 py-1 px-2  bg-blue-500 hover:bg-blue-700 text-white rounded-full" >SIGN UP</button>
                        </nav>

                </header>
            </React.Fragment>
         );
    }
}
 
export default NavBar;