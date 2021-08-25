import Stack from '@material-ui/core/Stack'
import Box from '@material-ui/core/Box'

import Header from '@components/Header'
import { LayoutProps } from './LayoutWrapper'
import { Typography } from '@material-ui/core'

const DefaultLayout = (props: LayoutProps): JSX.Element => {
  return (
    <Stack>
      <Header maxWidth={false} disableGutters>
        <Box>
          <Typography variant="h4" color="white">{props.pageTitle || 'Dashboard'}</Typography>
        </Box>
      </Header>
      <Box component="main">
        {props.children}
      </Box>
    </Stack>
  )
}

export default DefaultLayout
