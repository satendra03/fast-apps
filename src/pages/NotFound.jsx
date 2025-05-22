import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='min-h-[65vh] relative text-white flex flex-col items-center justify-center px-4 text-center'>
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            404 - Page Not Found
        </h1>
        <p className="text-gray-400 max-w-xl mb-8">
            The page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
            Go back to Home
        </Link>
    </div>
  )
}

export default NotFound