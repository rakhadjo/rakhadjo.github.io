import React from "react"
import Header from "./header/header"
import Footer from "./footer/footer"
import Contact from "./contact/contact"
import "../style/main.scss"

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Contact />
            <Footer />
        </div>
    )
}

export default Layout;