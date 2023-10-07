import type { StoryObj, Meta } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@donecode-ignite-ui/react'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: (
      <Button>
        <Plus />
      </Button>
    ),
    content: '21 de Outubro - Indisponível',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
