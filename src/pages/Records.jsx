import React from 'react'
import Container from '../components/Container'

function Records() {
  return (
    <Container>
      <div class="flex items-center justify-between">
        <a class="inline-flex items-center gap-2 text-2xl font-bold tracking-tight" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span class="sr-only">Acme Inc</span>
        </a>
        <div class="flex items-center space-x-4">
          <div
            class="relative w-full rounded-lg border p-4 [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 px-3 py-2"
            role="alert"
          >
            <div role="alert" className="alert alert-success">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>18 records uploades successfully</span>
            </div>
          </div>
          <button className="btn btn-neutral">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New File
          </button>
        </div>
      </div>
      <div class="border rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <button className="btn btn-sm btn-outline">
                  Retry
                </button>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <button className="btn btn-sm btn-outline">
                  Retry
                </button>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>
                <button className="btn btn-sm btn-outline">
                  Retry
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </Container>
  )
}

export default Records
