import React from 'react';
import { Link } from "react-router-dom";
import Container from '../components/Container'

function Home() {
  return (
    <Container>
      <h2 className="text-indigo-600 shadow-lg">
        Kudos Software Loader
      </h2>
      <p>Comunidad innovadora comprometida con el desarrollo de soluciones digitales de vanguardia.</p>
      <div>
        <Link
          className="btn btn-outline btn-secondary h-10 rounded-md text-gray-50"
          type="submit"
          to="/login"
        >
          LOGIN
        </Link>
      </div>
    </Container>
  )
}

export default Home
