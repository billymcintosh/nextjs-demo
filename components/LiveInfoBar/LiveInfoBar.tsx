import { Box, Container, Stack } from '@material-ui/core'
import styled from 'styled-components'

const Item = styled(Box)`
    height: 200px;
`

export const LiveInfoBarContainer = styled(Container)(({ theme }) => ({
  minHeight: '100px',
  padding: theme.spacing(6),
}))

const mockData = [{
  eventId: 1,
  events: 14,
  sportName: 'Football',
  urlPart: 'football'
}, {
  eventId: 2,
  events: 4,
  sportName: 'Tennis',
  urlPart: 'tennis'
}, {
  eventId: 3,
  events: 2,
  sportName: 'Golf',
  urlPart: 'golf'
}, {
  eventId: 4,
  events: 10,
  sportName: 'Table Tennis',
  urlPart: 'table-tennis'
}, {
  eventId: '5',
  events: 1,
  sportName: 'ice-hockey',
  urlPart: 'Ice Hockey'
}]

// padding: 8.5px 32px 24px 24px;
// background-color: #2d2d2e;

const renderEvents = (): JSX.Element[] => {
  return mockData.map((item) => <Item key={item.eventId}>{item.sportName} - {item.events}</Item>)
}

function LiveInfoBar(): JSX.Element {
  return (
    <LiveInfoBarContainer>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        {renderEvents()}
      </Stack>
    </LiveInfoBarContainer>
  )
}

export default LiveInfoBar
