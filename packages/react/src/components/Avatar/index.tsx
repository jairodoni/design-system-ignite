import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'
import { User } from 'phosphor-react'

// eslint-disable-next-line
export interface AvatarProps extends ComponentProps<typeof AvatarImage> { }

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
