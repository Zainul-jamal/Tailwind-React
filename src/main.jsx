import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Data from './assets/Table'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Data /> */}
    <App/>
  </StrictMode>,
)
