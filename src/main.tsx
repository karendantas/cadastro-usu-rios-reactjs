import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-slate-900 flex-1'>
      <App />

    </div>
  </React.StrictMode>,
)
