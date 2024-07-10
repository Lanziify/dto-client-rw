import axios from '@/api/axios'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { DialogDescription, DialogHeader } from '@/components/ui/dialog'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useDialog } from '@/context/dialog'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTitle } from '@radix-ui/react-dialog'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Initial = () => {
  const formSchema = z.object({
    email: z.string().min(1, 'Please enter your email address'),
  })

  const { onOpen, onDialogLoading, mountDialogContent } = useDialog()

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { email: '' },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      onOpen()
      onDialogLoading(true)
      mountDialogContent(
        <>
          <DialogHeader>
            <DialogTitle>Creating account</DialogTitle>
            <DialogDescription>
              Please wait as we create your account...
            </DialogDescription>
          </DialogHeader>
        </>
      )
      await axios.post('initialize', {
        email: values.email,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Card className='w-96 mt-10 mx-auto'>
      <CardHeader>
        <CardTitle className=''>Welcome!</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam,
          ut quam animi quidem eveniet quis totam debitis quos maiores.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              {...form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input {...field} placeholder='Email' />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Get Started</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Initial
