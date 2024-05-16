import React from 'react'
import Wrapper from '../components/Wrapper';
import { baseUrl, tokenKey } from "../constants";

function Upload() {
  const [ file, setFile ] = React.useState(null);

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0])
    }
  }

  const handleUpload = async (event) => {
    if (file) {
      console.log({file})
      const formData = new FormData();
      formData.append("csvFile", file);

      const token = window.localStorage.getItem(tokenKey);

      const options = {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };

      try {
        const result = await fetch(baseUrl + "/document/upload", options);
        const data = result.json()
        console.log({data})
      } catch (error) {
        console.log({ error })
      }
    }
  }

  return (
    <Wrapper>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div className="flex flex-col p-6 space-y-1 text-center">
          <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Upload a File</h3>
          <p className="text-sm text-muted-foreground">Choose a file to upload to your account.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid gap-2">
            <input
              id='file'
              type="file"
              onChange={handleFileChange}
              className="rounded-md file-input file-input-bordered file-input-sm w-full" />
          </div>
        </div>
        <div className="flex items-center p-6">
          <button
            className="h-10 rounded-md w-full btn btn-neutral text-gray-50 hover:bg-gray-900 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
            onClick={handleUpload}
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
