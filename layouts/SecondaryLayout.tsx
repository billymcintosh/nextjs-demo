import Stack from '@material-ui/core/Stack'
import Box from '@material-ui/core/Box'

import Header from '@components/Header'
import { LayoutProps } from './LayoutWrapper'
import { Typography } from '@material-ui/core'

const SecondaryLayout = (props: LayoutProps): JSX.Element => {
  return (
    <Stack>
      <Header maxWidth={false} disableGutters>
        <Box>
          <Typography variant="h3" color="primary">{props.pageTitle || 'Dashboard'}</Typography>
        </Box>
      </Header>
      <Box component="main">
        {props.children}
      </Box>
    </Stack>
  )
}

export default SecondaryLayout
