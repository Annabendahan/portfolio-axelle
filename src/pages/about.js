import * as React from "react"
import Layout from '../components/layout'
import ake from '../images/PHOTO_ID_PORTFOLIO.jpg'


const About = () => {
  return (
    <main>
       <Layout >
            <div className="about">
                <div className="about__sec">
                    <div className="about__sec__pic">
                        <img src={ake} alt="ake" />
                    </div>
                    <div className="about__sec__desc">
                        <p>
                            Passionnée d’image j’ai longtemps évolué dans un milieu strict.
                            L’aviation est un milieu passionnant mais mon besoin de création m’a poussée à changer de direction. La réorientation n’est pas un exercice naturel, mais l’envie d'exercer un métier qui a un sens pour moi dans un milieu où je m'épanouis est ma plus grande source de motivation et ma plus grande force.
                            <br/>
                            <br/>
                            <br/>
                    
                            <h4>STAGE</h4>
                       
                            
                            <b>KAIRN Alpin designers</b>
                            <br/>
                           <i> Avril - Août 2023 | GRENOBLE</i>
                            <br/>
                            Modeleur 3D/rendering.
                            <br/>
                            <br/>
                            <b>COPYWRIGHTE DESIGN</b>
                            <br/>
                            <i>Avril - juillet 2022 | PARIS</i>
                            <br/>
                            Maquettage/prototypage
                            <br/>
                            <br/>
                            <h4>FORMATION</h4>
                         
                           
                            <b>BACHELOR Modelage 3D</b>
                            <br/>
                            <i>Septembre 2020 | STRATE | Sévres</i>
                            <br/>
                            Modelage physique et numérique.
                            <br/>
                            Suivi de projet et suivi de réalisation: sketch modeling, convergence style technique, conception, réalisation, rendu.
                            <br/><br/>
                            <b>TITRE ENAC Technicien Aéronautique d’exploitation</b><br/>
                            <i> 2013 - 2015 | CFA des métiers de l’aérien | MASSY</i>
                            <br/><br/>
                           <b> BTS AUDIOVISUEL Option Image.</b>
                            <br/>
                            <i>2007- 2009 | Lycée Henri-martin | SAINT-QUENTIN</i>
                            <br/>
                            </p>
                    </div>
                </div>
                <div className="about__infos">
                    <div className="about__infos__c">
                        <h4> QUALITÉS </h4>
                        <p>Créativité <br/>
                        Capacité à fédérer <br/>
                        Polychronie <br/>
                        Anticipation <br/>
                        Esprit d’équipe <br/>
                        </p>
                    </div>

                    <div className="about__infos__a">
                        <div className="about__infos__a__l1"> 
                        <h4> COMPÉTENCES </h4>
                        <p>Anglais courant <br/>
                        Photographie<br/>
                        Suite Adobe<br/>
                        Rhino<br/>
                        </p>
                        </div>
                        <div className="about__infos__a__l2"> 
                   <br/> 
                        <p> Alias<br/>
                        Keyshot<br/>
                        Vred<br/>
                        Twinmotion<br/>
                        Logiciel aéronautique
                        </p>
                        </div>
                    </div>

                    <div className="about__infos__c">
                    <h4> CONTACT </h4>
                        <p>
                        30 | Décembre | 1988<br/>
                        Paris, Annecy, France<br/>
                        a.bendahan@strate.design<br/>
                        +33.6 59 85 52 07
                        </p>
                    </div>
                   
                  
                </div>
            </div>
       </Layout>
      
    </main>
  )
}

export default About

