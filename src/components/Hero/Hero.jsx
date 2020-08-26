import React from "react"
import herobg from "./hero_bg.mp4"
import tw from "twin.macro"
import { css } from "@emotion/core"
const Hero = () => {
  return (
    <section tw="flex flex-col">
      <div tw="z-10 mt-12 sm:mt-11 md:mt-32 md:-mb-20 lg:mt-32 lg:-mb-64">
        <div tw="mx-5 md:mx-20">
          <h2 tw="text-white text-lg md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <h3 tw="text-gray-400 text-sm md:text-2xl">
            Mauris lobortis quis neque eget
          </h3>
        </div>
        <div tw="flex justify-center items-center mt-8">
          <a tw="text-white border px-2 py-1 font-semibold md:text-lg">
            consectetur adipiscing
          </a>
        </div>
      </div>
      <div tw="z-0 -mt-48 sm:-mt-40 md:-mt-72 bg-black">
        <video autoPlay loop muted tw="w-full opacity-50">
          <source src={herobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default Hero
