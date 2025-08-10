import logoLight from '../../assets/images/logo.svg'
import logoDark from '../../assets/images/logo-dark.svg'
import moon from '../../assets/images/icon-moon.svg'
import sun from '../../assets/images/icon-sun.svg'
import './Header.css'
import { useEffect, useState } from 'react'

// Header component with theme switcher and logo
export const Header = () => {
    // State for dark mode
    const [darkMode, setDarkMode] = useState<boolean>(false)
    useEffect(() => {
        // Set the data-theme attribute for the body
        document.documentElement.setAttribute(
            'data-theme',
            darkMode ? 'dark' : 'light'
        );
    }, [darkMode])
    return(
        <header className='container' aria-label="Header with theme switcher">
            {/* Logo depending on theme */}
            <img src={darkMode ? logoDark : logoLight} alt="Extensions Manager Logo" />
            {/* Button to toggle theme */}
            <button 
                className='themeBtn' 
                aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
                tabIndex={0}
                onClick={() => setDarkMode(!darkMode)}
            >
                <img src={darkMode ? sun : moon} alt={darkMode ? "Switch to light mode" : "Switch to dark mode"} />
            </button>
        </header>
    )
}