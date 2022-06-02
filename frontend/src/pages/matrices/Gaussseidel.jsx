import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import GaussseidelBody from "../../components/matrices/gaussseidel";
const Gaussseidel = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <GaussseidelBody/>
            <Footer/>
        </div>
    )
}

export default Gaussseidel;