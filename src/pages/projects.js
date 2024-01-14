import * as React from "react"
import Layout from '../components/layout'
import p1 from '../images/p1.png'
import { Link } from 'gatsby';



const Projects = () => {
  return (
    <main>
       <Layout>
       <div className="projects">
        <div className="projects__sec">

              <div className="projects__sec__list">
                <div className="projects__sec__list__line">
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                  <Link to="/projet" className="projects__sec__list__p1">
                      <img src={p1} alt="main" />
                      <h3>Projet 1 </h3>
                  </Link>
                </div>
              </div>

              <div className="projects__sec__exp">
                <h3> Projets</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>

        </div>
        
        </div>
    
       </Layout>
      
    </main>
  )
}

export default Projects

