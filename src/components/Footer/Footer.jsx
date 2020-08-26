import React from "react"
import tw from "twin.macro"

import logo from "./logo.png"
const Footer = () => {
  return (
    <section tw="bg-gray-900 py-4 px-2">
      <div tw="flex flex-col  items-center justify-center">
        <img tw="w-32" src={logo} />
        <span tw="text-white">voxpopuli.university</span>
      </div>
    </section>
  )
}

export default Footer
