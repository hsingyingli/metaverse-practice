import { Container } from "@chakra-ui/react"

const Layout = ({children}) => {
  return (
    <Container maxW='container.lg'  minH='100vh' py='24px' >
      {children}
    </Container>
  )
}

export default Layout
