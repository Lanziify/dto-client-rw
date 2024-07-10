import React from 'react'
import { NavLink } from 'react-router-dom'

const Requests = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>DTO Requests</h1>
      <p className='text-muted-foreground text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ratione
        reiciendis quidem qui! A voluptate accusantium iure ullam nobis aperiam.
      </p>
      <ul className='text-sm [&>li]:underline'>
        <li>
          <NavLink to='positions'>Repair</NavLink>
        </li>
        <li>
          <NavLink to='positions'>Assitance</NavLink>
        </li>
        <li>
          <NavLink to='positions'>History</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Requests
