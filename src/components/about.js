import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function AppAbout() {
    return(
            <div id="about" className='about-padding'>
            <h5 className='font-title'>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" rel="stylesheet" />
            --------About
            </h5>
            <Container className='my-identity'>
            <Row>
                <Col xs={3} className='bg-gif'>
                    <Image src={require('../images/hijab girl.jpg')} style={{ width: "150px", height:"150px"}} roundedCircle />
                </Col>
                <Col className='my-name'>
                    <h3 className='font-style'>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    Hiii, I'm Zahrin Savana
                    </h3>
                    <p>
                    Welcome to my personal website.
                    </p>
                    <p>
                    I am a 19-year-old Informatics Engineering student with a strong passion for technology, especially in web development. Since starting my journey in coding, I have created various projects – from simple to complex – that have helped me gain a deeper understanding of design, functionality, and user experience.
                    This website serves as a platform to showcase my work, share experiences, and continue learning about the digital world.
                    If you're interested in collaborating or just want to chat, feel free to reach out!
                    Check out some of the projects I've worked on in the portfolio section.
                    </p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}