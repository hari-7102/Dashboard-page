import React from 'react'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <div className="flex w-full h-screen  ">
            <Navbar/>
            <div className="w-full overflow-y-auto ">


                {children}
                

            </div>
        </div>
    )
}

export default Layout