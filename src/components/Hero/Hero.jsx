import React from 'react'
import { logo } from '../../assets'
import './Hero.css'

const Hero = () => {
  return (
    <div className="summarizer__hero">
        <nav className="summarizer__hero-navbar">
            <img src={logo} alt="personal_logo" />
        </nav>

        <div className="summarizer__hero-heading">
            <h1>SummaryAI</h1>
            <h4>YOUR ACADEMIC ALLY</h4>
        </div>

        <p className="summarizer__hero-text">Efficiently streamline your reading with our AI summarizer. Transform lengthy documents into concise summaries, saving you time and enhancing productivity.</p>
    </div>
  )
}

export default Hero