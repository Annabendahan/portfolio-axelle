import * as React from "react"
import Layout from '../components/layout'
import d1 from '../images/devialet/d1.jpg'

import { Link } from 'gatsby';



const Devialet = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>DEVIALET</h3>
                <h5> Keyshot, Photoshop, 3D déjà existante.</h5>
                 <p>La mise en avant des produits est également une compétence de modeleuse numérique à ne pas négliger. Ayant déjà un attrait pour l’image par mon passé dans l’audiovisuel,
c’est un exercice que j’aime beaucoup. J’ai dû mettre en place une direction artistique
afin de mettre le produit en valeur de par son éclairage et les matériaux qui sont arborés sur l’enceinte faisant d’elle un produit haut de gamme.<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={d1} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Devialet

