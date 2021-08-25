import AppBar from '@material-ui/core/AppBar'
import { ContainerProps } from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Stack from '@material-ui/core/Stack'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Image from 'next/image'
import Link from '@components/Link'

import { HeaderContainer, SiteNameContainer } from './styles'

function Header(props: ContainerProps): JSX.Element {
  const { children } = props

  return (
    <HeaderContainer {...props}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>

          <Grid container>
            <SiteNameContainer>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <Image src="/img/img-logo.svg" height={25} width={25} alt="IMG Arena" />
              </Typography>
            </SiteNameContainer>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={6}
              sx={{ flexGrow: 1 }}
            >
              <Link href="/">Dashboard</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/timeline/tabletennis">Timeline</Link>
              <Link href="/multiview/volleyball">Multi-view</Link>
              <Link href="/monitoring">Monitoring</Link>
              <Link href="/kb">Knowledge Base</Link>
              <Link href="/da">Data Admin</Link>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={10}
            />
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </HeaderContainer>
  )
}

export default Header
