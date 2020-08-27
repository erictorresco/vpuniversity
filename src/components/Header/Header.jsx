import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

import logo from "./logo.png"
import ButtonLink from "./ButtonLink/ButtonLink"
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  console.log("isOpen iso", isOpen)
  const data = useStaticQuery(graphql`
    {
      wpgraphql {
        menuItems(where: { location: PRIMARY }, first: 30) {
          nodes {
            path
            id
            label
            childItems {
              nodes {
                id
                path
                label
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <div tw="bg-gray-900 z-30">
        <div tw="mx-auto py-3 max-w-screen-lg">
          <div tw="flex justify-around md:justify-between items-center ">
            <div />
            <div tw="">
              <Link to="/" tw="flex flex-col justify-center items-center">
                <img tw="h-8 w-auto sm:h-10" src={logo} alt="Workflow" />
                <span tw="text-white">voxpopuli.university</span>
              </Link>
            </div>
            <div tw="-mr-2 flex md:hidden">
              <button tw="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white">
                <svg
                  css={[tw`h-6 w-6`, isOpen ? tw`hidden` : tw`block`]}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={() => setOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  css={[tw`h-6 w-6`, isOpen ? tw`block` : tw`hidden`]}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  onClick={() => setOpen(!isOpen)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav tw="hidden flex-row justify-center space-x-4 md:flex">
              {data.wpgraphql.menuItems.nodes
                .filter(link => link.childItems.nodes[0])
                .map(item => {
                  return <ButtonLink link={item} key={item.id} />
                })}
            </nav>
          </div>
        </div>
      </div>
      <div css={[tw`bg-gray-900`, isOpen ? tw`` : tw`hidden`]}>
        <nav tw="flex flex-row flex-wrap justify-around pb-2">
          {data.wpgraphql.menuItems.nodes
            .filter(link => link.childItems.nodes[0])
            .map(item => {
              return <ButtonLink link={item} key={item.id} />
            })}
        </nav>
      </div>
    </>
  )
}

export default Header
