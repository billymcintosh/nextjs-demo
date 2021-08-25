import DefaultLayout from './DefaultLayout'
import SecondaryLayout from './SecondaryLayout'

const layouts = {
  default: DefaultLayout,
  secondary: SecondaryLayout
}

export type LayoutProps = {
  children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined
}

const LayoutWrapper = (props: LayoutProps): JSX.Element => {
  // @ts-ignore
  const Layout = layouts[props.children?.type?.layout]

  return <Layout {...props}> {props.children}</Layout>
}

export default LayoutWrapper
