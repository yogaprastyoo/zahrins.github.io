import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function AppProject () {
    return(
        <div id="project" className="project-padding">
            <h5 className='font-title'>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" rel="stylesheet" />
                --------Past Project Experience
            </h5>
            <p>Explore the project i've worked so far</p>
            <div className='card-set'>
            <Card style={{ width: '18rem' }} className='project-col'>
            <Card.Img variant="top" className='img-project' src={require('../images/Screenshot (532).png')} style={{width: "250px", height: "100px"}}rounded />
            <Card.Body>
                <Card.Title style={{ fontSize: '16px' }} >Personel Website</Card.Title>
                <Card.Text>
                I created this website to showcase my profile, skills, and projects. It also serves as a platform for me to experiment with and learn new technologies.
                </Card.Text>
                <Button variant="primary" className='button-project'>See Project</Button>
            </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='project-col'>
            <Card.Img variant="top" className='img-project' src={require('../images/Screenshot (533).png')} style={{width: "250px", height: "100px"}}rounded  />
            <Card.Body>
                <Card.Title style={{ fontSize: '16px' }}>Marketplace Management Website</Card.Title>
                <Card.Text>
                I developed this website to help organize and manage marketplace operations. This platform streamlines inventory management and enhances decision-making.
                </Card.Text>
                <Button variant="primary" className='button-project' >See Project</Button>
            </Card.Body>
            </Card>
            </div>
        </div>
    )
}