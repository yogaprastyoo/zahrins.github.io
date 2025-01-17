import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";

export default function AppSkills() {
    return(
        <div id="skills" className='skills-padding'>
            <h5 className='font-title'>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" rel="stylesheet" />
                --------Skills
            </h5>
            <Container>
            <Row>
                <Col xs={2} className='skill-col'><IoLogoHtml5 /> HTML</Col>
                <Col xs={2} className='skill-col'><IoLogoCss3 /> CSS</Col>
                <Col  xs={2} className='skill-col'><SiJavascript /> Javascript</Col>
                <Col xs={2} className='skill-col'><FaReact /> ReactJS</Col>
                <Col xs={2} className='skill-col'><SiCplusplus /> C</Col>
                <Col xs={2} className='skill-col'><FaBootstrap /> Bootstrap</Col>
                <Col></Col>
                <Col></Col>
            </Row>
            </Container>
        </div>
    )
}