import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Ellipsis } from 'lucide-react'

export type PositionType = {
  id: string | number
  name: string
  usage: number
  created: string
  updated: string
}

export const positionsMockData: PositionType[] = [
  {
    id: 1,
    name: 'Adjunct Instructor',
    usage: 10,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 2,
    name: 'Lecturer',
    usage: 15,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 3,
    name: 'Assistant Professor I',
    usage: 20,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 4,
    name: 'Assistant Professor II',
    usage: 18,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 5,
    name: 'Associate Professor',
    usage: 22,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 6,
    name: 'Professor',
    usage: 25,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 7,
    name: 'Emeritus Professor',
    usage: 5,
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
]

export const positionColumns: ColumnDef<PositionType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  //   {
  //     accessorKey: 'id',
  //     header: ({ column }) => (
  //       <div className='flex items-center space-x-2'>
  //         <p>ID</p>
  //         <Button
  //           variant='ghost'
  //           onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //           className='p-2 h-fit'
  //         >
  //           <ArrowUpDown size={16} />
  //         </Button>
  //       </div>
  //     ),
  //     cell: ({ row }) => <div>{row.getValue('id')}</div>,
  //   },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <div className='flex items-center space-x-2'>
        <p>Position</p>
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-2 h-fit'
        >
          <ArrowUpDown size={16} />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue('name')}</div>,
  },
  {
    accessorKey: 'usage',
    header: ({ column }) => (
      <div className='flex items-center space-x-2'>
        <p>Usage</p>
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-2 h-fit'
        >
          <ArrowUpDown size={16} />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue('usage')}</div>,
  },
  {
    accessorKey: 'created',
    header: ({ column }) => (
      <div className='flex items-center space-x-2'>
        <p>Created Date</p>
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-2 h-fit'
        >
          <ArrowUpDown size={16} />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue('created')}</div>,
  },
  {
    accessorKey: 'updated',
    header: ({ column }) => (
      <div className='flex items-center space-x-2'>
        <p>Last Updated</p>
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-2 h-fit'
        >
          <ArrowUpDown size={16} />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue('updated')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <div className='flex justify-center'>
        <Button variant='ghost' size='sm'>
          <Ellipsis size={16} />
        </Button>
      </div>
    ),
  },
]
