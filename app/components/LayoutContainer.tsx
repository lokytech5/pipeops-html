import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    children: ReactNode
}

const LayoutContainer = ({children}: Props) => {
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}

export default LayoutContainer