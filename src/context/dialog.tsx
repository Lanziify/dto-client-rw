import { DialogClose, DialogContent } from '@/components/ui/dialog'
import { Spinner } from '@/components/ui/spinner'
import { Dialog } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React from 'react'

type DialogProviderProps = {
  children: React.ReactNode
}

interface DialogContextType {
  onOpen: () => void
  onClose: () => void
  onDialogLoading: (status: boolean) => void
  mountDialogContent: (item: React.JSX.Element) => void
}

const DialogContext = React.createContext<DialogContextType>({
  onOpen: () => {},
  onClose: () => {},
  onDialogLoading: () => {},
  mountDialogContent: () => {},
})

const dialog: React.FC<DialogProviderProps> = ({ children, ...props }) => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [isDialogLoading, setIsDialogLoading] = React.useState(false)
  const [dialogContent, setDialogContent] =
    React.useState<React.JSX.Element | null>(null)

  const onOpen = () => {
    setIsDialogOpen(true)
  }

  const onClose = () => {
    setIsDialogOpen(false)
  }

  const onDialogLoading = (value: boolean) => {
    setIsDialogLoading(value)
  }

  const mountDialogContent = (content: React.JSX.Element) => {
    setDialogContent(content)
  }

  return (
    <DialogContext.Provider
      value={{
        onOpen,
        onClose,
        onDialogLoading,
        mountDialogContent,
      }}
    >
      {children}
      <Dialog
        open={isDialogOpen}
        onOpenChange={!isDialogLoading ? onClose : undefined}
      >
        <DialogContent
          onOpenAutoFocus={(e: Event) => e.preventDefault()}
          className={isDialogLoading ? 'w-fit' : ''}
          aria-describedby={undefined}
          aria-description={undefined}
        >
          {dialogContent}
          {isDialogLoading && <Spinner className='mt-0' />}
          {!isDialogLoading && (
            <DialogClose className='absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'>
              <X className='h-4 w-4' />
            </DialogClose>
          )}
        </DialogContent>
      </Dialog>
    </DialogContext.Provider>
  )
}

export { dialog as DialogProvider }

export const useDialog = () => React.useContext(DialogContext)
