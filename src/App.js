import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './styles/App.css';

import Header from './Header';

export default function App() {

    const tagline = "Computer Science and Math Student at the University of Texas at Austin";
    
    return (
        <Router>
                {/* <Header/> */}
            <div className="App">
                <header className="App-header">
                    <h1>Arnav Chopra</h1>
                    <p>{tagline}</p>
                    <a href="mailto:arnav.chopra1864@gmail.com">arnav.chopra1864@gmail.com</a>
                </header>
                <main>
                    <section className="About">
                        <h2>About Me</h2>
                        <p>Write a brief description about yourself here.</p>
                    </section>
                    <section className="Projects">
                    <h2>Projects</h2>
                    {/* List your projects here */}
                        <div className="Project">
                            <h3>Project Name</h3>
                            <p>Description of the project</p>
                            <a href="#">Link to project/demo</a>
                            <a href="#">Link to GitHub repository</a>
                        </div>
                    </section>
                    <section className="Contact">
                        <h2>Contact Me</h2>
                        <p>Add contact information and a contact form here.</p>
                    </section>
                </main>
                <footer>
                    <p>&copy; 2024 Arnav Chopra</p>
                </footer>
            </div>
        </Router>
    );
  }
