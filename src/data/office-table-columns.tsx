import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Ellipsis } from 'lucide-react'

export type OfficeType = {
  id: string | number
  name: string
  created: string
  updated: string
}

export const officesMockData: OfficeType[] = [
  {
    id: 1,
    name: "Registrar's Office",
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 2,
    name: 'Admissions Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 3,
    name: 'Office of the Dean',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 4,
    name: 'Student Affairs Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 5,
    name: 'Academic Affairs Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 6,
    name: 'Finance Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 7,
    name: 'Human Resources Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 8,
    name: 'Information Technology Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 9,
    name: 'Library Services',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 10,
    name: 'Research and Development Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 11,
    name: 'Public Relations Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
  {
    id: 12,
    name: 'Community Extension Office',
    created: new Date().toDateString(),
    updated: new Date().toDateString(),
  },
]

export const officeColumns: ColumnDef<OfficeType>[] = [
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
