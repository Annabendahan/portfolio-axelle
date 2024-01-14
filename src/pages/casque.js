import * as React from "react"
import Layout from '../components/layout'
import c1 from '../images/casque/c1.jpg'
import c2 from '../images/casque/c2.jpg'
import c3 from '../images/casque/c3.jpg'
import c4 from '../images/casque/c4.jpg'
import c5 from '../images/casque/c5.png'
import c6 from '../images/casque/c6.jpg'
import { Link } from 'gatsby';



const Casque = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>CASQUE </h3>
                <h5>Rhino 3D, Keyshot et Photoshop</h5>
                 <p>Originaire d’Annecy j’ai un goût particulier ainsi qu’une passion pour la
montagne dans son ensemble. J’ai dû, en autonomie, m’approprier ce travail formel sur les équipements outdoor que l’on connaît bien chez nous. <br/> <br/>
</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={c1} alt="main" />
                  <img src={c2} alt="main" />
                  <div className="project__sec__pictures__line">
                      <img src={c3} alt="main" />
                      <img src={c4} alt="main" />
                  </div>
                  <img src={c5} alt="main" />
                  <img src={c6} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Casque

