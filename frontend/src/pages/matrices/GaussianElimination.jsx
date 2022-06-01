import React from "react";
import Header from "../../components/base/header"
import Footer from "../../components/base/footer"
import GaussianEliminationBody from "../../components/matrices/gaussianEliminationBody";
const GaussianElimination = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <GaussianEliminationBody/>
            <Footer/>
        </div>
    )
}
export default GaussianElimination;