import React from 'react'
import { NavLink } from 'react-router-dom'

const AccountProperties = () => {
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl font-semibold'>Account Properties</h1>
      <p className='text-muted-foreground text-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi ratione
        reiciendis quidem qui! A voluptate accusantium iure ullam nobis aperiam.
      </p>
      <p>Properties:</p>
      <ul className='text-sm [&>li]:underline ml-4'>
        <li>
          <NavLink to='positions'>Positions</NavLink>
        </li>
        <li>
          <NavLink to='positions'>Offices</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default AccountProperties
