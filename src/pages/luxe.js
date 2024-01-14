import * as React from "react"
import Layout from '../components/layout'
import l1 from '../images/luxe/l1.jpg'
import l2 from '../images/luxe/l2.png'
import l3 from '../images/luxe/l3.jpg'



import { Link } from 'gatsby';



const Luxe = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>LUXE </h3>
                <h5>Rhino 3D, Keyshot et Photoshop.</h5>
                 <p>Le domaine du Luxe est un monde très exigeant. J'ai voulu faire un exercice pour m'entraîner à répondre à ses exigences avec un objet typique, comme si mon client était "Chanel".
Le rouge à lèvre m’a permis de mettre au défi mon œil et ma capacité à comprendre cette image au regard du luxe.<br/><br/>

 

</p>
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

export default Luxe

