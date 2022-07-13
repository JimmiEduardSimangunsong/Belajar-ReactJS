import {Navbar,Container,Nav} from "react-bootstrap"

const NavigationBar = () => {
   return(
    <div> 
    <Navbar variant="dark">
        <Container>
            <Navbar.Brand>JIM'S FILM</Navbar.Brand>
            <nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </nav>
        </Container>
    </Navbar>
    </div>
   )
}

export default NavigationBar