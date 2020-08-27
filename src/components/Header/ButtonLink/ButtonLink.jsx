import React, { useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import { Link } from "gatsby"
import tw from "twin.macro"
import { css } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"

const ButtonLink = ({ link }) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div tw="relative z-30 ">
        {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
        <button
          className="group"
          type="button"
          tw="text-white inline-flex items-center text-base leading-6 font-medium hover:text-gray-300 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 border rounded py-1 px-2 my-2"
          onClick={() => setOpen(!isOpen)}
        >
          <span>{link.label}</span>
          {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
          <svg
            tw="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.
            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          --> */}
        <div
          css={[
            tw`absolute -ml-10 mt-3 transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`,
            isOpen ? tw`block` : tw`hidden`,
          ]}
        >
          <div tw="rounded-lg shadow-lg">
            <div tw="rounded-lg shadow-xs overflow-hidden">
              <div tw="z-50 relative bg-white flex flex-col w-64">
                {link.childItems.nodes.map(item => (
                  <Link
                    to={item.path}
                    key={item.id}
                    tw="text-gray-900 block text-center hover:bg-gray-200 hover:text-black py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default ButtonLink
