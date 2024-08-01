import React from 'react'
import './Footer.css'

const Footer = () => {
    const year = new Date().getFullYear();

    return (
    <footer className="summarizer__footer">
        <p>&copy; {year} Nishevitha Venkatesh. All rights reserved.</p>
    </footer>
    )
}

export default Footer