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
                Experiência com trabalhos em equipe usando métodologias ágeis como scrum e kanban.
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
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </main>
    );
  }
}