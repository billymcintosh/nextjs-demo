import { Box, Container, ContainerProps } from '@material-ui/core'
import { Item, StyledGrid } from './style'

import EventCard from '@components/EventCard'

type ResponsiveListContainerProps = {
  items: any[],
  title: string,
} & ContainerProps

function ResponsiveListContainer(props: ResponsiveListContainerProps): JSX.Element {
  const { items, title } = props

  const renderEventCards = (): JSX.Element[] => items.map((item) => (
    <Item item key={item} xs={12} sm={6} lg={3}>
      <EventCard {...item} />
    </Item>
  ))

  return (
    <Container maxWidth={false} {...props}>
      <Box>{title}</Box>
      <StyledGrid
        container
        wrap="wrap"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {renderEventCards()}
      </StyledGrid>
    </Container>
  )
}

export default ResponsiveListContainer
