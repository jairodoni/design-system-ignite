import { useEffect, useRef, useState } from 'react'
import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Toast as ToastNotification,
  ToastProps,
} from '@donecode-ignite-ui/react'

const Toast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false)

  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false)
          window.clearTimeout(timerRef.current)
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Active notification
      </Button>
      <ToastNotification open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'Utils/Toast',
  component: Toast,
  args: {
    title: 'Agendamento realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h',
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onOpenChange: {
      control: {
        type: 'function',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
