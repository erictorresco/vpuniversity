import React, { useState } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

import logo from "./logo.png"
import ButtonLink from "./ButtonLink/ButtonLink"

const Header = () => {
  const [isOpen, setOpen] = useState(false)
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
    <div tw="bg-gray-900 z-30">
      <div tw="mx-auto py-3 max-w-screen-lg">
        <div tw="flex flex-col md:flex-row md:justify-between items-center ">
          <div tw="">
            <Link to="/" tw="flex flex-col justify-center items-center">
              <img tw="h-8 w-auto sm:h-10" src={logo} alt="Workflow" />
              <span tw="text-white">voxpopuli.university</span>
            </Link>
          </div>
          <nav tw="hidden flex-row justify-center space-x-4 md:flex">
            {data.wpgraphql.menuItems.nodes
              .filter(link => link.childItems.nodes[0])
              .map(item => {
                return <ButtonLink link={item} />
              })}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
