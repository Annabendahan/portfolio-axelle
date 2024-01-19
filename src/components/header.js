import * as React from "react"
import { Link } from 'gatsby';


// markup
const Header = () => {

    return (
        <main className="header">
            <title>Header</title>
            <Link to="/projects">  <h2>  projets </h2></Link>
            <Link to="/">  <h1>  AXELLE BENDAHAN </h1></Link>
            <Link to="/about">  <h2>  à propos</h2></Link>
        </main>
    )
}

export default Header
