import React from 'react'
import Container from '../components/Container'

function Home() {
  return (
      <Container>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://www.365cons.com/images/icons/365cons_340.svg?2" alt="Laptop" /></figure>
        <div className="card-body">
          <h2 className="card-title">Kudos Software Loader</h2>
          <p>Comunidad innovadora comprometida con el desarrollo de soluciones digitales de vanguardia.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"></button>
          </div>
        </div>
      </div>
      </Container>
  )
}

export default Home
