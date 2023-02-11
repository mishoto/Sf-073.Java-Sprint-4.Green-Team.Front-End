import React from 'react'
import {Link} from "react-router-dom";

const Dashboard = ({user}) => {
  return (
    <section className='section'>
      <h4>Hello from Dashboard, {user?.name}</h4>
      <Link to='/' className='btn'>
        Home
      </Link>
    </section>
  );
}

export default Dashboard
