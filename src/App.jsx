import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [payload, setPayload] = useState(null)
  const [payloadError, setPayloadError] = useState(null)

  const handleGetPayload = () => {
    setPayload(null)
    setPayloadError(null)
    if (typeof window.BotExtension === 'undefined') {
      setPayloadError('BotExtension SDK not loaded')
      return
    }
    window.BotExtension.getPayload((args) => {
      setPayload(args)
    })
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <hr />
        <h3>ConveGenius BotExtension SDK</h3>
        <button onClick={handleGetPayload}>Get Payload</button>
        {payloadError && <p style={{ color: 'red' }}>{payloadError}</p>}
        {payload != null && (
          <pre style={{ textAlign: 'left', fontSize: '12px', overflow: 'auto' }}>
            {JSON.stringify(payload, null, 2)}
          </pre>
        )}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
