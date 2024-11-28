import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  useEffect(() =>{
    console.log("Home Js Running");
  },[])

  return (
    <div>
        <h1>Home</h1>
        <Link to="/users"> Go to Users List </Link>
    </div>
  )
}

export default Home