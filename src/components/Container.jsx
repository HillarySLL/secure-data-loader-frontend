import React from 'react';
import Navbar from './Navbar';

export default function Container({children}) {
  return (
    <>
    <Navbar />
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-4xl space-y-6">
        {children}
      </div>
    </div>
    </>
  )
}
