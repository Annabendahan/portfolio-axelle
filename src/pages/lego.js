import * as React from "react"
import Layout from '../components/layout'
import l1 from '../images/lego/l1.png'
import l2 from '../images/lego/l2.jpeg'
import l3 from '../images/lego/l3.jpeg'

import { Link } from 'gatsby';



const Infographie = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>LEGO</h3>
                <h5>Modelage physique traditionnel</h5>
                 <p>Ce Lego est le fruit d’un travail entièrement manuel, reflet du modelage physique traditionnel. Sur ce projet j’ai dû apprendre à me servir de différentes machine-outils
et aussi comprendre et assimiler les différentes étapes de fabrications manuelles
d’une maquette allant du brut aux finitions.</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={l1} alt="main" />
                  <img src={l2} alt="main" />
                  <img src={l3} alt="main" />
                
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Infographie

