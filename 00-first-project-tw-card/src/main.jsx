import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


const root = document.getElementById("root")
const app = ReactDOM.createRoot(root)

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
