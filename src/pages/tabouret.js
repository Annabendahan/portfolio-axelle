import * as React from "react"
import Layout from '../components/layout'
import t1 from '../images/tabouret/t1.jpg'
import t2 from '../images/tabouret/t2.jpg'
import t3 from '../images/tabouret/t3.png'

import { Link } from 'gatsby';



const Tabouret = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>TABOURET</h3>
                <h5>Design, conception et prototypage. </h5>
                 <p>La démarche de ce projet avait pour but de nous apprendre à gérer un projet dans son ensemble. De la création du design au prototype en passant par une maquette de principe en appliquant tous les processus de gestion de projet: Sketchs, convergences style et matières, conception et prototypage.</p>
                 <hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={t1} alt="main" />
                  <img src={t2} alt="main" />
                  <img src={t3} alt="main" />
                
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Tabouret

