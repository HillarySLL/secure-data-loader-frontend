import React from 'react'
import Wrapper from '../components/Wrapper'

function Upload() {
  return (
    <Wrapper>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col p-6 space-y-1 text-center">
          <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Upload a File</h3>
          <p className="text-sm text-muted-foreground">Choose a file to upload to your account.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="file"
            >
              File
            </label>
            <input
              type="file" 
              id='file'
              className="rounded-md file-input file-input-bordered file-input-sm w-full max-w-xs" />
          </div>
        </div>
        <div className="flex items-center p-6">
        <button
              className="h-10 rounded-md w-full btn btn-neutral text-gray-50 hover:bg-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
              type="submit"
            >
              Upload
            </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Upload
