import * as React from "react"
import Layout from '../components/layout'
import t1 from '../images/tracer/t1.png'
import t2 from '../images/tracer/t2.mp4'
import t3 from '../images/tracer/t3.mp4'
import t4 from '../images/tracer/t4.mp4'
import t5 from '../images/tracer/t5.jpg'
import t6 from '../images/tracer/t6.jpg'
import t7 from '../images/tracer/t7.mp4'
import t8 from '../images/tracer/t8.jpg'







import { Link } from 'gatsby';



const Vespa = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>LE KITSCH AU CINÉMA</h3>
                <h5>Rhino 3D, Keyshot, Vred, Photoshop.</h5>
                 <p>  Pour mon projet de diplôme, j'ai choisi de réaliser le casque d'un personnage du jeu vidéo Mi-nu. Je l'ai modélisé en 3D, conçu pour la maquette, réalisé celle-ci, et enfin créé un rendu avec animation. Comme le sujet était basé sur une image tirée d'un jeu vidéo, j'ai dû interpréter les volumes afin de créer un casque "réel". Mon mémoire étant axé sur le kitsch au cinéma, j'ai décidé de m'appuyer sur ce projet pour approfondir mes recherches sur les couleurs et les matériaux. Cet exercice très complet m'a permis de travailler le design, la modélisation, le prototypage ainsi que le rendu.  



<br/><br/>

</p>
<hr></hr>
                </div>
                <div className="project__sec__pictures">
                  <img src={t1} alt="main" />
                    <div className="project__sec__pictures__line">
                        <video autoPlay loop muted playsInline={true}>
                            <source src={t2} crossOrigin="anonymous" type="video/mp4" />
                        </video>
                    </div>
                    <br/>
                    <div className="project__sec__pictures__line">
                        <video autoPlay loop muted playsInline={true}>
                            <source src={t3} crossOrigin="anonymous" type="video/mp4" />
                        </video>
                    </div>
                    <br/>
                    <div className="project__sec__pictures__line">
                        <video autoPlay loop muted playsInline={true}>
                            <source src={t4} crossOrigin="anonymous" type="video/mp4" />
                        </video>
                    </div>
                    <br/>
                  <div className="project__sec__pictures__line">
                    <img src={t5} alt="main" />
                    <img src={t6} alt="main" />
                  </div>
                  <br/>
                    <div className="project__sec__pictures__line">
                        <video autoPlay loop muted playsInline={true}>
                            <source src={t7} crossOrigin="anonymous" type="video/mp4" />
                        </video>
                    </div>
                    <br/>
                    <div className="project__sec__pictures__line">
                    <img src={t8} alt="main" />
                  
                  </div>
                
             
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Vespa

