import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import Splinequadraticbody from "../../components/functions/splinequadraticbody/index";

const SplineQuadratic = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Splinequadraticbody/>
            <Footer/>
        </div>
    )
}

export default SplineQuadratic;