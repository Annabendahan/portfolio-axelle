import * as React from "react"
import Layout from '../components/layout'
import i1 from '../images/infographie/i1.jpg'
import i2 from '../images/infographie/i2.jpg'

import { Link } from 'gatsby';



const Infographie = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>INFOGRAPHIE </h3>
                <h5>Photoshop, Illustrator et indesign.</h5>

                 <p>Ces projets ont été l’opportunité de pousser encore plus la démarche de direction artistique en utilisant des compétences de publication assistées par ordinateur avec les logiciels de la suite Adobe. J’ai pu développer des compétences qui me permettent d’aboutir aux présentations de mes travaux et d'acquérir des compétences diverses.
Pour chaque projet nous devions imaginer l'affiche d'un événement imposé.</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={i1} alt="main" />
                  <img src={i2} alt="main" />
                
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Infographie

