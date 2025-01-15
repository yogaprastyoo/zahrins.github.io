import Nav from 'react-bootstrap/Nav';

export default function AppHeader() {
    return(
        <div>
            <Nav defaultActiveKey="#home" as="ul" className='navhead'>
            <Nav className="me-auto">
            <Nav.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#skills">Skills</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#project">Project</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
            </Nav>
        </div>
    )
}