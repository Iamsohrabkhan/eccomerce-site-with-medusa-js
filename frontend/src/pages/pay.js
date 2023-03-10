/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { useState } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
// import { Switch } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Example() {
//   const [agreed, setAgreed] = useState(false)

  return (
 
    <>
    <div className="mt-10">
      <h1 className="flex items-center justify-center font-bold text-blue-600 text-md lg:text-3xl">
        Tailwind CSS Ecommerce Checkout Page UI
      </h1>
    </div>
    <div className="container max-w-[80vw] p-12 mx-auto">
      <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
        <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
            Shipping Address
          </h2>
          <form className="justify-center w-full mx-auto" method="post" action="">
            <div className="">
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="firstName"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Last Name
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Email"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    name="Last Name"
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <label
                    htmlFor="Address"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Address
                  </label>
                  <textarea
                    className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    name="Address"
                    cols={20}
                    rows={4}
                    placeholder="Address"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="space-x-0 lg:flex lg:space-x-4">
                <div className="w-full lg:w-1/2">
                  <label
                    htmlFor="city"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    City
                  </label>
                  <input
                    name="city"
                    type="text"
                    placeholder="City"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div className="w-full lg:w-1/2 ">
                  <label
                    htmlFor="postcode"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Postcode
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    placeholder="Post Code"
                    className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <label className="flex items-center text-sm group text-heading">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                  />
                  <span className="ml-2">
                    Save this information for next time
                  </span>
                </label>
              </div>
              <div className="relative pt-3 xl:pt-6">
                <label
                  htmlFor="note"
                  className="block mb-3 text-sm font-semibold text-gray-500"
                >
                  {" "}
                  Notes (Optional)
                </label>
                <textarea
                  name="note"
                  className="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                  rows={4}
                  placeholder="Notes for delivery"
                  defaultValue={""}
                />
              </div>
              <div className="mt-4">
                <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                  Process
                </button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  </>
  
  )
}
