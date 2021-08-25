import ResponsiveListContainer from './ResponsiveListContainer'

const renderEvents = (items) => {
  return Object.entries(items).map((item, idx) => <ResponsiveListContainer key={`${item[0]}-${idx}`} title={item[0]} items={item[1]} />)
}

export default renderEvents
