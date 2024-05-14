import React from 'react'

function Wrapper({children}) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-center">
          <a
            className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"
            href="#"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg
            ><span className="sr-only">Acme Inc</span></a
          >
        </div>
        {children}
      </div>
    </div>
  )
}

export default Wrapper
