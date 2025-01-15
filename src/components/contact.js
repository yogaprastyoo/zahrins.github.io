import Button from 'react-bootstrap/Button';

import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function AppContact () {
    return(
        <div id="contact" className="contact-padding">
            <h5 className='font-title'>
            <link href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text&display=swap" rel="stylesheet" />
                --------Get in Touch
            </h5>
            <p>Let's connect and collaborate! Feel free to reach out through any of the platforms below.</p>
            <p>I’m always open to discussing new projects, ideas, or opportunities to be part of your vision.</p>
            <div className='app-logo'>
                <Button variant="outline-secondary" className='ig-logo'>
                    <a><IoLogoInstagram /></a>
                    <a href="https://www.instagram.com/zahrinsavanaa/" target="_blank" rel="noopener noreferrer">instagram</a>
                </Button>
                <Button variant="outline-secondary" className='x-logo'>
                    <a><FaXTwitter /></a>
                    <a href="https://x.com/zahrinnaa/" target="_blank" rel="noopener noreferrer">x</a>
                </Button>
                <Button variant="outline-secondary" className='git-logo'>
                    <a><FaGithub /></a>
                    <a href="https://github.com/Zahrins" target="_blank" rel="noopener noreferrer">Github</a>
                </Button>
            </div>
        </div>
    )
}