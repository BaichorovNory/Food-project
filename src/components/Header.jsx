import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className='deep-purple'>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>
                    <span className='black-text'>Food Project</span>
                </Link>
            </div>
        </nav>
    )
}
