import * as React from "react"
import Layout from '../components/layout'
import '../components/style.scss'
import home from '../images/PHOTO_ID_PORTFOLIO.png'




const IndexPage = () => {
  return (
    <main>
       <Layout>
       <div className="home">
         <div className="home__pic">
           <img src={home} alt="main" />
         </div>
       </div>
       </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
