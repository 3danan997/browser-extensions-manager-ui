import React, { useState } from 'react'
import './Navbar.css'

// Navbar with filter buttons for extension status
interface NavbarProps {
    activeFilter: string | null;
    setActiveFilter: React.Dispatch<React.SetStateAction<string | null>>;
}
export const Navbar: React.FC<NavbarProps> = ({activeFilter, setActiveFilter}) => {
    // State for "All" button
    const [isAllActive, setAllActive] = useState<boolean>(true)
    // Handler for filter buttons
    const clickHandler = (filter: string) => {
        if(filter === 'all' || activeFilter === filter){
            setActiveFilter(null)
            setAllActive(true)
        } else {
            setActiveFilter(filter)
            setAllActive(false)
        }
    }
    return(
        <nav className="navbar" aria-label="Extension filter navigation">
            <h1>Extensions List</h1>
            {/* Filter buttons for All, Active, Inactive */}
            <div className="filter-btns" id='filterBtns' role="group" aria-label="Filter extensions">
                <button 
                    type="button" 
                    className={ isAllActive ?'clicked' : ''} 
                    aria-pressed={isAllActive}
                    aria-label="Show all extensions"
                    tabIndex={0}
                    onClick={() => clickHandler('all')}
                >
                    All
                </button>
                <button 
                    type="button" 
                    className={activeFilter === 'active' ? 'clicked' : ''} 
                    aria-pressed={activeFilter === 'active'}
                    aria-label="Show active extensions"
                    tabIndex={0}
                    onClick={() => clickHandler('active')}
                >
                    Active
                </button>
                <button 
                    type="button" 
                    className={activeFilter === 'inactive' ? 'clicked' : ''} 
                    aria-pressed={activeFilter === 'inactive'}
                    aria-label="Show inactive extensions"
                    tabIndex={0}
                    onClick={() => clickHandler('inactive')}
                >
                    Inactive
                </button>
            </div>
        </nav>
    )
}