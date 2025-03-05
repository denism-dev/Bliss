import React from 'react'

const Breadcrumbs = () => {
  return (
    <nav className="container mx-auto py-4 text-sm text-gray-600">
    <ol className="list-reset flex">
      <li>
        <a href="/" className="text-blue-600 hover:underline">Home</a>
      </li>
      <li>
        <span className="mx-2">/</span>
      </li>
      <li className="text-gray-500">Solutions</li>
    </ol>
  </nav>
  )
}

export default Breadcrumbs