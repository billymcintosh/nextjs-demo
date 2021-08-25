import { default as NextLink, LinkProps } from 'next/link'
import { HeaderLink } from './styles'

type StyledLinkProps = {
  children: React.ReactNode,
} & LinkProps

const Link = (props: StyledLinkProps): JSX.Element => {
  const {
    children,
    href,
  } = props

  return (
    <NextLink passHref href={href}>
      <HeaderLink>{children}</HeaderLink>
    </NextLink>
  )
}

export default Link
