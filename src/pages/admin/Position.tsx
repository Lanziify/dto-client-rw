import DtoTable from '@/components/DtoTable'
import Modal from '@/components/Modal'
import { Button } from '@/components/ui/button'
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  positionColumns,
  positionsMockData,
} from '@/data/poisition-table-columns'
import { useModal } from '@/hooks/modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const Position = () => {
  const { isOpen, onOpen, onClose, setHeader, modalHeaderContent } = useModal()
  const formSchema = z.object({
    position: z.string().min(1, 'Please enter position'),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: { position: '' },
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value.position)
  }

  const handleAddPosition = () => {
    form.reset()
    onOpen()
    setHeader({
      title: 'Add Position Properties',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus a sapiente culpa!',
    })
  }

  const ModalFormContent = () => {
    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
          <FormField
            {...form.control}
            name='position'
            render={({ field }) => (
              <FormItem>
                <Input {...field} placeholder='Position' />
                <FormMessage />
              </FormItem>
            )}
          />
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
        <h1 className='text-2xl font-semibold'>Nemsu Position List</h1>
        <Button size='sm' onClick={handleAddPosition}>
          Add Position
          <Plus size={16} className='ml-1' />
        </Button>
      </div>
      <p className='text-sm text-muted-foreground'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        vitae iusto dolore earum et culpa voluptates similique natus maiores
        beatae!
      </p>
      <DtoTable data={positionsMockData} columns={positionColumns} />
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

export default Position
