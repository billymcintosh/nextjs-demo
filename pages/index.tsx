import LiveInfoBar from '@components/LiveInfoBar'
import ResponsiveListContainer from '@components/ResponsiveListContainer'

const items = Array.from(Array(10), (_, i) => i)

const Dashboard = (): JSX.Element => (
  <>
    <LiveInfoBar />
    <ResponsiveListContainer title="LIVE" items={items} />
    <ResponsiveListContainer title="SOON" items={items} />
  </>
)

Dashboard.layout = 'default'

export default Dashboard
