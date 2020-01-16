import React from 'react';

import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required/>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs"  required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude"  required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude"  required/>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
     
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/31313701?s=460&v=4" alt="Jonathan-CO"/>
              <div className="user-info">
                <strong>Jonathan da Cunha Oliveira</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Biografia de Jonathan da Cunha Oliveira. Jonathan da Cunha Oliveira é u mdev Full Stack, apaixonado pelo que faz</p>
            <a href="https://github.com/Jonathan-CO">Acessar perfil no github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;