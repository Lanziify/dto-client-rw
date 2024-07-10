import React from 'react'

export type ModalHeaderContent = {
  title: string
  description: string
}

const modal = () => {
  const [isOpen, setIOpen] = React.useState(false)
  const [modalHeaderContent, setModalHeaderContent] =
    React.useState<ModalHeaderContent>({
      title: 'Title',
      description: 'Description',
    })

  const onOpen = () => {
    setIOpen(true)
  }

  const onClose = () => {
    setIOpen(false)
  }

  const setHeader = (value: ModalHeaderContent) => {
    setModalHeaderContent({
      title: value.title,
      description: value.description,
    })
  }

  return {
    modalHeaderContent,
    setHeader,
    isOpen,
    onOpen,
    onClose,
  }
}

export { modal as useModal }
