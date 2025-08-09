import logoLight from '../../assets/images/logo.svg'
import logoDark from '../../assets/images/logo-dark.svg'
import moon from '../../assets/images/icon-moon.svg'
import sun from '../../assets/images/icon-sun.svg'
import './Header.css'
import { useEffect, useState } from 'react'
export const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            darkMode ? 'dark' : 'light'
        );
    }, [darkMode])
    return(
        <>
            <div className='container'>
                <img src={darkMode ? logoDark : logoLight} alt="logo" />
                <button className='themeBtn' onClick={() => setDarkMode(!darkMode)}>
                    <img src={darkMode ? sun : moon} alt={darkMode ? "sun" : "moon"} />
                </button>
            </div>
        </>
    )
}