import { useState, useEffect } from 'react'
import './App.css'
import meme from "./assets/troll-face.png"
function App() {
  const [joke, setJoke] = useState([])

  const lol = async() =>{
    const res = await fetch("https://official-joke-api.appspot.com/random_joke")
    const data = await res.json()
    setJoke(data)
  }
  useEffect( () => {
    lol()
  }, [])

  return (
    <div className='container'>
      <div class="notifications-container">
        <div class="dad-joke">
          <div class="flex">

            <div class="flex-shrink-0">
              <img src={meme} alt="" />
            </div>

            <div class="dad-joke-prompt-wrap">
              <p class="dad-joke-prompt-heading">Dad Jokes Alert!</p>
              <div class="dad-joke-prompt">
                <p>
                  {joke.setup} <br /><br /> {joke.punchline}
                </p>
              </div>
              <div class="dad-joke-button-container">
                <button class="dad-joke-button-main" type="button" onClick={lol}>
                  Make It Stop
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default App
