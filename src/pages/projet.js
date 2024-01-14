import * as React from "react"
import Layout from '../components/layout'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import { Link } from 'gatsby';



const Project = () => {
  return (
    <main>
       <Layout>
        <div className="project">
            <div className="project__sec">
               <div className="project__sec__text">
                <h3>Mon projet 1 </h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="project__sec__pictures">
                  <img src={p1} alt="main" />
                  <img src={p2} alt="main" />
                  <img src={p1} alt="main" />
                </div>
            </div>
        </div>
       </Layout>
    </main>
  )
}

export default Project

