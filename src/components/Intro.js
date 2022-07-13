import {Container,Row,Col,button} from "react-bootstrap"

const Intro = () =>{
    return(
        <div className="intro">
        <Container className="text-white text-center d-flex justify-content-center align-items-center ">
          <Row>
            <Col>
            <div className="title">NONTON GRATIS </div>
            <div className="title">NGGAK PAKEK KARCIS </div>
            <div className="introButton mt-4 text-center">
                <button variant="dark">Lihat Semua List</button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro