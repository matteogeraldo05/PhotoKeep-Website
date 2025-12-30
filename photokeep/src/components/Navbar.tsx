import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar(){
    const [MobileMenuIsOpen, SetMobileMenuIsOpen] = useState(false)
    return (
        <nav className="fixed top-0 w-full z-99 transition-all duration-300 bg-gray-950/60 backdrop-blur-sm">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 sm:h-18 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img 
                            src="/logo.png" 
                            alt="photokeep logo" 
                            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>
                        </div>
                        <span className="text-xl sm:text-2xl md:text-2xl font-semibold">
                            <span>Photo</span>
                            <span>Keep</span>
                        </span>
                    </div>
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#about" className="text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105">ABOUT</a>
                        <a href="#services" className="text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105">SERVICES</a>
                        <a href="#faq" className="text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105">FAQ</a>
                        <a href="#pricing" className="text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105">PRICING</a>
                        <a href="#contact" className="text-white text-sm lg:text-base transition-transform duration-200 hover:scale-105">CONTACT</a>
                    </div>

                    
                    <button 
                        className="md:hidden p-3 sm:p-4 text-gray-300 hover:text-white" 
                        onClick={() => SetMobileMenuIsOpen((prev) => !prev)}>

                        {MobileMenuIsOpen ? (
                            <X className="w-6 h-6 sm:w-7 sm:h-7"/>
                            ) : (
                            <Menu className="w-6 h-6 sm:w-7 sm:h-7"/>
                        )}
                    </button>
                </div>
            </div>
            
            {MobileMenuIsOpen && 
                <div className="md:hidden animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4 text-right pt-0">

                        <a href="#about" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 text-xl">ABOUT</a>
                        <a href="#services" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 text-xl">SERVICES</a>
                        <a href="#faq" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 text-xl">FAQ</a>
                        <a href="#pricing" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 text-xl">PRICING</a>
                        <a href="#contact" onClick={() => SetMobileMenuIsOpen(false)} className="block text-gray-300 text-xl">CONTACT</a>
                    </div>
                </div>
            }
        </nav>
    )
}