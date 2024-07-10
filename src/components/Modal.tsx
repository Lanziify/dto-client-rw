import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { ModalHeaderContent } from '@/hooks/modal'

type ModalProps<T extends FieldValues> = {
  form?: UseFormReturn<T, undefined, any>
  onOpen: boolean
  onOpenChange: () => void
  children: React.ReactNode
  modalHeaderContent?: ModalHeaderContent
}

const Modal = <T extends FieldValues>({
  form,
  onOpen,
  onOpenChange,
  children,
  modalHeaderContent,
}: ModalProps<T>) => {
  return (
    <Dialog open={onOpen}>
      <DialogContent
        onOpenAutoFocus={(e: Event) => e.preventDefault()}
        onInteractOutside={() => {
          onOpenChange()
          form?.reset()
        }}
        aria-describedby={undefined}
        aria-description={undefined}
      >
        <DialogHeader>
          <DialogTitle className='font-bold'>
            {modalHeaderContent?.title}
          </DialogTitle>
          <DialogDescription className='text-sm'>
            {modalHeaderContent?.description}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
