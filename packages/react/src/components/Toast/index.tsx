import * as ToastRadix from '@radix-ui/react-toast'
import { Close, Description, Root, Title, Viewport } from './styles'
import { ComponentProps } from 'react'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof Root> {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastRadix.Provider>
      <Root {...props}>
        <Title>{title}</Title>
        {!!description && <Description>{description}</Description>}

        <Close>
          <X weight="light" size={20} />
        </Close>
      </Root>

      <Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
