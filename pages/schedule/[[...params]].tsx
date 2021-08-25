import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { useState, useEffect } from 'react'

import renderEvents from '@components/renderEvents'
import { Box } from '@material-ui/core'
import useSWR from 'swr'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { weekNo, year, params } = context.query
  const sport = params ? params[0] : 'all'

  const res = await fetch('http://localhost:3000/api/volleyball')
  const data = await res.json()

  return {
    props: {
      data,
      sport,
      weekNo: weekNo ?? 34,
      year: year ?? 2021
    }
  }
}

// https://swr.vercel.app/docs/
const fetcher = (url: RequestInfo): unknown => fetch(url).then(res => res.json())

const Schedule = (props: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
  const {
    sport, weekNo, year
  } = props

  const [events, setEvents] = useState(props.data)
  const { data, error } = useSWR('/api/tabletennis', fetcher, { refreshInterval: 5 })

  useEffect(() => {
    if (data?.results) {
      setTimeout(() => setEvents(data), 2500) // simulate delay
    }
  }, [data])

  return <>
    <Box>{sport} {weekNo} {year}</Box>
    {error && <Box>Error</Box>}
    {events && renderEvents(events)}
  </>
}

Schedule.layout = 'secondary'

export default Schedule