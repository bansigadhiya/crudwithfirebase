import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CreateBook from '../Components/CreateBook'
import ViewBook from '../Components/ViewBook'

function Home() {
    return (
        <Container>
            <Row>
                <div className="col-6"><CreateBook /></div>
                <div className="col-6"><ViewBook /></div>
            </Row>
        </Container>
    )
}

export default Home
