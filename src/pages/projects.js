import * as React from "react"
import Layout from '../components/layout'
import casque from '../images/casque.png'
import tabouret from '../images/tabouret.png'
import vespa from '../images/vespa.png'
import devialet from '../images/devialet.png'
import info from '../images/info.png'
import luxe from '../images/luxe.png'
import prothese from '../images/prothese.png'
import cebe from '../images/cebe.png'
import lego from '../images/lego.png'



import { Link } from 'gatsby';



const Projects = () => {
  return (
    <main>
       <Layout>
       <div className="projects">

       <div className="projects__mob">
                <h3> PROJETS</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </div>
              <hr></hr>

        <div className="projects__sec">

              <div className="projects__sec__list">
                <div className="projects__sec__list__line">
                  <Link to="/casque" className="projects__sec__list__p1">
                      <img src={casque} alt="main" />
                      <h4>CASQUE</h4>
                  </Link>
                  <Link to="/prothese" className="projects__sec__list__p1">
                      <img src={prothese} alt="main" />
                      <h4>PROTHESE</h4>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/luxe" className="projects__sec__list__p1">
                      <img src={luxe} alt="main" />
                      <h4>LUXE</h4>
                  </Link>
                  <Link to="/cebe" className="projects__sec__list__p1">
                      <img src={cebe} alt="main" />
                      <h4>CEBE </h4>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/devialet" className="projects__sec__list__p1">
                      <img src={devialet} alt="main" />
                      <h4>DEVIALET </h4>
                  </Link>
                  <Link to="/infographie" className="projects__sec__list__p1">
                      <img src={info} alt="main" />
                      <h4>INFOGRAPHIE </h4>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/lego" className="projects__sec__list__p1">
                      <img src={lego} alt="main" />
                      <h4>LEGO </h4>
                  </Link>
                  <Link to="/tabouret" className="projects__sec__list__p1">
                      <img src={tabouret} alt="main" />
                      <h4>TABOURET </h4>
                  </Link>
                </div>
                <div className="projects__sec__list__line">
                  <Link to="/vespa" className="projects__sec__list__p2">
                      <img src={vespa} alt="main" />
                      <h4>VESPA </h4>
                  </Link>
                </div>
              </div>

              <div className="projects__sec__exp">
                <h3> PROJETS</h3>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <br/>
                <hr></hr>
              </div>

        </div>
        
        </div>
    
       </Layout>
      
    </main>
  )
}

export default Projects

