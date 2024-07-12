import { sidebarItems } from '@/data/sidebar-items'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { SideBarMenuItemType } from '@/types/types'

const SideBar = () => {
  return (
    <aside className='flex max-w-72 w-full border-r flex-shrink-0 sticky top-[125px] max-h-[calc(100vh_-_73px)] max-sm:hidden'>
      <nav className='flex flex-1 flex-col p-4'>
        {sidebarItems.map((sidebarItem, index) =>
          sidebarItem.type === 'normal' ? (
            <MenuItem key={index} {...sidebarItem} />
          ) : (
            <Accordion
              key={index}
              type='multiple'
              className='text-sm hover:bg-primary/5 rounded-md'
            >
              <AccordionItem value='item-1' className='border-none'>
                <AccordionTrigger>
                  <div className='flex gap-3 items-center'>
                    {sidebarItem.icon}
                    {sidebarItem.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent className='p-2 flex flex-col ml-4'>
                  {sidebarItem.children.map((child, childIndex) => (
                    <MenuItem key={childIndex} {...child} />
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )
        )}
      </nav>
    </aside>
  )
}

const MenuItem: React.FC<SideBarMenuItemType> = (props) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `h-10 px-3 py-2 inline-flex gap-3 items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
          isActive
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'hover:bg-primary/5'
        }`
      }
      to={props.path}
    >
      {props.icon}
      {props.name}
    </NavLink>
  )
}

export default SideBar
