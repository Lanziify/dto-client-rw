import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { DtoLogo } from '@/components/DtoLogo'
import { useAuth } from '@/context/authentication'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'
import { isAxiosError } from 'axios'
import { Skeleton } from '@/components/ui/skeleton'

const Login = () => {
  const { isUserLoading, loginUser } = useAuth()
  const [loginError, setLoginError] = React.useState<string | null>(null)

  const formSchema = z.object({
    email: z
      .string()
      .min(1, {
        message: 'Please enter your email.',
      })
      .email('This is not a valid email.'),
    password: z.string().min(1, {
      message: 'Please enter your password.',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoginError(null)
      await loginUser(values)
    } catch (error: any) {
      if (error?.code.includes('auth/user-not-found')) {
        form.setError('email', {
          type: 'value',
          message: "The email address that you've entered does not exists.",
        })
      } else if (isAxiosError(error)) {
        form.setError('email', {
          type: 'value',
          message: error.response?.data.msg,
        })
      } else if (error?.code.includes('auth/wrong-password')) {
        form.setError('password', {
          type: 'value',
          message: 'Incorrect password. Please try again.',
        })
      } else {
        setLoginError(
          'Something went wrong logging in your account. Please try again.'
        )
      }
    }
  }

  return !isUserLoading ? (
    <Card className='w-96 mt-10 mx-auto'>
      <CardHeader>
        <div className='m-auto mb-4'>
          <DtoLogo width={50} height={50} fill='#000000' />
        </div>
        <CardTitle className='text-center font-bold'>
          Login your account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='Email'
                      className={
                        fieldState.error &&
                        'border-red-500 placeholder:text-red-500'
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='password'
                      placeholder='Password'
                      className={
                        fieldState.error &&
                        'border-red-500 placeholder:text-red-500'
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {loginError && (
              <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertDescription>{loginError}</AlertDescription>
              </Alert>
            )}

            <Button className='w-full' type='submit'>
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <div className='text-sm m-auto text-gray-500'>
          <span>
            Having trouble logging in?{' '}
            <Button className='p-0 h-fit font-bold' size='sm' variant='link'>
              Contact Us.
            </Button>
          </span>
        </div>
      </CardFooter>
    </Card>
  ) : (
    <Card className='w-96 mt-10 mx-auto'>
      <CardHeader>
        <div className='m-auto mb-4'>
          <Skeleton className='w-[50px] h-[50px]' />
        </div>
        <Skeleton className='w-[230px] h-[24px] m-auto' />
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          <Skeleton className='w-[34.28px] h-[19px]' />
          <Skeleton className='w-full h-[41px] p-2' />
        </div>
        <div className='space-y-3 mt-4'>
          <Skeleton className='w-[34.28px] h-[19px]' />
          <Skeleton className='w-full h-[41px] p-2' />
        </div>
        <Skeleton className='w-full mt-4 h-[40px] bg-gray-300' />
      </CardContent>
      <CardFooter>
        <Skeleton className='w-[280px] h-[19px] m-auto' />
      </CardFooter>
    </Card>
  )
}

export default Login
