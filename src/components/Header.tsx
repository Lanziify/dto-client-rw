import React from 'react'
import { DtoLogo } from './DtoLogo'
import { Button } from './ui/button'
import { Bell, Mail, Contact, User, Settings } from 'lucide-react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Separator } from './ui/separator'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { useAuth } from '@/context/authentication'
import { NavLink } from 'react-router-dom'
import { PopoverClose } from '@radix-ui/react-popover'

type NavigationMenuItemsType = {
  buttonIcon: JSX.Element
  buttonClassName?: string
  popContentAlignment: 'center' | 'start' | 'end' | undefined
  content: JSX.Element
}

const Header = () => {
  const { user, userClaims, logoutUser } = useAuth()

  const profileItems = [
    {
      itemName: 'Profile',
      path: '',
      icon: <User size={16} />,
    },
    {
      itemName: 'Settings',
      path: '',
      icon: <Settings size={16} />,
    },
  ]

  const navigationMenuItems: NavigationMenuItemsType[] = [
    {
      buttonIcon: <Bell />,
      popContentAlignment: 'center',
      content: (
        <div className='p-2'>
          <p>Notifications</p>
        </div>
      ),
    },
    {
      buttonIcon: (
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      ),
      buttonClassName: 'rounded-full p-0',
      popContentAlignment: 'center',
      content: (
        <div>
          <div className='flex justify-start p-4 text-sm items-center gap-2 font-medium'>
            <Avatar className='w-16 h-16'>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div>
              <strong className='text-xl'>
                {user?.displayName || 'Admin'}
              </strong>
              <p>{user?.email}</p>
              <p className='text-xs'>Admin</p>
            </div>
          </div>
          <Separator />
          <div className='flex flex-col justify-start p-2'>
            {profileItems.map((profileItem, index) => (
              <Button
                key={index}
                asChild
                className='w-full justify-start gap-2'
                variant='ghost'
              >
                <NavLink to={profileItem.path}>
                  {profileItem.icon}
                  {profileItem.itemName}
                </NavLink>
              </Button>
            ))}
          </div>
          <Separator />
          <div className='flex flex-col justify-start p-2'>
            <Button variant='ghost' onClick={logoutUser}>
              Logout
            </Button>
          </div>
        </div>
      ),
    },
  ]

  return (
    <header className='w-full z-10 sticky top-0 left-0 right-0 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/90'>
      <div className='flex justify-between p-4 max-w-6xl m-auto'>
        <div className='flex justify-center align-middle'>
          <DtoLogo width={40} height={40} fill='#000000' />
        </div>
        <div className='flex justify-center space-x-4 align-middle'>
          {navigationMenuItems.map((navigationMenuItem, index) => (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  className={`p-2 ${navigationMenuItem.buttonClassName}`}
                >
                  {navigationMenuItem.buttonIcon}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align={navigationMenuItem.popContentAlignment}
                className='w-fit p-0'
              >
                {navigationMenuItem.content}
              </PopoverContent>
            </Popover>
          ))}
          {/* <Button variant='ghost' className='rounded-full p-0'>
            <Avatar>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </Button> */}
        </div>
      </div>
      <div
        data-orientation='horizontal'
        className='shrink-0  h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent'
      />
    </header>
  )
}

export default Header
