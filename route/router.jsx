import { createBrowserRouter } from 'react-router-dom'
import Layout from '../layout-new.jsx'
import BeUnboundHome from '../beunbound-home.jsx'
import About from '../about/beUnboundAbout.jsx'
import Contact from '../contact/beUnboundContact.jsx'
import Login from '../auth/login.jsx'
import Register from '../auth/register.jsx'
import ForgotPassword from '../auth/forgotPassword.jsx'
import ResetPassword from '../auth/resetPassword.jsx'
import ApplicationForm from '../application/applicationForm.jsx'

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
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/reset-password',
        element: <ResetPassword />
      },
      {
        path: '/application',
        element: <ApplicationForm />
      }
    ]
  }
])
