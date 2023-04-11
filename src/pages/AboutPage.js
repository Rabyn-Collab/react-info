import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  const { state: { person } } = useLocation();

  console.log(person);

  return (
    <div>
      <h1>About Page</h1>
      <Link to='sample'>Go to sample</Link>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta nesciunt animi incidunt aut voluptatum architecto dolorem ab sunt qui libero, suscipit esse et voluptas ullam ipsam accusantium distinctio dignissimos fugiat possimus explicabo, porro tenetur debitis earum? Iure nisi libero architecto voluptatibus laborum est facilis tempore, recusandae necessitatibus quae totam consequuntur!</p>
      <Outlet />
    </div>
  )
}

export default AboutPage