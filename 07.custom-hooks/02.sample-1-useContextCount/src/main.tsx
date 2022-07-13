import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const contextData = {
  name: 'name1',
  age: 11,
}

export const SampleContext = createContext(contextData)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SampleContext.Provider value={contextData}>
      <App />
    </SampleContext.Provider>
  </React.StrictMode>,
)
