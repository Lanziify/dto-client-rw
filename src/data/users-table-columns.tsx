import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, Ellipsis } from 'lucide-react'

export type UsersType = {
  uid: string
  username: string
  email: string
  position: string
  office: string
  created: string
}

export const usersMockData: UsersType[] = [
    {
        uid: 'U1Ao38Nuqyw78eVb4kE',
        username: 'John',
        email: 'john@gmail.com',
        position: 'Assistant Professor I',
        office: 'Admissions Office',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U2Bp49Mowcsw92Ft5xF',
        username: 'Jane',
        email: 'jane@example.com',
        position: 'Research Assistant',
        office: 'Research Lab',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U3Cq57Lpxdtk84Gu2yD',
        username: 'Mike',
        email: 'mike@hotmail.com',
        position: 'Lecturer',
        office: 'Library',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U4Dr66Mqwejn73Hv3zE',
        username: 'Emily',
        email: 'emily@outlook.com',
        position: 'Graduate Student',
        office: 'Student Services',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U5Es75Nrvqma68Iw4sF',
        username: 'David',
        email: 'david@yahoo.com',
        position: 'Associate Professor',
        office: 'Faculty Lounge',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U6Ft84Oswrnb79Jx5tG',
        username: 'Sarah',
        email: 'sarah@gmail.com',
        position: 'Postdoctoral Researcher',
        office: 'Science Building',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U7Gu93Ptxmoc80Ky6uH',
        username: 'Chris',
        email: 'chris@example.com',
        position: 'Visiting Professor',
        office: 'Administration Building',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U8Hv02Quynpd81Lz7vI',
        username: 'Rachel',
        email: 'rachel@gmail.com',
        position: 'Assistant Dean',
        office: 'Dean’s Office',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U9Iw11Rvzopo82Ma8wJ',
        username: 'Mark',
        email: 'mark@example.com',
        position: 'Assistant Librarian',
        office: 'Library',
        created: new Date().toLocaleString(),
    },
    {
        uid: 'U10Jx12Swapq83Nb9xK',
        username: 'Lisa',
        email: 'lisa@hotmail.com',
        position: 'Administrative Assistant',
        office: 'Human Resources',
        created: new Date().toLocaleString(),
    },
];


export const usersColumns: ColumnDef<UsersType>[] = [
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
  {
    accessorKey: 'uid',
    header: ({ column }) => (
      <div className='flex items-center space-x-2'>
        <p>ID</p>
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className='p-2 h-fit'
        >
          <ArrowUpDown size={16} />
        </Button>
      </div>
    ),
    cell: ({ row }) => <div>{row.getValue('uid')}</div>,
  },
  {
    accessorKey: 'username',
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
    cell: ({ row }) => <div>{row.getValue('username')}</div>,
  },
  {
    accessorKey: 'email',
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
    cell: ({ row }) => <div>{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'position',
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
    cell: ({ row }) => <div>{row.getValue('position')}</div>,
  },
  {
    accessorKey: 'office',
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
    cell: ({ row }) => <div>{row.getValue('office')}</div>,
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
