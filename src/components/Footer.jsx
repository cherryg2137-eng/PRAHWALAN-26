import React from 'react';

const Footer = () => {
    return (
        <footer className="relative z-10 glass-panel border-t border-white/10 mt-20">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
                            PRAJWALAN 2K26
                        </h3>
                        <p className="text-sm text-gray-400 mt-2">
                            SRKR Engineering College<br />
                            Department of CSE
                        </p>
                    </div>

                    <div className="flex space-x-6 text-2xl">
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><i className="bi bi-linkedin"></i></a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><i className="bi bi-twitter-x"></i></a>
                        <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors"><i className="bi bi-envelope"></i></a>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-8 pt-8 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Prajwalan. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
