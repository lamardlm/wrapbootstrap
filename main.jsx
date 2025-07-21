import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/boxicons.min.css'
import '@/assets/css/flaticon.css'
import '@/assets/css/header.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import 'react-modal-video/scss/modal-video.scss'
import 'react-photo-view/dist/react-photo-view.css';
import BootstrapForBrowser from './components/ui/bootstrapForBrowser.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BootstrapForBrowser/>
    <App />
  </StrictMode>,
)
