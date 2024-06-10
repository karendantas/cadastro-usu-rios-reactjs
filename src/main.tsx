import React from 'react'
import ReactDOM from 'react-dom/client'

import { UserContextProvider } from './contexts/usersContexts.tsx'
import App from './App.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>  
    <UserContextProvider>
      
     <App/>
    </UserContextProvider>
  </React.StrictMode>,
)
