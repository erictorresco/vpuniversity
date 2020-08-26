import React from "react"
import tw from "twin.macro"

const SubscribeCard = () => {
  return (
    <section tw="py-1">
      <div tw="mx-4 shadow-lg rounded-lg md:max-w-2xl lg:max-w-4xl md:mx-auto bg-white">
        <div tw="flex flex-col md:h-56 overflow-hidden my-6">
          <div tw="items-center justify-center">
            <div tw="py-6 px-8 ">
              <h2 tw="text-gray-700 text-xl font-bold">
                Subscríbete a mi lista
              </h2>
              <p tw="mt-2 leading-tight">
                Recibe mis últimos análisis y contenido exclusivo directo en tu
                bandeja de entrada
              </p>
            </div>
          </div>
          <div tw="pb-6">
            <form tw="flex rounded-lg overflow-hidden mx-2">
              <input
                tw="w-4/6 py-1 px-2 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
                type="text"
                name="email"
                placeholder="Ingresa tu email"
              />
              <button tw="w-3/6 py-1 px-1 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">
                acepto
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeCard
