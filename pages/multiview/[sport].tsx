import { CircularProgress, Box } from '@material-ui/core'
import renderEvents from '@components/renderEvents'

const Multiview = ({ data }: any): JSX.Element => {
  return <>
    {!data && <Box display='flex' flex='1' justifyContent='space-around' alignContent='center' style={{ height: '100vh' }}><CircularProgress /></Box>}
    {data && renderEvents(data)}
  </>
}

Multiview.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/volleyball')
  const data = await res.json()

  return { data }
}

Multiview.layout = 'secondary'

export default Multiview