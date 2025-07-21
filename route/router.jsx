import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout-new.jsx'
import BeUnboundHome from '../beunbound-home.jsx'
import About from '../about/beUnboundAbout.jsx'
import Contact from '../contact/beUnboundContact.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <BeUnboundHome />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact', 
        element: <Contact />
      }
    ]
  }
])
