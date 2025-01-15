import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import { PiFlowerLight } from "react-icons/pi";

export default function AppHome() {
    return(
            <div id="home" className="home-padding">
            <Container className='my-identity'>
            <Row>
                <Col className='mai-name'>
                    <h5 className='font-style'>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    Hellooooooooooooo, I'm
                    </h5>
                    <h2>
                        Zahrin Savana
                        <PiFlowerLight />
                    </h2>
                    <p>
                    Welcome to my personal corner of the web – where creativity meets passion. Take a look around and enjoy the journey!!
                    </p>
                </Col>
                <Col className='my-photo' style={{ marginTop: '-50px' }}>
                    <Image src={require('../images/hijab girl.jpg')} className='filter-image' style={{ width: "300px", height:"300px" }} roundedCircle />
                </Col>
            </Row>
            </Container>
        </div>
    )
}