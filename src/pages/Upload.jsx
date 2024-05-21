import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/Container';

import { baseUrl, tokenKey } from "../constants";

function Upload() {
  const [file, setFile] = React.useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("csvFile", file);

      const token = window.localStorage.getItem(tokenKey);

      const options = {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      };

      try {
        const result = await fetch(baseUrl + "/document/upload", options);
        const data = await result.json();
        if(data.ok) {
          navigate("/records", { state: data.records });
        }
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return (
    <Container>
      <div className='w-full flex justify-center'>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm max-w-xl" data-v0-t="card">
          <div className="flex flex-col p-6 space-y-1 text-center">
            <h3 className="whitespace-nowrap font-semibold tracking-tight text-2xl">Upload a File</h3>
            <p className="text-sm text-muted-foreground">Choose a file to upload to your account.</p>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid gap-2">
              <input
                id="file"
                type="file"
                onChange={handleFileChange}
                className="rounded-md file-input file-input-secondary file-input-bordered file-input-sm w-full"
              />
            </div>
          </div>
          <div className="flex items-center p-6">
            <button
              className="btn btn-outline btn-secondary h-10 rounded-md w-full text-gray-50 dark:text-gray-900 "
              onClick={handleUpload}
              type="submit"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Upload;
