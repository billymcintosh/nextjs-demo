import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export const StyledGrid = Item
