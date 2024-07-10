import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <footer>
      <div
        data-orientation='horizontal'
        className='shrink-0  h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent'
      />
      <div className='max-w-6xl m-auto p-4'>
        <div className='flex h-5 items-center space-x-4 text-sm'>
          <div>
            <p>
              Develop by{' '}
              <a
                href='https://www.facebook.com/CodedN.lanz'
                className='underline'
                target='_blank'
              >
                Lance
              </a>
            </p>
          </div>
          <Separator orientation='vertical' className='' />
          <div>
            <a href='https://nemsu-tagbina.edu.ph/' className='underline' target='_blank'>
              NEMSU
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
