import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './components/header';
import AppHome from './components/home';
import AppAbout from './components/about';
import AppSkills from './components/skills';
import AppProject from './components/project';
import AppContact from './components/contact';
import AppFooter from './components/footer';

function App() {
  return (
    <div className="App">
      <header>
        <AppHeader/>
      </header>
      <main>
        <div className='animation'>
        <AppHome/>
        </div>
        <div className='animation'>
        <AppAbout/>
        </div>
        <div className='animation'>
        <AppSkills />
        </div>
        <div className='animation'>
        <AppProject />
        </div>
        <div>
        <AppContact />
        </div>
      </main>
      <footer>
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
