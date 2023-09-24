import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import API from './API.jsx'
import './tarjetas.css'

function Tarjetas({header, content}) {
  const [message, setMessage] = useState("")
  const [showMessage, setshowMessage] = useState(false)
  const [mensaje, setMensaje] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setshowMessage(true)
    const apiKey = 'AIzaSyD5XwIYEFhSD7qFGXJ93kJHrLYxSNmNKOQ'; // Replace with your actual API key
    const apiUrl = 'https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText';

    const data = {
      prompt: {
        text: message
      }
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };

    fetch(`${apiUrl}?key=${apiKey}`, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the response data here
        setMensaje(data["candidates"][0]["output"]);
        let var1 = "hola";
        let varTraducida = "hello";
      })
      .catch(error => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
      });


  }


  return (
    <>
        <div className="contenedor">
            <div className="tarjeta">
                
                    <form onSubmit = {handleSubmit}>
                        <div className="sendMensaje">
                            <div className="mensaje"><input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="textInput" /></div>
                            <div className="verticalAligned">
                                <button className="boton">Submit</button>
                            </div>
                        </div>
                    </form>
                    
                
                {showMessage && <p>{mensaje}</p>}
            </div>
        </div>
        
    </>
  )
}

export default Tarjetas
