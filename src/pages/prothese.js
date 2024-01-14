import * as React from "react"
import Layout from '../components/layout'
import p1 from '../images/prothese/p1.jpg'
import p2 from '../images/prothese/p2.png'
import p3 from '../images/prothese/p3.jpg'

import { Link } from 'gatsby';



const Prothese = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>PROTHESE </h3>
                <h5>Rhino 3D, Keyshot et Photoshop.</h5>
                 <p>Je suis depuis longtemps intéressée par le secteur médical, notamment dans le domaine
de l’accessibilité et de la mobilité individuelle. Le handicap me préoccupe beaucoup
et j’aimerais,avec mon métier, pouvoir améliorer la vie et le quotidien des personnes
porteuses de handicap. Passionnée de sport,j’aimerais de par mon métier pouvoir rendre
le sport outdoor accessible à tous.<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={p1} alt="main" />
                  <img src={p2} alt="main" />
                  <img src={p3} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Prothese

