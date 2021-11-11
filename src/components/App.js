import { useState } from 'react'
import Logo from '../Assets/camel-case-logo.png'
import '../styles/App.css'

function App() {
   const [sentence, setSentence] = useState('')
   const [click, setClick] = useState(false)

   function camelCase(sentence) {
      const arr = sentence.split(' ')
      const capStr = arr
         .map((caps) => caps.trim())
         .map((a) => a[0].toUpperCase() + a.substring(1))
         .join('')
      return capStr.charAt(0).toLowerCase() + capStr.slice(1)
   }

   const handleClick = () => {
      setClick(!click)
   }

   const handleInput = (event) => {
      setSentence(event.target.value)
   }

   const resetInput = () => {
      window.location.reload()
   }

   return (
      <div className="App">
         <img src={Logo} className="logo" alt="main-logo" />
         <form>
            <div className="input-container">
               <input
                  className="text-input"
                  onChange={handleInput}
                  type="text"
                  placeholder="Enter Your Sentence Here"
               ></input>
               <button className="submit" type="button" onClick={handleClick}>
                  Camelize
               </button>
               <button className="reset" onClick={resetInput}>
                  Reset
               </button>
            </div>{' '}
            {click && <h1 className="camel-case">{camelCase(sentence)}</h1>}
         </form>
      </div>
   )
}

export default App
