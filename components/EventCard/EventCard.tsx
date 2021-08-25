import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box } from '@material-ui/system'

const tournamentLogos = [
  'atp_1000',
  'atp_250',
  'atp_500',
  'atp',
  'atp_challenger',
  'atp_worldchampionships',
  'wta_internationals',
  'wta_premier',
  'wta_premiermandatory',
  'wta_finals',
  'wta_elite_trophy',
  'australian_open',
  'roland_garros',
  'wimbledon',
  'us_open',
  'img_badminton_stream_test_grandprixgold',
  'atp_nextgenerationfinals'
]

function EventCard(props): JSX.Element {
  const {
    tournamentName,
    startDate,
  } = props

  const randomSprite = tournamentLogos[Math.floor(Math.random() * tournamentLogos.length - 1)]

  return (
    <Card>
      <Box className={`tournament--logo ${randomSprite}`}></Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tournamentName}
        </Typography>
          <Box>Start Date:</Box><Box>{startDate}</Box>
      </CardContent>
    </Card>
  )
}

export default EventCard
