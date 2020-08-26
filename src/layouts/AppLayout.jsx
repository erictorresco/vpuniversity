import React from "react"
import Header from "../components/Header/Header"
import tw from "twin.macro"
import Footer from "../components/Footer/Footer"

import "tailwindcss/dist/base.min.css"
const AppLayout = ({ children }) => {
  return (
    <main tw="antialiased text-gray-800 bg-gray-100 flex flex-col ">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default AppLayout
