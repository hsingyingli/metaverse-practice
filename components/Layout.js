import { Container } from "@chakra-ui/react"

const Layout = ({children}) => {
  return (
    <Container maxW='container.md' minH='100vh' >
      {children}
    </Container>
  )
}

export default Layout
