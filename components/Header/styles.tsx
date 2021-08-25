import styled from 'styled-components'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

export const HeaderContainer = styled(Container)`
  padding: 8.5px 32px 24px 24px; 
  background-color: #2d2d2e;s
`

export const SiteNameContainer = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(6),
}))

