import React, { useState, useEffect } from 'react'
import { bounce, clipboard, enter, url } from '../../assets'
import './Main.css'

const Main = () => {

  const[text, setText] = useState({
    url: '', 
    summary: '',
  });

  const handleSubmit = async(e) => {
    alert('Submitted');
  }

  return (
    <main className="summarizer__main">

      <div className="summarizer__main-search">
        <form className="summarizer__main-search__bar" onSubmit={handleSubmit}>
          <img src={url} alt="url" className="summarizer__main-search__bar-link" />

          <input type="url" placeholder="https://www.example.com" value={text.url} onChange={(e) => setText({ ...text, url: e.target.value })} required className="summarizer__main-search__bar-input" />
          <button type="submit" className="summarizer__main-search__bar-button">
            <img src={enter} alt="submit" />
          </button>
        </form>
      </div>

    </main>
  )
}

export default Main