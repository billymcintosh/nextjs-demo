import styled from 'styled-components'
import Link from '@material-ui/core/Link'

export const HeaderLink = styled(Link)`
  font-family: Arial;
  font-size: 16px;
  color: #b3b3b3;

  &:hover,
  &.active {
    color: #FFF;
  }
`