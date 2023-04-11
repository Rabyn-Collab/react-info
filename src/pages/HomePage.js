import React from 'react'
import { useNavigate } from 'react-router'


const HomePage = () => {


  const nav = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={() => nav('about', {

        state: {
          person: 'hari shyam'
        }
      })}>Go to About</button>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nesciunt aliquam doloribus adipisci consequatur nobis voluptate maiores dignissimos incidunt commodi vero velit enim ad nemo iusto, distinctio explicabo. Odit magni non laudantium natus doloremque, possimus consequatur. Sequi sint quod facilis iste cupiditate, animi incidunt odit corrupti nihil laboriosam recusandae temporibus.</p>

    </div>
  )
}

export default HomePage