import React, { useState, useEffect } from 'react'
import { bounce, clipboard, enter, url } from '../../assets'
import { useLazyGetResultQuery } from '../../management/text'
import './Main.css'

const Main = () => {

  const[text, setText] = useState({
    url: '', 
    summary: '',
  });

  const [getResult, { error, isFetching }] = useLazyGetResultQuery();

  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem("currentText"))

    if (savedText) {
      setText(savedText);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await getResult({ textUrl: text.url })

    if (data?.summary) {
      const newText = { ...text, summary: data.summary}
      setText(newText);
      localStorage.setItem("currentText", JSON.stringify(newText))
    }
  };

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

      <div className="summarizer__main-display">
        {isFetching ? (
          <img src={bounce} alt="page-loader" className="bounce__loader" />
        ) : error ? (
          <p className="summarizer__main-display__error">
            We're running into an unexpected error...
            <br />
            <span className="summarizer__main-display__error-text">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          text.summary && (
            <div className="summarizer__main-display-result">
              <h2>
                 Content Overview
              </h2>
              <div className="summarizer__main-display-result__text">
                <p>
                  {text.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
      
    </main>
  )
}

export default Main