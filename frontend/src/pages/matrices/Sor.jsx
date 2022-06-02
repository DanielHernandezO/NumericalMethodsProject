import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import SorBody from "../../components/matrices/sor";
const Sor = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <SorBody/>
            <Footer/>
        </div>
    )
}

export default Sor;