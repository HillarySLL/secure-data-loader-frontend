import React from 'react'

export default function Container({children}) {
  return (
    <div class="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div class="w-full max-w-4xl space-y-6">
        {children}
      </div>
    </div>  )
}
