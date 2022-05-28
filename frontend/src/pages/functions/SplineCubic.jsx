import React from "react";
import Header from "../../components/base/header";
import Footer from "../../components/base/footer";
import Splinecubicbody from "../../components/functions/splinecubicbody/index";

const SplineCubic = () => {
    return (
        <div className="container-fluid">
            <Header/>
            <Splinecubicbody/>
            <Footer/>
        </div>
    )
}

export default SplineCubic;