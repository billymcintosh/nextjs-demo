import { CircularProgress, Typography, Box } from '@material-ui/core'
import useSWR from 'swr'
import renderEvents from '@components/renderEvents'

const fetcher = url => fetch(url).then(res => res.json())

const Timeline = (): JSX.Element => {
  const { data, error } = useSWR('/api/tabletennis', fetcher, { refreshInterval: 5 })

  return <>
    {error && <Typography>Error</Typography>}
    {!data && <Box display='flex' flex='1' justifyContent='space-around' alignContent='center' style={{ height: '100vh' }}><CircularProgress /></Box>}
    {data && renderEvents(data)}
  </>
}

Timeline.layout = 'secondary'

export default Timeline