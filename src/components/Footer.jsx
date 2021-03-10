import React from 'react'

export const Footer = () => {
    return (
        <footer className='page-footer deep-purple'>
            <div className='footer-copyright'>
                <div className='container'>
                    <b className='black-text'> © {new Date().getFullYear()} Created by Nory Baichorov </b>
                </div>
            </div>
        </footer>
    )
}