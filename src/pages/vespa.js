import * as React from "react"
import Layout from '../components/layout'
import v1 from '../images/vespa/v1.jpg'
import v2 from '../images/vespa/v2.jpeg'
import v3 from '../images/vespa/v3.jpeg'
import v4 from '../images/vespa/v4.jpeg'
import v5 from '../images/vespa/v5.jpeg'




import { Link } from 'gatsby';



const Vespa = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>VESPA</h3>
                <h5>Reconstruction sur rhino 3D du design d'un ancien élève pour impression,conception et prototypage.</h5>
                 <p>Dans ce projet j’ai pu aller au-delà de ce que j’avais exploré dans le projet du
tabouret. La gestion de projet, ma capacité à mêler différents processus de fabrication et la conception ont été mises en avant. Cette version de Vespa reflète un travail abouti de maquettage allant de la mise en application des processus de fabrication
jusqu’aux finitions peinture en passant par du thermoformage, du travail de la
mousse PU ou encore de la découpe laser et de la coulée de résine.



<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={v1} alt="main" />
                  <div className="project__sec__pictures__line">
                    <img src={v2} alt="main" />
                    <img src={v3} alt="main" />
                  </div>
                  <div className="project__sec__pictures__line">
                  <img src={v4} alt="main" />
                  <img src={v5} alt="main" />
                  </div>
                
             
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Vespa

