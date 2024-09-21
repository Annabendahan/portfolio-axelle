import * as React from "react"
import Layout from '../components/layout'
import p1 from '../images/prothese/p1.jpg'
import p4 from '../images/prothese/p4.mp4'
import p3 from '../images/prothese/p3.jpg'

import { Link } from 'gatsby';



const Prothese = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>PROTHÈSE </h3>
                <h5>Rhino 3D, Keyshot et Photoshop.</h5>
                 <p>Je suis depuis longtemps intéressée par le secteur médical, notamment dans le domaine
de l’accessibilité et de la mobilité individuelle. Le handicap me préoccupe beaucoup
et j’aimerais, grace à mon métier, pouvoir améliorer la vie et le quotidien des personnes
porteuses de handicap. Passionnée de sport, j’aimerais aussi pouvoir rendre
le sport outdoor accessible à tous.<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={p1} alt="main" />
                 <br/>
                  <video autoPlay loop muted playsInline={true}>
                            <source src={p4} crossOrigin="anonymous" type="video/mp4" />
                        </video>
                        <br/>
                  <img src={p3} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Prothese

