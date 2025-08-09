import React from 'react'
import './Navbar.css'
interface NavbarProps {
    activeFilter: string | null;
    setActiveFilter: React.Dispatch<React.SetStateAction<string | null>>;
}
export const Navbar: React.FC<NavbarProps> = ({activeFilter, setActiveFilter}) => {
    const clickHandler = (filter: string) => {
        if(activeFilter === filter){
            setActiveFilter(null)
        } else {
            setActiveFilter(filter)
        }
    }
    return(
        <div className="navbar">
            <h1>Extensions List</h1>
            <div className="filter-btns" id='filterBtns'>
                <button 
                    type="button" 
                    className={activeFilter === 'all' ? 'clicked' : ''} 
                    onClick={() => clickHandler('all')}
                >
                    All
                </button>
                <button 
                    type="button" 
                    className={activeFilter === 'active' ? 'clicked' : ''} 
                    onClick={() => clickHandler('active')}
                >
                    Active
                </button>
                <button 
                    type="button" 
                    className={activeFilter === 'inactive' ? 'clicked' : ''} 
                    onClick={() => clickHandler('inactive')}
                >
                    Inactive
                </button>
            </div>
        </div>
    )
}