import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeSwitcher from './ThemeSwitcher';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './Icons';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white/80 dark:bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="text-2xl font-bold text-brand-red">
                        JJ Auto Import
                    </Link>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {NAV_LINKS.map(link => (
                            <NavLink 
                                key={link.href} 
                                to={link.href}
                                className={({ isActive }) => 
                                    `text-lg font-medium transition-colors hover:text-brand-red ${
                                        isActive ? 'text-brand-red' : 'text-gray-600 dark:text-gray-300'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center space-x-4">
                        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 dark:text-gray-300" aria-label="Open menu">
                                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-brand-dark pb-4">
                    <nav className="flex flex-col items-center space-y-4">
                        {NAV_LINKS.map(link => (
                            <NavLink 
                                key={link.href} 
                                to={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => 
                                    `text-lg font-medium transition-colors hover:text-brand-red ${
                                        isActive ? 'text-brand-red' : 'text-gray-600 dark:text-gray-300'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
