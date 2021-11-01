import './Profile.css'
import React, { Component } from 'react';
import Typical from 'react-typical'


export default class Profile extends Component {
  render() {
    return (
      <main className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="profile-icon">
              <a
                href="https://www.facebook.com/profile.php?id=100013639140527"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bxl-facebook-square'></i>
              </a>
              <a
                href="https://www.linkedin.com/in/david-abc-souza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bxl-linkedin-square'></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCjsBqnIsuzDsy6n_EzhPcoA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bxl-youtube'></i>
              </a>
              <a
                href="https://github.com/dabcsouza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class='bx bxl-github' ></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Olá, Sou <span className="higlighted-text">David</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical 
                  loop={ Infinity }
                  steps={[
                    "Dev júnior FullStack",
                    2000,
                    "Git/GitHub",
                    2000,
                    "Linux",
                    2000,
                    "Shell Script",
                    2000,
                    "Html",
                    2000,
                    "CSS",
                    2000,
                    "JavaScript",
                    2000,
                    "React JS",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-tagline">
                Construção de páginas web usando HTML, CSS, Javascript e React JS.<br />
                {' '}
                Capacidade de trabalhar em equipe utilizando metodologias ágeis como scrum e Kanban.
                {' '}
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary" type="button">
                  Contrate
            </button>
            <a href="." download="David Souza.pdf">
              <button className="btn highlighted-btn">Currículo</button>
            </a>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,128L30,149.3C60,171,120,213,180,208C240,203,300,149,360,112C420,75,480,53,540,85.3C600,117,660,203,720,218.7C780,235,840,181,900,160C960,139,1020,149,1080,133.3C1140,117,1200,75,1260,85.3C1320,96,1380,160,1410,192L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
            </div>
          </div>
        </div>
      </main>
    );
  }
}