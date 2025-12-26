import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar(){
    const [MobileMenuIsOpen, SetMobileMenuIsOpen] = useState(false)
    return (
        <nav className="fixed top-0 w-full z-99 transition-all duration-300 bg-gray-950/60 backdrop-blur-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img 
                            src="/logo.png" 
                            alt="photokeep logo" 
                            className="w-6 h-6 sm:w-8 sm:h-8"/>
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-semibold">
                            <span>Photo</span>
                            <span>Keep</span>
                        </span>
                    </div>
                    {/*Nav Links*/}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#about" className="text-white hover:text-lg duration-300 text-sm lg:text-base">ABOUT</a>
                        <a href="#services" className="text-white hover:text-lg duration-300 text-sm lg:text-base">SERVICES</a>
                        <a href="#faq" className="text-white hover:text-lg duration-300 text-sm lg:text-base">FAQ</a>
                        <a href="#pricing" className="text-white hover:text-lg duration-300 text-sm lg:text-base">PRICING</a>
                        <a href="#contact" className="text-white hover:text-lg duration-300 text-sm lg:text-base">CONTACT</a>
                    </div>
                    
                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => SetMobileMenuIsOpen((prev) => !prev)}>

                        {MobileMenuIsOpen ? (
                            <X className="w-5 h-5 sm:w-6 sm:h-6"/>
                            ) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6"/>
                        )}
                    </button>
                </div>
            </div>
            
            {MobileMenuIsOpen && 
                <div className="md:hidden animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 text-right pt-0">

                        <a href="#about" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">ABOUT</a>
                        <a href="#services" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">SERVICES</a>
                        <a href="#faq" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">FAQ</a>
                        <a href="#pricing" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">PRICING</a>
                        <a href="#contact" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 hover:text-white text-sm lg:text-base">CONTACT</a>
                    </div>
                </div>
            }
        </nav>
    )
}