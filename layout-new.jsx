import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './sections/header/header.jsx'
import Footer from './sections/footer-new.jsx'
import BootstrapForBrowser from './ui/bootstrapForBrowser.jsx'

export default function RootLayout() {
  return (
    <React.Fragment>
      <BootstrapForBrowser />
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  )
}
