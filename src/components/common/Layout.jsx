import React from 'react'

import Footer from './Footer'
import Header from './Header/Header'
import { useLocation } from 'react-router-dom'


const Layout = ({children}) => {

  const location = useLocation();


  const hideFooterPaths = ['/gamefinder'];
  const hideFooter = hideFooterPaths.includes(location.pathname);


 
 
  return (
    <>
       <Header />
        <div className=''>

        {/* <Sidebar /> */}
        </div>
        <div>{children}</div>
          {!hideFooter && <Footer />}
        
    </>
  )
}

export default Layout
