import * as React from "react"
import Layout from '../components/layout'
import c1 from '../images/cebe/c1.png'
import c2 from '../images/cebe/c2.png'
import c3 from '../images/cebe/c3.png'
import c4 from '../images/cebe/c4.png'


import { Link } from 'gatsby';



const Cebe = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>CEBE</h3>
                <h5>Keyshot, 3D envoyé par le client.</h5>
                 <p>Pendant mon stage, j'ai dû réaliser un rendu pour CEBE. Je n'avais pas de contrainte particulière à part le modèle de la lunette. J'étais libre de faire ce que je voulais. J'ai fait différents styles pour pouvoir laisser le choix au client. 
<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={c1} alt="main" />
                  <img src={c2} alt="main" />
                  <img src={c3} alt="main" />
                  <img src={c4} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Cebe

