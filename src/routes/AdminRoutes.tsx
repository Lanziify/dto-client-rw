import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

type AdminRoutesProps = {
  isAdmin: boolean
}

const AdminRoutes: React.FC<AdminRoutesProps> = (props) => {
  const location = useLocation()

  const pathNames = location.pathname.split('/').filter((path) => path)

  return (
    props.isAdmin && (
      <div className='min-h-screen flex flex-col'>
        <Header />
        <Card className='max-w-6xl max-sm:w-[93%] w-full mx-auto mt-4'>
          <CardHeader>
            <CardTitle className='font-bold'>
              Digital Transformation Office
            </CardTitle>
            <CardDescription>
              The Digital Transformation Office is an innovative solution
              implemented at North Eastern Mindanao - Tagbina Campus, designed
              to streamline and enhance the process of handling repair
              requisitions for ICT-related issues across various school offices.
              This system facilitates a seamless communication channel between
              different offices and the ICT department, ensuring efficient and
              timely resolution of technical problems.
            </CardDescription>
          </CardHeader>
          <CardContent >
            <CardDescription>
              This system was developed by Lance. If you are interested how this
              system was created, you can reach out the developer by providing
              your email address down below.
            </CardDescription>
          </CardContent>
          <CardFooter>
            <Input
              placeholder='Your Email Address'
              className='rounded-r-none'
            />
            <Button className='rounded-l-none'>Contact Developer</Button>
          </CardFooter>
        </Card>

        <div className='max-w-6xl max-sm:w-[93%] sticky top-[73px] py-4 w-full m-auto bg-white bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/90 z-10'>
          <Breadcrumb>
            <BreadcrumbList>
              {pathNames.map((path, i) => (
                <div key={path} className='flex items-center'>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={pathNames[0] != path ? path: `/${path}`}>
                      {path.charAt(0).toUpperCase() +
                        path.slice(1).replace('-', ' ')}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <Separator className='mt-4 absolute' />
        </div>
        <main className='flex border-x flex-1 max-w-6xl w-full max-sm:w-[93%] m-auto'>
          <div className='flex max-w-72 w-full sticky top-[125px] max-h-[calc(100vh_-_73px)] max-sm:hidden'>
            <SideBar />
            <Separator orientation='vertical' />
          </div>
          <div className='p-4 w-full flex'>
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    )
  )
}

export default AdminRoutes
