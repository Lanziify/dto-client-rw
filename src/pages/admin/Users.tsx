import DtoTable from '@/components/DtoTable'
import Modal from '@/components/Modal'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { officesMockData } from '@/data/office-table-columns'
import { positionsMockData } from '@/data/poisition-table-columns'
import { usersColumns, usersMockData } from '@/data/users-table-columns'
import { useModal } from '@/hooks/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Users = () => {
  const { isOpen, onOpen, onClose, setHeader, modalHeaderContent } = useModal()
  const formSchema = z.object({
    username: z.string().min(1, 'Please enter username'),
    email: z.string().min(1, 'Please enter email'),
    position: z.string().min(1, 'Please enter email'),
    office: z.string().min(1, 'Please enter email'),
    password: z.string().min(1, 'Please enter password'),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      username: '',
      email: '',
      position: '',
      office: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value.username)
  }

  const handleAddUser = () => {
    form.reset()
    onOpen()
    setHeader({
      title: 'Create new user',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a sapiente culpa!',
    })
  }

  const formFields = [
    {
      name: 'username',
      placeholder: 'Username',
      type: 'input',
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'input',
    },
    {
      name: 'position',
      placeholder: 'Position',
      type: 'select',
      options: positionsMockData,
    },
    {
      name: 'office',
      placeholder: 'Office',
      type: 'select',
      options: officesMockData,
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'input',
    },
  ]

  const ModalFormContent = () => {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          {formFields.map((formField) => (
            <FormField
              key={formField.name}
              {...form.control}
              name={formField.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formField.placeholder}</FormLabel>
                  {formField.type === 'input' ? (
                    <Input {...field} placeholder={formField.placeholder} />
                  ) : (
                    <Select>
                      <SelectTrigger>Select {field.name}</SelectTrigger>
                      <SelectContent>
                        {formField.options?.map((option) => (
                          <SelectItem key={option.id} value={option.name}>
                            {option.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}

                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className='flex gap-4 justify-end'>
            <Button variant='secondary' onClick={onClose}>
              Cancel
            </Button>
            <Button type='submit'>Confirm</Button>
          </div>
        </form>
      </Form>
    )
  }

  return (
    <div className='w-full space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Users List</h1>
        <Button size='sm' onClick={handleAddUser}>
          Create user
          <Plus size={16} className='ml-1' />
        </Button>
      </div>
      <p className='text-sm text-muted-foreground'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        vitae iusto dolore earum et culpa voluptates similique natus maiores
        beatae!
      </p>
      <DtoTable data={usersMockData} columns={usersColumns} />
      <Modal
        onOpen={isOpen}
        onOpenChange={onClose}
        modalHeaderContent={modalHeaderContent}
        form={form}
      >
        <ModalFormContent />
      </Modal>
    </div>
  )
}

export default Users
