import * as TooltipRadix from '@radix-ui/react-tooltip'
import { Content, TooltipArrow } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof Content> {
  content: string
  children: ReactNode
}

export function Tooltip({ children, content, ...props }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root {...props}>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <Content>
            <span>{content}</span>
            <TooltipArrow />
          </Content>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
