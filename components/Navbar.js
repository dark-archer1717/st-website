import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <div className="z-50 relative sm:bg-white md:bg-white lg:bg-white lg:shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">

            </div>
            <Link href="/">
              <a href=""></a>
            </Link>
          </div>

        </div>
      </div>

    </>
  )
}

export default Navbar